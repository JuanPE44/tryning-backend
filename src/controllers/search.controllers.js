export class SearchController {
  constructor({ queriesModel }) {
    this.queriesModel = queriesModel;
  }

  searchBy = async (req, res) => {
    const { username } = req.query;
    try {
      let result;
      if (username) {
        result = await this.queriesModel.searchUsername({ username });
      } else {
        result = { message: "ingresa un query para buscar" };
      }
      console.log(result);
      res.json(result);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  searchTrainers = async (req, res) => {
    const { name, certificate, location } = req.query;
    try {
      const result = await this.queriesModel.searchTrainers({
        name,
        certificate,
        location,
      });
      console.log(result);
      res.json(result);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
}
