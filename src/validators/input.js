const { check } = require('express-validator');
const { validateResult } = require('../helpers/validateHelper');
const { Category,  Developer } = require('../database/models/index');

const validateCategory = [  
    check('name')
        .exists()
        .withMessage('El nombre es requerido')
        .isLength({min:3, max:50})
        .withMessage('El nombre debe contener entre 3 a 50 letras'),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

const validateDeveloper = [ 
    check('name')
        .exists()
        .withMessage('El nombre es requerido')
        .isLength({min:3, max:50})
        .withMessage('El nombre debe contener entre 3 a 50 letras'),
    check('image')
        .exists()
        .withMessage('La imagen es requerida')
        .isURL()
        .withMessage('El link no es valido'),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

const validateRole = [  
    check('name')
        .exists()
        .withMessage('El nombre es requerido')
        .isAlpha()
        .withMessage('Solo debe contener letras')
        .isLength({min:3, max:20})
        .withMessage('Debe contener entre 3 a 50 letras'),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

const validateGame = [ 
    check('name')
        .exists()
        .withMessage('El nombre es requerido')
        .isLength({min:3, max:20})
        .withMessage('Debe contener entre 3 a 50 letras'),
    check('idCategory')
        .exists()
        .withMessage('Debe seleccionar una categoria')
        .isNumeric()
        .withMessage('La id de la categoria solo puede ser un numero.'),
    check('idDeveloper')
        .exists()
        .withMessage('Debe contener una id del desarrollador.')
        .isNumeric()
        .withMessage('La id del desarrollador solo puede ser un numero.'),
    check('image')
        .exists()
        .withMessage('Debe contener una imagen')
        .isURL()
        .withMessage('El link no es valido'),
    check('valoration')
        .exists()
        .withMessage('Debe contener una valoracion')
        .isFloat()
        .withMessage('No es una valoracion valida'),
    check('description')
        .exists()
        .withMessage('Debe contener una descripcion')
        .isLength({min:10, max:500})
        .withMessage('No es una descripcion valida'),
    check('trailer')
        .exists()
        .withMessage('Debe contener un trailer')
        .isLength({min:100, max:300})
        .withMessage('El link no es valido'),
    check('isAvailable')
        .exists()
        .withMessage('Debe contener un estado de disponibilidad')
        .isBoolean()
        .withMessage('No es un estado valido'),
    check('date')
        .exists()
        .withMessage('Debe contener una fecha')
        .isDate()
        .withMessage('La fecha no es valida'),
        
    // Validar que la categoria exista
    async (req, res, next) => {
        const category = await Category.findByPk(req.body.idCategory)
        if(!category){
            return res.status(400).json({msg: "La categoria no existe"})
        }
    // Validar que el desarrollador exista
        const developer = await Developer.findByPk(req.body.idDeveloper)
        if(!developer){
            return res.status(400).json({msg: "El desarrollador no existe"})
        }
        next()
    },

    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = { validateCategory, validateDeveloper, validateRole, validateGame }