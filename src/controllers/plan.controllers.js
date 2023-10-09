import { validatePlan } from "../schemas/plan.schema.js";

export class PlanController {
  constructor({ planModel }) {
    this.planModel = planModel;
  }

  getAll = async (req, res) => {
    const { userId, planId } = req.query;
    try {
      let result;
      if (userId) {
        result = await this.planModel.getAllByUserId({ userId });
      } else if (planId) {
        result = await this.planModel.getById({ planId });
      } else {
        result = await this.planModel.getAll();
      }

      console.log({ estado: "consulta existosa", result });
      res.json(result);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  create = async (req, res) => {
    const result = validatePlan(req.body);

    if (result.error) {
      return res.status(400).json({ error: result.error.message });
    }

    try {
      const plan = await this.planModel.createplan({ planData: result });
      res.json(plan);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  update = async (req, res) => {
    const { idplan } = req.params;
  };
}
