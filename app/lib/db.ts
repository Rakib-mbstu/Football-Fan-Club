import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl:
    process.env.NODE_ENV === "production"
      ? { rejectUnauthorized: false }
      : false,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

export interface User {
  id: number;
  email: string;
  password_hash: string;
  name?: string;
  created_at: Date;
  updated_at: Date;
  email_verified: boolean;
}

export interface Session {
  id: string;
  user_id: number;
  expires_at: Date;
  created_at: Date;
}

export interface CreateUserData {
  email: string;
  password_hash: string;
  name?: string;
}

export const db = {
  // Generic query function
  async query<T = any>(text: string, params?: any[]): Promise<T[]> {
    const client = await pool.connect();
    try {
      const result = await client.query(text, params);
      return result.rows;
    } finally {
      client.release();
    }
  },

  // User operations
  async createUser(userData: CreateUserData): Promise<User> {
    const query = `
      INSERT INTO users (email, password_hash, name)
      VALUES ($1, $2, $3)
      RETURNING id, email, password_hash, name, created_at, updated_at, email_verified
    `;
    const result = await this.query<User>(query, [
      userData.email,
      userData.password_hash,
      userData.name || null,
    ]);
    return result[0];
  },

  async getUserByEmail(email: string): Promise<User | null> {
    const query = "SELECT * FROM users WHERE email = $1";
    const result = await this.query<User>(query, [email]);
    return result[0] || null;
  },

  async getUserById(id: number): Promise<User | null> {
    const query = "SELECT * FROM users WHERE id = $1";
    const result = await this.query<User>(query, [id]);
    return result[0] || null;
  },

  async updateUserVerification(
    userId: number,
    verified: boolean = true
  ): Promise<void> {
    const query =
      "UPDATE users SET email_verified = $1, updated_at = CURRENT_TIMESTAMP WHERE id = $2";
    await this.query(query, [verified, userId]);
  },

  // Session operations
  async createSession(
    userId: number,
    sessionId: string,
    expiresAt: Date
  ): Promise<Session> {
    const query = `
      INSERT INTO sessions (id, user_id, expires_at)
      VALUES ($1, $2, $3)
      RETURNING id, user_id, expires_at, created_at
    `;
    const result = await this.query<Session>(query, [
      sessionId,
      userId,
      expiresAt,
    ]);
    return result[0];
  },

  async getSession(
    sessionId: string
  ): Promise<(Session & { user: User }) | null> {
    const query = `
      SELECT s.*, u.id as user_id, u.email, u.name, u.email_verified, u.created_at as user_created_at
      FROM sessions s
      JOIN users u ON s.user_id = u.id
      WHERE s.id = $1 AND s.expires_at > CURRENT_TIMESTAMP
    `;
    const result = await this.query(query, [sessionId]);
    if (!result[0]) return null;

    const row = result[0];
    return {
      id: row.id,
      user_id: row.user_id,
      expires_at: row.expires_at,
      created_at: row.created_at,
      user: {
        id: row.user_id,
        email: row.email,
        password_hash: "",
        name: row.name,
        created_at: row.user_created_at,
        updated_at: row.user_created_at,
        email_verified: row.email_verified,
      },
    };
  },

  async deleteSession(sessionId: string): Promise<void> {
    const query = "DELETE FROM sessions WHERE id = $1";
    await this.query(query, [sessionId]);
  },

  async deleteUserSessions(userId: number): Promise<void> {
    const query = "DELETE FROM sessions WHERE user_id = $1";
    await this.query(query, [userId]);
  },

  async cleanupExpiredSessions(): Promise<void> {
    const query = "DELETE FROM sessions WHERE expires_at <= CURRENT_TIMESTAMP";
    await this.query(query);
  },
};

// Close pool connection
export const closePool = async (): Promise<void> => {
  await pool.end();
};
