import express from "express";
import cors from "cors";
import { env } from "./config/env";
import { router } from "./routes";

export function createApp() {
  const app = express();

  app.use(
    cors({
      origin: env.CLIENT_ORIGIN,
      credentials: true,
    })
  );

  app.use(express.json());

  app.get("/health", (_, res) => res.json({ status: "ok" }));

  app.use("/api", router);

  app.use(
    (
      err: any,
      _req: express.Request,
      res: express.Response,
      _next: express.NextFunction
    ) => {
      console.error(err);
      res
        .status(err.statusCode || 500)
        .json({ error: err.message || "Internal Server Error" });
    }
  );

  return app;
}
