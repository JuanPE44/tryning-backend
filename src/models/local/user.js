import { createRequire } from "module";

const r = createRequire(import.meta.url);
const json = await r("./users.json");

export class UserModel {
  static async getAll() {
    return json;
  }

  static async getById({ idUser }) {
    const filtered = json.find((user) => user.id == idUser);
    return filtered;
  }

  static async createUser({ userData }) {}
}
