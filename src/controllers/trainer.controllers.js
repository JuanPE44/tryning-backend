import { validateTrainer } from "../schemas/trainer.schema.js";

export class TrainerController {
  constructor({ trainerModel }) {
    this.trainerModel = trainerModel;
  }

  getAll = async (req, res) => {
    try {
      const result = await this.trainerModel.getAll();
      console.log(result);
      res.json(result);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  getById = async (req, res) => {
    const { idTrainer } = req.params;
    try {
      const trainer = await this.trainerModel.getById({ idTrainer });
      if (trainer.length <= 0)
        return res.status(404).json({ error: "No se encontró el User" });
      res.json(trainer);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  create = async (req, res) => {
    const result = validateTrainer(req.body);
    console.log(result);

    if (result.error) {
      return res.status(400).json({ error: result.error.message });
    }

    try {
      const trainer = await this.trainerModel.create({
        trainerData: result.data,
      });
      res.json(trainer);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
}
