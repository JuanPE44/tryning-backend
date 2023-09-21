import { getJson } from "../../utils/getJson.js";

export class PlanModel {
  static async getAll() {
    const json = await getJson("../jsons/plans.json");
    return json;
  }

  static async getAllByUserId({ userId }) {
    const json = await getJson("../jsons/plans.json");
    const filtered = json.filter((plan) => plan.user_id == userId);
    return filtered;
  }

  static async getById({ planId }) {
    const exercises = await getJson("../jsons/exercises.json");
    const semanas = await getJson("../jsons/semanas.json");
    const plans = await getJson("../jsons/plans.json");

    const categorias = exercises.map((exercise) => {
      return { dia_id: exercise.dia_id, categoria: exercise.categoria };
    });
    const dias = semanas.map((dia) => {
      const muscles = categorias.filter((muscle) => muscle.dia_id == dia.id);
      const musclesStrings = muscles.map((muscle) => {
        return muscle.categoria;
      });
      return { ...dia, musculos: musclesStrings };
    });
    const diasFilter = dias.filter((sem) => sem.id_plan == planId);
    const [filtered] = plans.filter((plan) => plan.id == planId);

    return [{ ...filtered, semanas: diasFilter }];
  }
}
