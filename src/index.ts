import { consoleFormat, providerFormat } from "./formats";
import CustomLokiTransport from "./transports/loki";
import winston, { format } from 'winston';
import * as Transport from 'winston-transport';
import { PROVIDER } from "./constant";
import { getProvider } from "./utils";

let customFormatter;

const { splat, combine, timestamp, colorize, json } = format;

const transports: Array<Transport> = [];

const consoleProvider = getProvider(PROVIDER.CONSOLE);
if (consoleProvider) {
  transports.push(new winston.transports.Console())
  customFormatter = combine(colorize(), timestamp(), splat(), consoleFormat);
}

const grafanaProvider = getProvider(PROVIDER.GRAFANA);
if (grafanaProvider) {
  if (grafanaProvider.url) {
    const customTransport = new CustomLokiTransport(grafanaProvider.url);
    transports.push(customTransport.transport)
    customFormatter = combine(providerFormat(), json());
  } else {
    console.log('Url is required for grafana provider');
  }
}

export = winston.createLogger({
  level: process.env.LOG_LEVEL || "info",
  transports,
  format: customFormatter,
});

