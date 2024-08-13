import jwt from "jsonwebtoken";
import prisma from "@/lib/prisma";
const SECRET_KEY = 'your-secret-key'; // 你应该使用环境变量来存储这个密钥

export async function GET(req) {
  // 获取cookie
  console.log(req.cookies.get('token'))
  // 解析token
  const decoded = jwt.verify(req.cookies.get('token').value, SECRET_KEY);
  console.log(decoded,'decoded')
  const user = await prisma.user.findFirst({
    where: {
      email: decoded.email,
    },
  })
  return Response.json(user)
}
