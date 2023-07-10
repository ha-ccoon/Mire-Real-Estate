import winston from 'winston';
import WinstonDaily from 'winston-daily-rotate-file';
import dotenv from 'dotenv';

dotenv.config();

const logDir = 'logs';
const { combine, timestamp, printf } = winston.format;

// log format 설정
const logFormat = printf(
  (info) => `${info.timestamp} ${info.level}: ${info.message}`
);

// transport 설정
const infoTransport = new WinstonDaily({
  level: 'info',
  datePattern: 'YYYY-MM-DD',
  dirname: `${logDir}/info`,
  filename: `%DATE%.log`,
  maxFiles: 30,
  zippedArchive: true,
});

const errorTransport = new WinstonDaily({
  level: 'error',
  datePattern: 'YYYY-MM-DD',
  dirname: `${logDir}/error`,
  filename: `%DATE%.error.log`,
  maxFiles: 30,
  zippedArchive: true,
});

// 로그 생성
const logger = winston.createLogger({
  format: combine(
    timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    logFormat
  ),
  transports: [infoTransport, errorTransport],
});

// Production 환경이 아닌 경우 로그 설정
if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      ),
    })
  );
}

export default logger;
