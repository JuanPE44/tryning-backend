import { pool } from "../../db.js";

export class QueriesModel {
  static async searchUsername({ username }) {
    const [response] = await pool.query(
      "SELECT * FROM trainers WHERE username = ? UNION SELECT * FROM users WHERE username = ?",
      [username, username]
    );
    return response;
  }
}
