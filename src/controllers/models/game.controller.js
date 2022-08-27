const { game } = require('../../database/models/index');

const findCategory = async (req,res) => {
    const id = req.params.id
    let games = await game.findAll({ where: { idCategory: id } });
    if (games) {
        return res.status(200).json({'status':200, games, 'msg':'Encontrados correctamente'})
    } else {
        return res.status(404).json({'msg':'No hay datos'})
    }
};

module.exports = {
    findCategory
};