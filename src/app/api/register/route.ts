import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prismadb";
import { hash } from "bcrypt";

interface Data {
  name: string;
  email: string;
  password: string;
}
export const POST = async (req: Request) => {
  try {
    const data: Data = await req.json();
    if (!data.name || !data.email || !data.password) {
      return new NextResponse("Missing fields ", { status: 400 });
    }

    const exist = await prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });

    if (exist) {
      return new NextResponse("User with that email already exists", {
        status: 400,
      });
    }
    const hashedPassword = await hash(data.password, 10);
    //creating a user
    const user = await prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: hashedPassword,
      },
    });
    return NextResponse.json(user);
  } catch (err) {
    return NextResponse.json({ message: "failed" });
  }
};
