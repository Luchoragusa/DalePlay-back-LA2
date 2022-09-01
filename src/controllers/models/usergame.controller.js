const { Usergame, Game, User } = require('../../database/models/index');

const getAll = async (req, res) => {
    const userGames = await Usergame.findAll({
        include: [
            {
                model: 'Game',
                attributes: ['idGame', 'name', 'image']
            },
            {
                model: 'User',
                attributes: ['idUser', 'name', 'surname']      
            }
        ]
    });
    res.status(200).json({ userGames });
};

module.exports = {
    getAll
};