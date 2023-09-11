import { createApp } from "./app.js";
import { UserModel } from "./models/local/user.js";

createApp({ userModel: UserModel });
