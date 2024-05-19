import { PrismaClient } from '@prisma/client';

const prismaClientSingleton = () => {
  console.log('Database URL:', process.env.POSTGRES_JI_PRISMA_URL);
  return new PrismaClient({
    datasources: {
      db: {
        url: process.env.POSTGRES_JI_PRISMA_URL,
      },
    },
  });
};
declare global {
  /* eslint-disable-next-line no-var */
  var prisma: PrismaClient | undefined;
}

const prisma = global.prisma ?? prismaClientSingleton();

if (process.env.NODE_ENV === 'development') global.prisma = prisma;

export const db = prisma;
