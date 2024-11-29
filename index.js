const express = require("express");
const app = express();
const PORT = 9000;
const sequelize = require("./database/database");
const cors = require("cors");

app.use(express.json());
app.use(cors());
require("./routes")(app);
// app.use(require('"./database/database.js"'));
(async () => {
  try {
    await sequelize.sync(); // Sync all models to the database
    console.log("Database synchronized.");
  } catch (error) {
    console.error("Error syncing database:", error);
  }
})();
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
