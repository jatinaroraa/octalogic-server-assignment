const { DataTypes } = require("sequelize");
const sequelize = require("../../database/database"); // Import Sequelize instance

const BookingLogs = sequelize.define(
  "BookingLogs",
  {
    userFirstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userLastName: {
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
    vechicleId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bookingStartDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    bookingEndDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    createdOn: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "bookingLogs",
    timestamps: false,
  }
);

module.exports = BookingLogs;
