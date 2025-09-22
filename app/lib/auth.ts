import bcrypt from "bcryptjs";
import { randomBytes } from "crypto";
import { db, User } from "./db";

// Auth types
export interface SignUpData {
  email: string;
  password: string;
  name?: string;
}

export interface SignInData {
  email: string;
  password: string;
}

export interface AuthUser {
  id: number;
  email: string;
  name?: string;
  emailVerified: boolean;
}

export interface SessionData {
  sessionId: string;
  user: AuthUser;
  expiresAt: Date;
}

// Configuration
const JWT_SECRET = process.env.JWT_SECRET!;
const SESSION_DURATION = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds

if (!JWT_SECRET) {
  throw new Error("JWT_SECRET environment variable is required");
}

// Password utilities
export const password = {
  async hash(plainPassword: string): Promise<string> {
    const saltRounds = 12;
    return bcrypt.hash(plainPassword, saltRounds);
  },

  async verify(
    plainPassword: string,
    hashedPassword: string
  ): Promise<boolean> {
    return bcrypt.compare(plainPassword, hashedPassword);
  },
};

// Validation utilities
export const validation = {
  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },

  isValidPassword(password: string): boolean {
    return password.length >= 4;
  },

  validateSignUp(data: SignUpData): { isValid: boolean; errors: string[] } {
    const errors: string[] = [];

    if (!data.email) {
      errors.push("Email is required");
    } else if (!this.isValidEmail(data.email)) {
      errors.push("Please provide a valid email address");
    }

    if (!data.password) {
      errors.push("Password is required");
    } else if (!this.isValidPassword(data.password)) {
      errors.push("Password must be at least 6 characters long");
    }

    if (data.name && data.name.trim().length < 2) {
      errors.push("Name must be at least 2 characters long");
    }

    return {
      isValid: errors.length === 0,
      errors,
    };
  },

  validateSignIn(data: SignInData): { isValid: boolean; errors: string[] } {
    const errors: string[] = [];

    if (!data.email) {
      errors.push("Email is required");
    } else if (!this.isValidEmail(data.email)) {
      errors.push("Please provide a valid email address");
    }

    if (!data.password) {
      errors.push("Password is required");
    }

    return {
      isValid: errors.length === 0,
      errors,
    };
  },
};

// Session utilities
export const session = {
  generateSessionId(): string {
    return randomBytes(32).toString("hex");
  },

  createExpiryDate(): Date {
    return new Date(Date.now() + SESSION_DURATION);
  },

  async create(user: User): Promise<SessionData> {
    const sessionId = this.generateSessionId();
    const expiresAt = this.createExpiryDate();

    await db.createSession(user.id, sessionId, expiresAt);

    return {
      sessionId,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        emailVerified: user.email_verified,
      },
      expiresAt,
    };
  },

  async get(sessionId: string): Promise<SessionData | null> {
    const sessionData = await db.getSession(sessionId);
    if (!sessionData) return null;

    return {
      sessionId: sessionData.id,
      user: {
        id: sessionData.user.id,
        email: sessionData.user.email,
        name: sessionData.user.name,
        emailVerified: sessionData.user.email_verified,
      },
      expiresAt: sessionData.expires_at,
    };
  },

  async destroy(sessionId: string): Promise<void> {
    await db.deleteSession(sessionId);
  },

  async destroyAllUserSessions(userId: number): Promise<void> {
    await db.deleteUserSessions(userId);
  },
};

// Main auth functions
export const auth = {
  async signUp(
    data: SignUpData
  ): Promise<
    { success: true; user: AuthUser } | { success: false; errors: string[] }
  > {
    // Validate input
    const validation_result = validation.validateSignUp(data);
    if (!validation_result.isValid) {
      return { success: false, errors: validation_result.errors };
    }

    try {
      // Check if user already exists
      const existingUser = await db.getUserByEmail(data.email.toLowerCase());
      if (existingUser) {
        return {
          success: false,
          errors: ["An account with this email already exists"],
        };
      }

      // Hash password
      const passwordHash = await password.hash(data.password);

      // Create user
      const user = await db.createUser({
        email: data.email.toLowerCase(),
        password_hash: passwordHash,
        name: data.name?.trim(),
      });

      return {
        success: true,
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
          emailVerified: user.email_verified,
        },
      };
    } catch (error) {
      console.error("Sign up error:", error);
      return {
        success: false,
        errors: ["An error occurred while creating your account"],
      };
    }
  },

  async signIn(
    data: SignInData
  ): Promise<
    | { success: true; session: SessionData }
    | { success: false; errors: string[] }
  > {
    // Validate input
    const validation_result = validation.validateSignIn(data);
    if (!validation_result.isValid) {
      return { success: false, errors: validation_result.errors };
    }

    try {
      // Find user by email
      const user = await db.getUserByEmail(data.email.toLowerCase());
      if (!user) {
        return { success: false, errors: ["Invalid email or password"] };
      }

      // Verify password
      const isPasswordValid = await password.verify(
        data.password,
        user.password_hash
      );
      if (!isPasswordValid) {
        return { success: false, errors: ["Invalid email or password"] };
      }

      // Create session
      const sessionData = await session.create(user);
      console.log("suckess");
      return {
        success: true,
        session: sessionData,
      };
    } catch (error) {
      console.error("Sign in error:", error);
      return { success: false, errors: ["An error occurred while signing in"] };
    }
  },

  async signOut(sessionId: string): Promise<void> {
    await session.destroy(sessionId);
  },

  async getUser(sessionId: string): Promise<AuthUser | null> {
    const sessionData = await session.get(sessionId);
    return sessionData?.user || null;
  },
};
