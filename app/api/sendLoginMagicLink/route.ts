import type { NextApiRequest, NextApiResponse } from "next";
// import { getSession } from 'next-auth/react';
import prisma from "../../../lib/prisma";
import jwt from "jsonwebtoken";

const SECRET_KEY = "your-secret-key"; // 你应该使用环境变量来存储这个密钥

export async function POST(request) {
  // 获取请求体里的email
  // const email = request.body.email
  // 获取请求体中的 JSON 数据
  const data = await request.json();
  // console.log(data)
  const email = data.email;

  // console.log(email,'email',request.body)
  // 创建 JWT
  const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: "100000h" });

  // 检查用户在不在不在就创建一个
  await prisma.user.upsert({
    where: { email: email }, // 查找条件：email 字段
    update: { token: token }, // 如果存在，则更新 name 字段
    create: {
      // 如果不存在，则创建新的用户
      email: email,
      token: token,
    },
  });
  // const url = `https://enterprise-production.up.railway.app`
  const url = `http://localhost:3000`;
  return Response.json({
    data: `${url}/api/dashboard/auth/callback/email?callbackUrl=${url}/pricing&email=${email}&token=${token}`,
  });
}
