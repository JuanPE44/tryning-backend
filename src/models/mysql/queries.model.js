import { pool } from "../../db.js";

export class QueriesModel {
  static async searchUsername({ username }) {
    const [response] = await pool.query(
      "SELECT * FROM trainers WHERE username = ? ",
      [username]
    );
    return response;
  }

  static async updateRequest({ idRequest, state }) {
    const [response] = await pool.query(
      "UPDATE requests SET state = ? WHERE id = ?",
      [state, idRequest]
    );

    return response;
  }

  static async getRequests({ idTrainer }) {
    const [response] = await pool.query(
      "SELECT * FROM requests WHERE id_trainer = ?",
      [idTrainer]
    );
    const usersInfo = [];
    for (const request of response) {
      const [userInfo] = await pool.query(
        "SELECT * FROM users WHERE id_user = ?",
        [request.id_user]
      );

      if (userInfo.length > 0) {
        const { name, email, image, username } = userInfo[0];
        usersInfo.push({
          user: {
            name,
            image,
            email,
            username,
          },
          state: request.state,
        });
      }
    }
    return usersInfo;
  }

  static async createRequest({ idUser, idTrainer }) {
    const [response] = await pool.query(
      "INSERT INTO requests (id_trainer, id_user) VALUES (?,?)",
      [idTrainer, idUser]
    );
    return response;
  }

  static async searchTrainers({ name, certificate, location }) {
    let query = "SELECT * FROM trainers WHERE 1=1";

    if (name) {
      query += ` AND name LIKE '%${name}%'`;
    }
    if (certificate) {
      query += ` AND certificate = '${certificate}'`;
    }
    if (location) {
      query += ` AND location = '${location}'`;
    }

    const [response] = await pool.query(query);
    return response;
  }
}
