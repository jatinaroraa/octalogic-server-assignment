const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("mydatabase", "postgres", "12345678", {
  host: "localhost",
  dialect: "postgres",
});

// Test connection
sequelize
  .authenticate()
  .then(() => console.log("Connected to PostgreSQL!"))
  .catch((err) => console.error("Unable to connect:", err));

module.exports = sequelize;
