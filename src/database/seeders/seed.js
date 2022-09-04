const bcrypt = require('bcryptjs'); 

const roles = [
    { name: 'Admin'} ,
    { name: 'User'} ,
];

const categories = [
    { name: 'Action'} ,
    { name: 'Sport'} ,
    { name: 'Racing'},
    { name: 'MOBA'},
];

const developers = [
    { name: 'Codemasters', image: 'https://cdn.discordapp.com/attachments/852889034723426324/1016123208858075226/1.png'} ,
    { name: 'EA', image: 'https://cdn.discordapp.com/attachments/852889034723426324/1016123209386573834/3.png'} ,
    { name: 'Rockstar', image: 'https://cdn.discordapp.com/attachments/852889034723426324/1016123210506444872/7.png'} ,
    { name: 'Riot Games', image: 'https://cdn.discordapp.com/attachments/852889034723426324/1016123210225434655/6.png'} ,
    { name: 'Playground Games', image: 'https://cdn.discordapp.com/attachments/852889034723426324/1016123209634033744/4.png'} ,
    { name: 'Mediatronic Games', image: 'https://cdn.discordapp.com/attachments/852889034723426324/1016123209910853713/5.png'}
];

const users = [
    { name: 'Admin', surname: 'Admin', email: 'admin@gmail.com', password: bcrypt.hashSync('admin123', 10), confirmPassword: 'admin', idRole: 1 },
    { name: 'User', surname: 'User', email: 'user@gmail.com', password: bcrypt.hashSync('user123', 10), confirmPassword: 'user', idRole: 2 },
];

