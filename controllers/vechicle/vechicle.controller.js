const sequelize = require("../../database/database");
const vechicleListModel = require("./vechicle.model");
const vechicleList = async (req, res) => {
  let { wheels, type } = req.query;

  let query = {};
  if (wheels) {
    query["where"] = { wheels: wheels };
  }
  if (type) {
    query["where"] = { ...query["where"], type };
  }
  const list = await vechicleListModel.findAll(query);
  return res.json({ data: list });
};

module.exports = {
  vechicleList,
};
