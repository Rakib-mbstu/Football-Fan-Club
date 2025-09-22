"use server";
import { auth, SignInData } from "./auth";

export interface ApiResponse {
  success: boolean;
  errors?: string[];
  user?: {
    id: number;
    email: string;
    name?: string;
    emailVerified: boolean;
  };
}

export async function createUser(data: {
  name?: string;
  email: string;
  password: string;
}): Promise<ApiResponse> {
  try {
    const result = await auth.signUp(data);
    return result;
  } catch (error) {
    console.error("Error creating user:", error);
    return {
      success: false,
      errors: ["An error occurred while creating the user"],
    };
  }
}

export async function loginUser(data: SignInData): Promise<ApiResponse> {
  try {
    const result = await auth.signIn(data);
    return result;
  } catch (error) {
    console.error("Error logging in user:", error);
    return {
      success: false,
      errors: ["An error occurred while logging in"],
    };
  }
}
