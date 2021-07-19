import { format } from 'winston';
import { stringifyMessage } from '../utils';

export const consoleFormat = format.printf(({ timestamp, level, message, meta, stack }) => {
    return `\nLEVEL: ${level} | TIMESTAMP: ${timestamp} |  MESSAGE: ${stringifyMessage(message)} ${
        meta ? `| META: ${JSON.stringify(meta)}` : ''
        } ${stack ? `| STACK: ${stack}` : ''} \n`;
});