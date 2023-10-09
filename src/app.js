import express from "express";
import { corsMiddleware } from "./middlewares/cors.js";
import { createUserRouter } from "./routes/user.routes.js";
import { createPlanRouter } from "./routes/plan.routes.js";
import { createTrainerRouter } from "./routes/trainer.routes.js";

export const createApp = ({ userModel, planModel, trainerModel }) => {
  const app = express();

  app.use(corsMiddleware());
  app.use(express.json());
  app.disable("x-powered-by");

  app.use("/api/users", createUserRouter({ userModel }));
  app.use("/api/trainers", createTrainerRouter({ trainerModel }));
  app.use("/api/plans", createPlanRouter({ planModel }));

  const PORT = process.env.PORT ?? 7000;

  app.listen(PORT, () => {
    console.log(`server inciado en ${PORT}`);
  });
};
