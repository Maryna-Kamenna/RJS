const Sequelize = require("sequelize");

const sequelize =  new Sequelize("ReactJs", "root", "", {
    dialect: "mysql",
    host: "localhost"
});

const Notes = require('./notes')(sequelize);

module.exports = {
    sequelize : sequelize,
    notes : Notes
}