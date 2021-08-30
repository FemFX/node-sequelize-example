const Sequelize = require("sequelize");
const sequelize = new Sequelize("node_sequelize", "root", "", {
  host: "localhost",
  dialect: "mysql",
  operatorAliases: false,
});
try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

global.sequelize = sequelize;

module.exports = sequelize;
