import winston from 'winston';
import winstonDaily from 'winston-daily-rotate-file';
import dotenv from 'dotenv';

dotenv.config();

const logDir = 'logs';
const { combine, timestamp, printf } = winston.format;

// log format 설정
const logFormat = printf((info) => {
  return `${info.timestamp} ${info.level}: ${info.message}`;
});

// transport 설정
const infoTransport = new winstonDaily({
  level: 'info',
  datePattern: 'YYYY-MM-DD',
  dirname: logDir + '/info',
  filename: `%DATE%.log`,
  maxFiles: 30, // 30일치 로그 파일 저장
  zippedArchive: true,
});

const errorTransport = new winstonDaily({
  level: 'error',
  datePattern: 'YYYY-MM-DD',
  dirname: logDir + '/error',
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

// Production 환경이 아닌 경우(dev 등)
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

export { logger };
