"use client";
import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();
  console.log(session);
  const handleSignOut = async () => {
    signOut({ redirect: false });
    router.push("/");
  };
  return (
    <div>
      <p>{JSON.stringify(session)}</p>
      <Button onClick={handleSignOut}>signout</Button>
      <h1>hello</h1>
    </div>
  );
}
