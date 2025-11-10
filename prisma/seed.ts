import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      name: "Admin",
      email: "admin@example.com",
    },
  });
}

main().catch(e => console.error(e)).finally(() => prisma.$disconnect());