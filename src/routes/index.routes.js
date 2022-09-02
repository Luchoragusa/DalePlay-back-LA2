const Router = require('express');
const router = Router();
const { checkToken } = require('../validators/middleware');

// Con el middleware se puede hacer que se ejecute una funcion antes de que se ejecute otra, en este caos reviso que este logeado

const apiGameRouter = require('./api/game.routes');
router.use('/game', checkToken, apiGameRouter);

const apiRoleRouter = require('./api/role.routes');
router.use('/role', apiRoleRouter);

const apiUserRouter = require('./api/user.routes');
router.use('/user', apiUserRouter);

const apiCategoryRouter = require('./api/category.routes');
router.use('/category', checkToken, apiCategoryRouter);

const apiUserGameRouter = require('./api/usergame.routes');
router.use('/usergame', checkToken, apiUserGameRouter);

const apiDeveloperRouter = require('./api/developer.routes');
router.use('/developer', checkToken, apiDeveloperRouter);

const apiContactRouter = require('./api/contact.routes');
router.use('/contact', checkToken, apiContactRouter);

module.exports = router;