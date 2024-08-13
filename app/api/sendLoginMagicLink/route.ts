import type { NextApiRequest, NextApiResponse } from 'next'
// import { getSession } from 'next-auth/react';
import prisma from '../../../lib/prisma'
import jwt from 'jsonwebtoken';

const SECRET_KEY = 'your-secret-key'; // 你应该使用环境变量来存储这个密钥

// https://click.pstmrk.it/3s/enterprise.hoppscotch.com%2Fapi%2Fdashboard%2Fauth%2Fcallback%2Femail%3FcallbackUrl%3Dhttps%253A%252F%252Fenterprise.hoppscotch.com%252Fsetup%26token%3D9324e760ac15f2661f409c89e74edf98f3fd33a0603f3e089f70551d2a06efcf%26email%3Dwr_zhang25%2540163.com/I81_/TU23AQ/AQ/f5ff1175-a1be-4b1d-bfeb-92b34feb05bd/2/HBmJio6VgX
export async function POST(request) {
  // 获取请求体里的email
  // const email = request.body.email
  // 获取请求体中的 JSON 数据
  const data = await request.json();
  // console.log(data)
  const email = data.email

  // console.log(email,'email',request.body)
  // 创建 JWT
  const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: '100000h' });

  // 检查用户在不在不在就创建一个
    await prisma.user.upsert({
      where: { email: email },   // 查找条件：email 字段
      update: { token: token },       // 如果存在，则更新 name 字段
      create: {                                 // 如果不存在，则创建新的用户
        email: email,
        token: token,
      },
    })
  return Response.json({ data:`http://localhost:3000/api/dashboard/auth/callback/email?callbackUrl=http://localhost:3000&email=${email}&token=${token}` })
}
