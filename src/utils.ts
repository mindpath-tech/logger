import { PROVIDERS } from "./types";

export function stringifyMessage(message: any) {
  try {
    return JSON.stringify(message);
  } catch (error) {
    return message;
  }
}

export function getParsedProviders(): PROVIDERS {
  const logProviders = process.env.LOGS_PROVIDERS;
  let providers = [
    {
      name: 'console'
    }
  ]
  if (logProviders) {
    try {
      const safeLogProviders = logProviders
        .replace(/\\/g, '') // back slash
        .replace(/'/g, '"') // Single quote with double quote.
        .replace(/\s/g,''); // Whitespace

      providers = JSON.parse(safeLogProviders);
    } catch (error) {
      console.log('logProviders', logProviders);
      console.log('Error while parsing log providers value. Refer readme.', error);
    }
  }
  return providers;
}

export function getProvider(name: string) {
  const providers = getParsedProviders();
  const found = providers.find(provider => provider.name === name);
  return found;
}