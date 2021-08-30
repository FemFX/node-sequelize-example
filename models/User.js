const Sequelize = require("sequelize");

module.exports = sequelize.define("User", {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  
  name: { type: Sequelize.STRING(18), unique: true, allowNull: false },
  password: { type: Sequelize.STRING(18), allowNull: false },
});
