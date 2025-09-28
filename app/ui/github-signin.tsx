import { signIn } from "next-auth/react";

export default function GitHubSignIn() {
  return <button onClick={() => signIn("github")}>Sign in with GitHub</button>;
}
