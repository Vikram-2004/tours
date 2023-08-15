import { NextResponse } from "next/server";
import prisma from "@/lib/prismadb";

interface Data {
  name: string;
  email: string;
}
export const POST = async (req: Request) => {
  const data: Data = await req.json();
  if (!data.name || !data.email)
    return new NextResponse("Missing fields", { status: 400 });

  const exist = await prisma.newsletter.findUnique({
    where: {
      email: data.email,
    },
  });

  if (exist) {
    return new NextResponse("Email is registered", { status: 400 });
  }
  const user = await prisma.newsletter.create({
    data: {
      name: data.name,
      email: data.email,
    },
  });
  return NextResponse.json(user);
};
