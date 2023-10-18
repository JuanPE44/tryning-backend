import { Router } from "express";
import { TrainerController } from "../controllers/trainer.controllers.js";

export const createTrainerRouter = ({ trainerModel }) => {
  const trainersRoutes = Router();

  const trainerController = new TrainerController({ trainerModel });
  trainersRoutes.get("/", trainerController.getAll);
  trainersRoutes.post("/", trainerController.create);
  trainersRoutes.get("/:idTrainer", trainerController.getById);
  trainersRoutes.get("/:idTrainer/request", trainerController.getRequests);
  trainersRoutes.patch(
    "/:idTrainer/updateRequest",
    trainerController.updateRequest
  );
  trainersRoutes.delete("/:idTrainer", trainerController.deleteById);

  return trainersRoutes;
};
