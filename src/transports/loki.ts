import LokiTransport from "winston-loki";

export default class CustomLokiTransport {
  private hostUrl: string;

  constructor(url: string) {
    this.hostUrl = url;
  }

  get transport() {
    return new LokiTransport({
      host: this.hostUrl,
      labels: { job: process.env.SERVICE_LABEL }
    });
  }
}
