import type { NextApiRequest, NextApiResponse } from 'next'
// import { getSession } from 'next-auth/react';
import prisma from '../../../lib/prisma'
import jwt from "jsonwebtoken";
const SECRET_KEY = 'your-secret-key'; // 你应该使用环境变量来存储这个密钥

// export const dynamic = 'force-static'
// DELETE /api/post/:id
// https://click.pstmrk.it/3s/enterprise.hoppscotch.com%2Fapi%2Fdashboard%2Fauth%2Fcallback%2Femail%3FcallbackUrl%3Dhttps%253A%252F%252Fenterprise.hoppscotch.com%252Fsetup%26token%3D9324e760ac15f2661f409c89e74edf98f3fd33a0603f3e089f70551d2a06efcf%26email%3Dwr_zhang25%2540163.com/I81_/TU23AQ/AQ/f5ff1175-a1be-4b1d-bfeb-92b34feb05bd/2/HBmJio6VgX
export async function GET(req) {
  // 获取cookie
  console.log(req.cookies.get('token'))
  // 解析token
  const decoded = jwt.verify(req.cookies.get('token').value, SECRET_KEY);
  console.log(decoded,'decoded')
  const rows = await prisma.license.findMany({
    where: {
      email: decoded.email,
    },
  })
  return Response.json({ data:rows })
}
