"use server";
import { signIn, signOut } from "@/auth";
import { customAuth, SignInData } from "./custom-auth";

export interface ApiResponse {
  success: boolean;
  errors?: string[];
  user?: {
    id: number;
    email: string;
    name?: string;
  };
  session?: {
    sessionId: string;
    user: {
      id: number;
      email: string;
      name?: string;
    };
    expiresAt: Date;
  };
}

export async function createUser(data: {
  name?: string;
  email: string;
  password: string;
}): Promise<ApiResponse> {
  try {
    const result = await customAuth.signUp(data);
    return result;
  } catch (error) {
    console.error("Error creating user:", error);
    return {
      success: false,
      errors: ["An error occurred while creating the user"],
    };
  }
}

export async function loginUser(prevState: any, formData: FormData) {
  try {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    // Check if sign in was successful
    if (result?.error) {
      return {
        success: false,
        errors: [result.error || "Invalid credentials"],
      };
    }
  } catch (error) {
    console.error("Error logging in user:", error);
    return {
      success: false,
      errors: ["An error occurred while logging in"],
    };
  }
}
export async function logoutUser() {
  await signOut({ redirect: false });
}
