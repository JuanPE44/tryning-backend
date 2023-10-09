import { pool } from "../db.js";
import { validateUser } from "../schemas/user.schema.js";

export class UserController {
  constructor({ userModel }) {
    this.userModel = userModel;
  }

  getAll = async (req, res) => {
    try {
      const result = await this.userModel.getAll();
      console.log(result);
      res.json(result);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  getById = async (req, res) => {
    const { idUser } = req.params;
    try {
      const user = await this.userModel.getById({ idUser });
      if (user.length <= 0)
        return res.status(404).json({ error: "No se encontró el User" });
      res.json(user);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  create = async (req, res) => {
    const result = validateUser(req.body);
    console.log(req.body);

    if (result.error) {
      return res.status(400).json({ error: result.error.message });
    }

    try {
      const user = await this.userModel.create({ userData: result.data });
      res.json(user);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  update = async (req, res) => {
    const { idUser } = req.params;

    const {
      nombre,
      apellido,
      fecha_nacimiento,
      genero,
      direccionUser,
      email,
      telefono,
    } = req.body;
    try {
      const [response] = await pool.query(
        "UPDATE Users SET nombre_User = IFNULL(?,nombre_User), apellido_User = IFNULL(?,apellido_User), edad_User = IFNULL(?,edad_User), genero_User = IFNULL(?,genero_User), direccion_User = IFNULL(?,direccion_User), email_User = IFNULL(?,email_User), telefono_User = IFNULL(?,telefono_User) WHERE id_User = ?",
        [
          nombre,
          apellido,
          fecha_nacimiento,
          genero,
          direccionUser,
          email,
          telefono,
          idUser,
        ]
      );
      if (response.affectedRows === 0)
        return res.status(404).json({
          mensaje: "User no encotrado",
        });
      res.sendStatus(204);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  };
}
