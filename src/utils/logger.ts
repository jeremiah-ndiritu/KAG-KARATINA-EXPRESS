import pino from "pino";
import { LOG_LEVEL, NODE_ENV } from "@config/env";

const isProd = NODE_ENV === "production";
const logLevel = LOG_LEVEL || "info";

// Pino Instance
const transport = pino.transport({
  targets: isProd
    ? [
        // Production: Minimal JSON output for cloud logging (Render/CloudWatch/etc)
        {
          target: "pino/file", // Standard stdout
          level: logLevel,
          options: { destination: 1 },
        },
      ]
    : [
        // Development: Human-readable "pretty" logs
        {
          target: "pino-pretty",
          level: logLevel,
          options: {
            colorize: true,
            translateTime: "yyyy-mm-dd HH:MM:ss",
            ignore: "pid,hostname",
          },
        },
      ],
});

export const logger = pino(
  {
    level: logLevel,
    base: undefined,
    timestamp: pino.stdTimeFunctions.isoTime,
    redact: {
      paths: ["req.headers.authorization", "password", "token"],
      censor: "[REDACTED]",
    },
  },
  transport,
);

// Morgan stream
export const stream = { write: (msg: string) => logger.info(msg.trim()) };
