const { DataTypes } = require("sequelize");
const sequelize = require("../../database/database");

const VehicleList = sequelize.define(
  "VehicleList",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    wheels: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    createdOn: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "vehicleList",
    timestamps: false,
  }
);

module.exports = VehicleList;
