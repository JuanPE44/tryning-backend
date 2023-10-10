import { pool } from "../../db.js";
import { generateRandomUsername } from "../../utils/randomUsername.js";
export class TrainerModel {
  static async getAll() {
    const [response] = await pool.query("SELECT * FROM trainers");
    return response;
  }

  static async getById({ idTrainer }) {
    const [response] = await pool.query(
      "SELECT * FROM trainers WHERE id_trainer = ?",
      [idTrainer]
    );
    return response;
  }

  static async create({ trainerData }) {
    const { id, name, email, image } = trainerData;
    const username = generateRandomUsername({ name: "trainer" });

    const [response] = await pool.query(
      "INSERT INTO trainers (id_trainer, name, email, image, username) VALUES (?,?,?,?,?)",
      [id, name, email, image, username]
    );

    return response;
  }
}
