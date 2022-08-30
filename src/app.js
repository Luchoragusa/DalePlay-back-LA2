const app = require('./server');
const http = require('http').createServer(app);
const {sequelize} = require('./database/models/index');
const { roles, categories, developers, users, games } = require('./database/seeders/seed');
const {Role, Category, Developer, User, Game} = require('./database/models/index');

const PORT = process.env.PORT || 3000;

http.listen(PORT, () => {
    console.log(`Running on a port: ${PORT}`);
    sequelize.sync({ force: true }).then(() => { // Si pongo el force en true se crean las tablas de nuevo
        console.log('Conexion a DB exitosa'); })

// Tengo los seeders aca

    .then (() => {
        roles.forEach(async (role) => Role.create(role))
    })
    .then (() => {
        categories.forEach(async (category) => Category.create(category))
    })
    .then (() => {
        developers.forEach(async (developer) => Developer.create(developer))
    })
    .then (() => {
        users.forEach(async (user) => User.create(user))
    })
    .then (() => {
        games.forEach(async (game) => Game.create(game))
    })

    .catch(error => {
        console.log('Se ha producido un error', error);
    })
});
