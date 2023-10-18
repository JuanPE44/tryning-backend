import { Router } from "express";
import { UserController } from "../controllers/user.controllers.js";

export const createUserRouter = ({ userModel }) => {
  const usersRoutes = Router();

  const userController = new UserController({ userModel });

  usersRoutes.get("/", userController.getAll);
  usersRoutes.post("/", userController.create);
  usersRoutes.post("/sendRequest", userController.sendRequest);
  usersRoutes.get("/:idUser", userController.getById);

  return usersRoutes;
};
