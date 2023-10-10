import { Router } from "express";
import { SearchController } from "../controllers/search.controllers.js";

export const createSearchRouter = ({ queriesModel }) => {
  const searchRoutes = Router();

  const searchController = new SearchController({ queriesModel });
  searchRoutes.get("/", searchController.searchBy);
  return searchRoutes;
};
