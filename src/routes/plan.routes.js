import { Router } from "express";
import { PlanController } from "../controllers/plan.controllers.js";

export const createPlanRouter = ({ planModel }) => {
  const plansRoutes = Router();

  const planController = new PlanController({ planModel });

  plansRoutes.get("/", planController.getAll);
  plansRoutes.post("/", planController.create);
  plansRoutes.patch("/:idPlan", planController.update);

  return plansRoutes;
};
