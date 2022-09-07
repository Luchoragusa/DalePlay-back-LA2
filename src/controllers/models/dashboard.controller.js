const { User, Game, Category, Developer, Usergame } = require('../../database/models/index');

const metrics = async (req, res) => {
    try {
        // Obtengo las metricas
        const numeberUsers = await getUsersMetric();
        const numberGames = await getGamesMetric();
        const numberCategories = await getCategoryMetric();
        const numberDevelopers = await getDeveloperMetric();
        const numberUsergames = await getUsergameMetric();

        // Creo el objeto con las metricas
        const metrics = {
            numberUsers: numeberUsers,
            numberGames: numberGames,
            numberCategories: numberCategories,
            numberDevelopers: numberDevelopers,
            numberUsergames: numberUsergames
        }

        return await res.status(200).json(metrics);
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error en el servidor' });
    }
}

const getUsersMetric = async () => {
    try {
        const numberUsers = await User.count();
        if (!numberUsers) {
            return res.status(404).json({ msg: 'Usuarios no encontrados' });
        }else {
            return numberUsers;
        }
    }
    catch (error) {
        console.log(error);
    }
}

const getGamesMetric = async () => {
    try {
        const numberGames = await Game.count();
        if (!numberGames) {
            return res.status(404).json({ msg: 'Juegos no encontrados' });
        }else {
            return numberGames;
        }
    }
    catch (error) {
        console.log(error);
    }
}

const getCategoryMetric = async () => {
    try {
        const numberCategories = await Category.count();
        if (!numberCategories) {
            return res.status(404).json({ msg: 'Categorias no encontradas' });
        }else {
            return numberCategories;
        }
    }
    catch (error) {
        console.log(error);
    }
}

const getDeveloperMetric = async () => {
    try {
        const numberDevelopers = await Developer.count();
        if (!numberDevelopers) {
            return res.status(404).json({ msg: 'Desarrolladores no encontrados' });
        }else {
            return numberDevelopers;
        }
    }
    catch (error) {
        console.log(error);
    }
}

const getUsergameMetric = async () => {
    try {
        const numberUsergames = await Usergame.count();
        if (!numberUsergames) {
            return res.status(404).json({ msg: 'Compras no encontradas' });
        }else {
            return numberUsergames;
        }
    }
    catch (error) {
        console.log(error);
    }
}

module.exports = {
    metrics
};