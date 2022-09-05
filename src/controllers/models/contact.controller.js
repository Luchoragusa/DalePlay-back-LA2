const { Contact, User } = require('../../database/models/index');

const create =  async (req, res) => {
    try{
        const id = req.userId;
        const user = await User.findByPk(id);
        const contact = await Contact.create({email: user.email, message: req.body.message});
        if (contact) {
            return res.status(200).json({'msg':'Creado correctamente', contact})
        } else {
            return res.status(404).json({'msg':'No se recibieron los datos'})
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Error en el servidor' });
    }
}


module.exports = {
    create
};