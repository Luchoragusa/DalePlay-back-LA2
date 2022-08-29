const { check } = require('express-validator');
const { validateResult } = require('../helpers/validateHelper');
const { Category,  Developer } = require('../database/models/index');

const validateCategory = [  
    check('name')
        .exists()
        .isLength({min:3, max:50})
        .withMessage('El nombre debe contener entre 3 a 50 letras'),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

const validateDeveloper = [ 
    check('name')
        .exists()
        .isLength({min:3, max:50})
        .withMessage('El nombre debe contener entre 3 a 50 letras'),
    check('image')
        .exists()
        .isURL()
        .withMessage('El link no es valido'),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

const validateRole = [  
    check('name')
        .exists()
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
        .isLength({min:3, max:20})
        .withMessage('Debe contener entre 3 a 50 letras'),
    check('idCategory')
        .exists()
        .isNumeric()
        .withMessage('La id de la categoria solo puede ser un numero.'),
    check('idDeveloper')
        .exists()
        .isNumeric()
        .withMessage('La id del desarrollador solo puede ser un numero.'),
    check('image')
        .exists()
        .isURL()
        .withMessage('El link no es valido'),
    check('valoration')
        .exists()
        .isFloat()
        .withMessage('No es una valoracion valida'),
    check('description')
        .exists()
        .isLength({min:10, max:500})
        .withMessage('No es una descripcion valida'),

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