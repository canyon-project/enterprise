import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const callbackUrl = searchParams.get("callbackUrl");
  const token = searchParams.get("token");
  const email = searchParams.get("email");

  if (!callbackUrl || !token || !email) {
    return NextResponse.error();
  } else {
    const user = await prisma.user.findFirst({
      where: {
        email,
        token,
      },
    });

    if (user) {
      const response = NextResponse.redirect(callbackUrl);
      response.cookies.set("callbackUrl", callbackUrl);
      response.cookies.set("token", token);
      response.cookies.set("email", email);
      return response;
    } else {
      //   错误
      return NextResponse.error();
    }
  }
}
