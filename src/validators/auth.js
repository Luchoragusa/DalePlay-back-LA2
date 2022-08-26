const { check, validationResult } = require('express-validator');
const { User } = require('../database/models/index');
const bcrypt = require('bcryptjs');
const jwt = require('jwt-simple');

const validateEmail = [
    check('email')
        .exists()
        .withMessage('El email es obligatorio')
        .length({ min: 5 })
        .withMessage('El email debe tener al menos 5 caracteres')
        .isEmail()
        .withMessage('El email no es valido'),
    (req, res, next) => {
        validationResult(req, res, next);
    }
]

const validatePassword = [
    check('password')
        .exists()
        .withMessage('El password es obligatorio')
        .isLength({ min: 6 })
        .withMessage('El password debe tener al menos 6 caracteres'),
    (req, res, next) => {
        validationResult(req, res, next);
    }
]

export { 
    validateEmail,
    validatePassword
}