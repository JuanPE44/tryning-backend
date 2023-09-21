import { getJson } from "../../utils/getJson.js";

export class UserModel {
  static async getAll() {
    const json = await getJson("../jsons/users.json");
    return json;
  }

  static async getById({ idUser }) {
    const json = await getJson("../jsons/users.json");
    const filtered = json.find((user) => user.id == idUser);
    return filtered;
  }

  static async createUser({ userData }) {}
}
