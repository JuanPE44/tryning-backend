import { pool } from "../../db.js";

export class UserModel {
  static async getAll() {
    const [response] = await pool.query("SELECT * FROM Users");
    return response;
  }

  static async getById({ idUser }) {
    const [response] = await pool.query(
      "SELECT * FROM Users WHERE id_User = ?",
      [idUser]
    );
    return response;
  }

  static async createUser({ userData }) {
    const { id, name, email, image } = userData;

    const [response] = await pool.query(
      "INSERT INTO usuarios (id_user, name, email, image) VALUES (?,?,?,?)",
      [id, name, email, image]
    );

    return response;
  }
}
