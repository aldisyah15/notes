import winston from 'winston';

export const logger = winston.createLogger({
    level: 'info', // Log level (error, warn, info, verbose, debug, silly)
    format: winston.format.combine(
      winston.format.timestamp(), // Add timestamp to log entries
      winston.format.printf(({ timestamp, level, message }) => {
        //return `${timestamp} [${level}]: ${message}`;
        return JSON.stringify({ message: `${timestamp} ${level}: ${message}` });
      })
    ),
    transports: [
      new winston.transports.Console(), // Log to console
    ],
  });
  