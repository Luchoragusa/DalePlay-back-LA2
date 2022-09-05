exports.getAll = Model =>
    async (req, res, next) => {
        try{
            let elemts = await Model.findAll()
            if (elemts.length > 0) {
                return res.status(200).json({elemts, 'msg':'Encontrados correctamente'})
            } else {
                return res.status(404).json({'msg':'No hay datos'})
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({ msg: 'Error en el servidor' });
        }
    }

exports.getOne = Model =>
    async (req, res, next) => {
        try{
            const id = req.params.id
            let elemnt = await Model.findOne({ where: { id: id } });
            if (elemnt) {
                return res.status(200).json({elemnt, 'msg':'Encontrado correctamente'})
            } else {
                return res.status(404).json({'msg':'No hay datos'})
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({ msg: 'Error en el servidor' });
        }
    }

exports.deleteOne = Model => 
    async (req, res, next) => {
        try{
            const id = req.params.id;
            let elemnt = await Model.findByPk(id);
            if (!elemnt) {
                return res.status(404).json({msg:"Elemento no encontrado"})
            } else {
                elemnt.destroy().then(elemnt => {
                return res.status(200).json({elemnt, 'msg':'Eliminado correctamente'})
                })
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({ msg: 'Error en el servidor' });
        }
    }

exports.createOne = Model =>
    async (req, res, next) => {
        try{
            const elemnt = await Model.create(req.body);
            if (elemnt) {
                return res.status(200).json({elemnt, 'msg':'Creado correctamente'})
            } else {
                return res.status(404).json({'msg':'No se recibieron los datos'})
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({ msg: 'Error en el servidor' });
        }
    }

exports.updateOne = Model =>
    async (req, res, next) => {
        try{
            const params = req.body;
            const id = req.params.id;
            let elemnt = await Model.findByPk(id);
            if (elemnt) {
                elemnt.update(params).then(elemnt => {
                res.status(201).json({elemnt, 'msg':'Editado correctamente'})
                })
            } else {
                return res.status(404).json({msg:"Elemento no encontrado"})
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({ msg: 'Error en el servidor' });
        }
    }