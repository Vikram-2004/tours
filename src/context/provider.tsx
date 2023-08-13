"use client";
import { SessionProvider } from "next-auth/react";
import React from "react";

export const Provider = ({ children, session }: any) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};
