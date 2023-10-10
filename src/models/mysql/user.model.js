import { pool } from "../../db.js";
import { generateRandomUsername } from "../../utils/randomUsername.js";
export class UserModel {
  static async getAll() {
    const [response] = await pool.query("SELECT * FROM Users");
    return response;
  }

  static async getById({ idUser }) {
    const [response] = await pool.query(
      "SELECT * FROM users WHERE id_User = ?",
      [idUser]
    );
    return response;
  }

  static async create({ userData }) {
    const { id, name, email, image } = userData;
    const username = generateRandomUsername({ name: "username" });

    const [rows] = await pool.query("SELECT * FROM users WHERE id_user = ?", [
      id,
    ]);

    if (rows.length === 0) {
      const [response] = await pool.query(
        "INSERT INTO users (id_user, name, email, image, username) VALUES (?,?,?,?,?)",
        [id, name, email, image, username]
      );
      return response;
    } else {
      return rows;
    }
  }
}
