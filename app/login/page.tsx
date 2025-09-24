"use client";
import { loginUser } from "../lib/action";
import { useActionState, useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const [state, formAction, isPending] = useActionState(loginUser, {
    success: false,
    errors: [],
  });

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-900 px-6 py-12">
      <h1 className="mb-8 text-4xl font-bold text-white">Login</h1>
      <form
        className="w-full max-w-sm space-y-6"
        action={formAction}
      >
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-gray-300"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full rounded border border-gray-700 bg-gray-800 px-3 py-2 text-white focus:border-blue-500 focus:outline-none"
            required
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="mb-2 block text-sm font-medium text-gray-300"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full rounded border border-gray-700 bg-gray-800 px-3 py-2 text-white focus:border-blue-500 focus:outline-none"
            required
          />
        </div>
        {(error || (state && state.errors && state.errors.length > 0)) && (
          <div className="text-red-400 text-sm">
            {error}
            {state &&
              state.errors &&
              state.errors.map((err, idx) => <div key={idx}>{err}</div>)}
          </div>
        )}
        <button
          type="submit"
          className="w-full rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>
  );
}
