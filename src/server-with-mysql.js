import { createApp } from "./app.js";
import { UserModel } from "./models/mysql/user.js";
import { TrainerModel } from "./models/mysql/trainer.js";

createApp({ userModel: UserModel, trainerModel: TrainerModel });
