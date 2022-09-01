exports.getAll = Model =>
    async (req, res, next) => {
        const elemts = await Model.findAll()
        if (elemts) {
            return res.status(200).json({elemts, 'msg':'Encontrados correctamente'})
        } else {
            return res.status(404).json({'msg':'No hay datos'})
        }
    }

exports.getOne = Model =>
    async (req, res, next) => {
        const id = req.params.id
        let elemnt = await Model.findOne({ where: { id: id } });
        if (elemnt) {
            return res.status(200).json({elemnt, 'msg':'Encontrado correctamente'})
        } else {
            return res.status(404).json({'msg':'No hay datos'})
        }
    }

exports.deleteOne = Model => 
    async (req, res, next) => {
        const id = req.params.id;
        let elemnt = await Model.findByPk(id);
        if (!elemnt) {
            return res.status(404).json({msg:"Elemento no encontrado"})
        } else {
            elemnt.destroy().then(elemnt => {
            return res.status(200).json({elemnt, 'msg':'Eliminado correctamente'})
            })
        }
    }

exports.createOne = Model =>
    async (req, res, next) => {
        const elemnt = await Model.create(req.body);
        if (elemnt) {
            return res.status(200).json({elemnt, 'msg':'Creado correctamente'})
        } else {
            return res.status(404).json({'msg':'No se recibieron los datos'})
        }
    }

exports.updateOne = Model =>
    async (req, res, next) => {
        const params = req.body;
        let elemnt = await Model.findByPk(id);
        if (id) {
            elemnt.update(params).then(elemnt => {
              res.status(201).json({elemnt, 'msg':'Editado correctamente'})
            })
        } else {
            return res.status(404).json({msg:"Elemento no encontrado"})
        }
    }