const Router = require('express');
const router = Router();
const middleware = require('../validators/middleware');

// Con el middleware se puede hacer que se ejecute una funcion antes de que se ejecute otra, en este caos reviso que este logeado

const apiGameRouter = require('./api/game.routes');
router.use('/game', middleware.checkToken, apiGameRouter);

const apiRoleRouter = require('./api/role.routes');
router.use('/role', middleware.checkToken, apiRoleRouter);

const apiUserRouter = require('./api/user.routes');
router.use('/user', apiUserRouter);

const apiCategoryRouter = require('./api/category.routes');
router.use('/category', apiCategoryRouter);

const apiUserGameRouter = require('./api/usergame.routes');
router.use('/usergame', middleware.checkToken, apiUserGameRouter);

module.exports = router;