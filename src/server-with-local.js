import { createApp } from "./app.js";
import { UserModel } from "./models/local/user.js";
import { PlanModel } from "./models/local/plan.js";

createApp({ userModel: UserModel, planModel: PlanModel });
