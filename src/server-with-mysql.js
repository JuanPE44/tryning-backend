import { createApp } from "./app.js";
import { UserModel } from "./models/mysql/user.model.js";
import { TrainerModel } from "./models/mysql/trainer.model.js";
import { QueriesModel } from "./models/mysql/queries.model.js";

createApp({
  userModel: UserModel,
  trainerModel: TrainerModel,
  queriesModel: QueriesModel,
});
