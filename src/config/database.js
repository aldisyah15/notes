
import { PrismaClient } from '@prisma/client';
//import winston from 'winston';
import {logger} from '../config/logger.js';

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
  //console.log('Query: ' + e.query)
  logger.info('Query: ' + e.query);
});

prisma.$on('error', (e) => {
  //logger.error(e);
  logger.error('error: ' + e.error);
});
