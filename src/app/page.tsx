"use client";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Home() {
  return (
    <div className="sm:m-8 bg-gray-100 overflow-x-hidden">
      <Hero />
      <div className="h-screen"></div>
    </div>
  );
}
