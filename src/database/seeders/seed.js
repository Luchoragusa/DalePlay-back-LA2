const bcrypt = require('bcryptjs'); 

const roles = [
    { name: 'Admin'} ,
    { name: 'User'} ,
];

const categories = [
    { name: 'Action'} ,
    { name: 'Sport'} ,
    { name: 'Racing'}
];

const developers = [
    { name: 'Codemasters', image: 'https://cdn.discordapp.com/attachments/852889034723426324/1013239177300684820/codemasters-grid-image.jpg.adapt.crop191x100.628p.jpg'} ,
    { name: 'EA', image: 'https://cdn.discordapp.com/attachments/852889034723426324/1013239176117895208/1200px-EA_Sports_monochrome_logo.svg.png'} ,
    { name: 'Rockstar', image: 'https://cdn.discordapp.com/attachments/852889034723426324/1013239177581694986/Rockstar_Games_Logo.svg.png'} ,
    { name: 'Riot Games', image: 'https://cdn.discordapp.com/attachments/852889034723426324/1013239176692498482/riot-games.webp'} ,
];

const users = [
    { name: 'Admin', surname: 'Admin', email: 'admin@gamil.com', password: bcrypt.hashSync('admin', 10), confirmPassword: 'admin', idRole: 1 },
    { name: 'User', surname: 'User', email: 'user@gmail.com', password: bcrypt.hashSync('user', 10), confirmPassword: 'user', idRole: 2 },
];

const games = [
    {
        name: 'Fifa 23', 
        idCategory: 2,
        idDeveloper: 2,
        image: 'https://cdn.discordapp.com/attachments/852889034723426324/1013889311252430908/Fifa23.jpg',
        valoration: 4.5,
        description: 'FIFA 23 es un videojuego de fútbol desarrollado por EA Vancouver y EA Salt Lake y publicado por EA Sports. Es la vigésimo tercera entrega de la serie FIFA y se lanzó el 1 de octubre de 2022 para PlayStation 5, PlayStation 4, Xbox Series X, Xbox Series S, Xbox One, Nintendo Switch, Google Stadia y Microsoft Windows.',
    },
    {
        name: '2k23', 
        idCategory: 2,
        idDeveloper: 2,
        image: 'https://cdn.discordapp.com/attachments/852889034723426324/1013888962881921134/23k23.webp',
        valoration: 4.5,
        description: 'NBA 2K23 es un videojuego de baloncesto desarrollado por Visual Concepts y publicado por 2K Sports. Es la vigésimo tercera entrega de la serie NBA 2K y se lanzó el 10 de septiembre de 2022 para PlayStation 5, PlayStation 4, Xbox Series X, Xbox Series S, Xbox One, Nintendo Switch, Google Stadia y Microsoft Windows.',
    },
    {
        name: 'GTA V', 
        idCategory: 1,
        idDeveloper: 3,
        image: 'https://cdn.discordapp.com/attachments/852889034723426324/1013243734059651132/Car3Ftula_GTA_V.webp',
        valoration: 4,
        description: 'Grand Theft Auto V es un videojuego de acción-aventura de mundo abierto desarrollado por Rockstar North y publicado por Rockstar Games. Es el quinto título principal de la serie Grand Theft Auto y se lanzó inicialmente en 2013 para PlayStation 3 y Xbox 360, seguido por una versión para PlayStation 4 y Xbox One en 2014 y una versión para Microsoft Windows en 2015.',
    },
    {
        name: 'Valorant', 
        idCategory: 1,
        idDeveloper: 4,
        image: 'https://cdn.discordapp.com/attachments/852889034723426324/1013242663291605022/valorant-202052910331074_1.jpg',
        valoration: 2,
        description: 'Valorant es un videojuego de disparos en primera persona multijugador en línea desarrollado y publicado por Riot Games. El juego se lanzó el 2 de junio de 2020 para Microsoft Windows. El juego es gratuito para jugar, pero los jugadores pueden comprar paquetes de contenido adicional.',
    },
    {
        name: 'F1 22', 
        idCategory: 3,
        idDeveloper: 2,
        image: 'https://cdn.discordapp.com/attachments/852889034723426324/1013242391525855362/UWJxJ4D7pyHvyyePY3mFaASN.webp',
        valoration: 5,
        description: 'F1 2022 es un videojuego de carreras de automóviles desarrollado por Codemasters Birmingham y publicado por Codemasters. Es la vigésimo segunda entrega de la serie F1 y se lanzó el 16 de julio de 2022 para PlayStation 5, PlayStation 4, Xbox Series X, Xbox Series S, Xbox One, Nintendo Switch, Google Stadia y Microsoft Windows.',
    },
];

module.exports = {
    roles,
    categories,
    developers,
    users,
    games
};