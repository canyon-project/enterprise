import type { NextApiRequest, NextApiResponse } from 'next'
// import { getSession } from 'next-auth/react';
import prisma from '../../../lib/prisma'

export const dynamic = 'force-static'
// DELETE /api/post/:id
export async function GET() {
  const rows = await prisma.license.findMany()
  return Response.json({ data:rows })
}
