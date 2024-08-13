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
    // 1.检查token是否匹配
    // await prisma.user.create({
    //   data: {
    //     email,
    //     token,
    //   }
    // })
    const user = await prisma.user.findFirst({
      where: {
        email,
        token,
      },
    });

    if (user) {
      //   正确
      // Create a response and set the cookies
      const response = NextResponse.redirect(callbackUrl);

      // Set the cookies
      response.cookies.set("callbackUrl", callbackUrl);
      response.cookies.set("token", token);
      response.cookies.set("email", email);

      // Return the response which includes the redirection
      return response;
    } else {
      //   错误
      return NextResponse.error();
    }
  }
}
