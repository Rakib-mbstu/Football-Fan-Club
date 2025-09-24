import { auth } from "@/auth";

export default async function page() {
  const session = await auth();
  return <div>hello {session?.user?.name}</div>;
}
