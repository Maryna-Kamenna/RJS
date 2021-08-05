const Sequelize = require("sequelize");

const sequelize =  new Sequelize("ReactJs", "root", "", {
    dialect: "mysql",
    host: "localhost:8889"
});

const Notes = require('./notes')(sequelize);

module.exports = {
    sequelize : sequelize,
    notes : Notes
}