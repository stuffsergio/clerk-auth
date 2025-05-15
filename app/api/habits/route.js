import { auth } from "@clerk/nextjs";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  const { userId } = auth();
  if (!userId) return new Response("Unauthorized", { status: 401 });

  const habits = await prisma.habit.findMany({
    where: { userId },
    include: { logs: true },
  });

  const logs = {};
  habits.forEach(h => {
    logs[h.id] = h.logs.map(l => l.date);
  });

  return Response.json({ habits, logs });
}

export async function POST(req) {
  const { userId } = auth();
  if (!userId) return new Response("Unauthorized", { status: 401 });

  const { name } = await req.json();
  const habit = await prisma.habit.create({
    data: { userId, name },
  });

  return Response.json({ habit });
}
