require("dotenv").config();
const { DB_HOST, DB_NAME, DB_PASSWORD, DB_USER, NODE_ENV } = process.env;
const { Sequelize } = require("sequelize");

const UserModel = require("./models/User");
const PokemonModel = require("./models/Pokemon");

let sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
    logging: false,
    native: false,
});

UserModel(sequelize);
PokemonModel(sequelize);

const { User, Pokemon } = sequelize.models;

User.hasMany(Pokemon, {foreignKey: "userId" });
Pokemon.belongsTo(User, {foreignKey: "userId" });


module.exports = { sequelize, User, Pokemon };