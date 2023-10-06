
import { PrismaClient } from '@prisma/client';
import winston from 'winston';

export const logger = winston.createLogger({
  level: 'info', 
  format: winston.format.json(),
  transports: [
    new winston.transports.Console({})
   
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
