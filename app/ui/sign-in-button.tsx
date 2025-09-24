import { signIn } from "@/auth";

export default function SignInButton() {
  const handleSignIn = async () => {};

  return (
    <button
      type="submit"
      className="w-full rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
    >
      Login
    </button>
  );
}
