import * as http from "http";
import * as Koa from "koa";
import * as KoaRouter from "koa-router";

class Server {
  private server: http.Server = http.createServer();
  private port: number;
  private koa: Koa;

  constructor(port: number, router: KoaRouter) {
    this.port = port;
    this.koa = new Koa();
    this.koa.use(router.routes());
  }

  start(): Promise<void> {
    return new Promise<void>(resolve => {
      this.server.on("request", this.koa.callback());
      this.server.listen(this.port, () => {
        if (process.env.NODE_ENV === "test") { return; }
        console.log(`Listening on port ${this.port}`); // tslint:disable-line no-console
      });
    });
  }

  stop(): Promise<void> {
    return new Promise<void>(resolve => {
      this.server.removeAllListeners("request");
      this.server.close(resolve);
    });
  }
}

export default Server;
