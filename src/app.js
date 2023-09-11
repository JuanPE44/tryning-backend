import express from "express";
import { corsMiddleware } from "./middlewares/cors.js";
import { createUserRouter } from "./routes/user.routes.js";

export const createApp = ({ userModel }) => {
  const app = express();

  app.use(corsMiddleware());
  app.use(express.json());
  app.disable("x-powered-by");

  app.use("/api/users", createUserRouter({ userModel }));

  const PORT = process.env.PORT ?? 7000;

  app.listen(PORT, () => {
    console.log(`server inciado en ${PORT}`);
  });
};
