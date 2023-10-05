
import { PrismaClient } from '@prisma/client';
import winston from 'winston';

export const logger = winston.createLogger({
  level: 'info', // Anda dapat mengatur tingkat log sesuai kebutuhan Anda
  format: winston.format.json(),
  transports: [
    new winston.transports.Console({})
    // Anda juga dapat menambahkan transport lain di sini jika diperlukan
  ],
});

export const prisma = new PrismaClient({
  log: [
    {
      emit: 'event',
      level: 'query',
    },
    {
      emit: 'event',
      level: 'error',
    },
  ],
});

prisma.$on('query', (e) => {
  logger.query(e);
});

prisma.$on('error', (e) => {
  logger.error(e);
});
