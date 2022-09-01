const { Usergame, Game, User } = require('../../database/models/index');

const getAll = async (req, res) => {
    const userGames = await Usergame.findAll({
        include: [
            {
                model: Game,
                as: 'games',
                attributes: ['id', 'name', 'image']
            },
            {
                model: User,
                as: 'users',
                attributes: ['id', 'name', 'surname']      
            }
        ]
    });
    res.status(200).json({ userGames });
};

module.exports = {
    getAll
};