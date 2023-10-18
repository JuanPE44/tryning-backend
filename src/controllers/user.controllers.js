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

  sendRequest = async (req, res) => {
    console.log(req.body);
    const { idUser, idTrainer } = req.body;
    try {
      const user = await this.userModel.sendRequest({ idTrainer, idUser });
      res.json(user);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
}