const games = [
    {
        name: 'Fifa 23', 
        idCategory: 2,
        idDeveloper: 2,
        image: 'https://frroutneduar-my.sharepoint.com/:i:/g/personal/lragusa_frro_utn_edu_ar/Ea_JFpY5gmhMmtTglG7zoAMB4CLBcKMNjZA6yn5KL7OciQ?e=HD0ani',
        valoration: 4.5,
        description: 'FIFA 23 es un videojuego de fútbol desarrollado por EA Vancouver y EA Salt Lake y publicado por EA Sports. Es la vigésimo tercera entrega de la serie FIFA y se lanzó el 1 de octubre de 2022 para PlayStation 5, PlayStation 4, Xbox Series X, Xbox Series S, Xbox One, Nintendo Switch, Google Stadia y Microsoft Windows.',
    },
    {
        name: 'Fifa 22',
        idCategory: 2,
        idDeveloper: 2,
        image: 'https://frroutneduar-my.sharepoint.com/:i:/g/personal/lragusa_frro_utn_edu_ar/EcvhLyM6oxRPqt2R3QIBWYEBSlUWI6mpSz5OPwziwggPDg?e=KB7rsG',
        valoration: 4.5,
        description: 'FIFA 22 es un videojuego de fútbol desarrollado por EA Vancouver y EA Salt Lake y publicado por EA Sports. Es la vigésimo segunda entrega de la serie FIFA y se lanzó el 1 de octubre de 2021 para PlayStation 5, PlayStation 4, Xbox Series X, Xbox Series S, Xbox One, Nintendo Switch, Google Stadia y Microsoft Windows.',
    },
    {
        name: 'NBA 2K23', 
        idCategory: 2,
        idDeveloper: 2,
        image: 'https://frroutneduar-my.sharepoint.com/:i:/g/personal/lragusa_frro_utn_edu_ar/EVHOM9jqnOdGjgnL_Vsn3lQBqQPjtZD6SHs5_N12hZaCyQ?e=baIlTu',
        valoration: 4.5,
        description: 'NBA 2K23 es un videojuego de baloncesto desarrollado por Visual Concepts y publicado por 2K Sports. Es la vigésimo tercera entrega de la serie NBA 2K y se lanzó el 10 de septiembre de 2022 para PlayStation 5, PlayStation 4, Xbox Series X, Xbox Series S, Xbox One, Nintendo Switch, Google Stadia y Microsoft Windows.',
    },
    {
        name: 'NBA 2K22',
        idCategory: 2,
        idDeveloper: 2,
        image: 'https://frroutneduar-my.sharepoint.com/:i:/g/personal/lragusa_frro_utn_edu_ar/EVI4jlGAtQFOnAILRsF1SRsBkuybWSoIntna05dx3j8cAA?e=tfaxYb',
        valoration: 4.5,
        description: 'NBA 2K22 es un videojuego de baloncesto desarrollado por Visual Concepts y publicado por 2K Sports. Es la vigésimo segunda entrega de la serie NBA 2K y se lanzó el 10 de septiembre de 2021 para PlayStation 5, PlayStation 4, Xbox Series X, Xbox Series S, Xbox One, Nintendo Switch, Google Stadia y Microsoft Windows.',
    },
    {
        name: 'GTA V', 
        idCategory: 1,
        idDeveloper: 3,
        image: 'https://frroutneduar-my.sharepoint.com/:i:/g/personal/lragusa_frro_utn_edu_ar/Ebps31zC79xBuKt2RT3zdrQB94bgsIB6cmSopXWwjaUjZw?e=qRowCo',
        valoration: 4,
        description: 'Grand Theft Auto V es un videojuego de acción-aventura de mundo abierto desarrollado por Rockstar North y publicado por Rockstar Games. Es el quinto título principal de la serie Grand Theft Auto y se lanzó inicialmente en 2013 para PlayStation 3 y Xbox 360, seguido por una versión para PlayStation 4 y Xbox One en 2014 y una versión para Microsoft Windows en 2015.',
    },
    {
        name: 'Valorant', 
        idCategory: 1,
        idDeveloper: 4,
        image: 'https://frroutneduar-my.sharepoint.com/:i:/g/personal/lragusa_frro_utn_edu_ar/ER25gEWvH11DtCcupmXY0_gBKNFHyIQUJQI6kHBCs7Fo4A?e=HA959N',
        valoration: 2,
        description: 'Valorant es un videojuego de disparos en primera persona multijugador en línea desarrollado y publicado por Riot Games. El juego se lanzó el 2 de junio de 2020 para Microsoft Windows. El juego es gratuito para jugar, pero los jugadores pueden comprar paquetes de contenido adicional.',
    },
    {
        name: 'F1 22', 
        idCategory: 3,
        idDeveloper: 2,
        image: 'https://frroutneduar-my.sharepoint.com/:i:/g/personal/lragusa_frro_utn_edu_ar/EfdOE6aPyExIleXM7Liug_sBCWSSLzNb4LtV0Bc6VoL4lw?e=CtCKzC',
        valoration: 5,
        description: 'F1 2022 es un videojuego de carreras de automóviles desarrollado por Codemasters Birmingham y publicado por Codemasters. Es la vigésimo segunda entrega de la serie F1 y se lanzó el 16 de julio de 2022 para PlayStation 5, PlayStation 4, Xbox Series X, Xbox Series S, Xbox One, Nintendo Switch, Google Stadia y Microsoft Windows.',
    },
    {
        name: 'Cyberpunk 2077',
        idCategory: 1,
        idDeveloper: 3,
        image: 'https://frroutneduar-my.sharepoint.com/:i:/g/personal/lragusa_frro_utn_edu_ar/ERuk8HxT2exArZNYl1s9WqgBVQNS9uKq1OMBY3d0ZnqnqQ?e=FU6Pa9',
        valoration: 3,
        description: 'Cyberpunk 2077 es un videojuego de rol de acción y mundo abierto desarrollado y publicado por CD Projekt. Es el cuarto juego de la serie Cyberpunk, y se lanzó el 10 de diciembre de 2020 para PlayStation 4, Xbox One y Microsoft Windows, con versiones para PlayStation 5 y Xbox Series X/S lanzadas el 10 de diciembre de 2021.',
    },
    {
        name: 'Fall Guys',
        idCategory: 1,
        idDeveloper: 6,
        image: 'https://frroutneduar-my.sharepoint.com/:i:/g/personal/lragusa_frro_utn_edu_ar/EXc4XjITe6pInniBR8uA_kAB6m4qGjr47TFlUXpOHgtP3Q?e=lJBTOW',
        valoration: 4,
        description: 'Fall Guys: Ultimate Knockout es un videojuego de acción y deportes desarrollado por Mediatonic y publicado por Devolver Digital. Es un juego multijugador masivo en línea en el que hasta 60 jugadores compiten en una serie de minijuegos para ser el último jugador en pie.',
    },
    {
        name: 'Forza Horizon 4',
        idCategory: 3,
        idDeveloper: 5,
        image: 'https://frroutneduar-my.sharepoint.com/:i:/g/personal/lragusa_frro_utn_edu_ar/EV2aYm3t_ZdLuW0-SsYYNa8BkfFY8LwHIZHvkdgVBCO7Lw?e=wKfIgJ',
        valoration: 5,
        description: 'Forza Horizon 4 es un videojuego de carreras de automóviles desarrollado por Playground Games y publicado por Microsoft Studios. Es el cuarto título de la serie Forza Horizon y el decimotercero de la serie Forza, lanzado el 2 de octubre de 2018 para Xbox One y Microsoft Windows después de un lanzamiento exclusivo para Xbox One y Windows 10 el 28 de septiembre de 2016.',
    },
    {
        name: 'Forza Horizon 5',
        idCategory: 3,
        idDeveloper: 5,
        image: 'https://frroutneduar-my.sharepoint.com/:i:/g/personal/lragusa_frro_utn_edu_ar/ERsj5WRzpzNMkeEhXECRxlwBVGDWJ3aTBc8jQV6LdOHCaA?e=fYcZqO',
        valoration: 5,
        description: 'Forza Horizon 5 es un videojuego de carreras de automóviles desarrollado por Playground Games y publicado por Microsoft Studios. Es el quinto título de la serie Forza Horizon y el decimocuarto de la serie Forza, lanzado el 9 de noviembre de 2021 para Xbox Series X/S y Microsoft Windows después de un lanzamiento exclusivo para Xbox One y Windows 10 el 28 de septiembre de 2016.',
    },
    {
        name: 'League of Legends',
        idCategory: 4,
        idDeveloper: 4,
        image: 'https://frroutneduar-my.sharepoint.com/:i:/g/personal/lragusa_frro_utn_edu_ar/EW5dU8FDDd5HsFv0luHym_0BlkV-Cu5-1NKZOqJgOcyDIw?e=JdZD3a',
        valoration: 5,
        description: 'League of Legends es un videojuego de estrategia en línea y multijugador masivo desarrollado y publicado por Riot Games para Microsoft Windows y macOS. Es un juego gratuito para jugar, pero los jugadores pueden comprar paquetes de contenido adicional.',
    },
    {
        name: 'Read Dead Redemption 2',
        idCategory: 1,
        idDeveloper: 3,
        image: 'https://frroutneduar-my.sharepoint.com/:i:/g/personal/lragusa_frro_utn_edu_ar/EWrjTm1oI0RDnu0EAVQzXJkBesBWQjjkYN9UIIy-y3QIpA?e=eb1a8A',
        valoration: 5,
        description: 'Red Dead Redemption 2 es un videojuego de acción-aventura western desarrollado y publicado por Rockstar Games. Es la secuela de Red Dead Redemption, y se lanzó el 26 de octubre de 2018 para PlayStation 4 y Xbox One, y el 5 de noviembre de 2019 para Microsoft Windows y Stadia.',
    }
];

const usergames  = [
    { idUser: 1, idGame: 1 },
    { idUser: 1, idGame: 2 },
    { idUser: 1, idGame: 3 },

    { idUser: 2, idGame: 4 },
    { idUser: 2, idGame: 5 },
];

module.exports = {
    roles,
    categories,
    developers,
    users,
    games,
    usergames
};