const Router = require('express');
const router = Router();
const { checkToken } = require('../validators/middleware');

// Con el middleware se puede hacer que se ejecute una funcion antes de que se ejecute otra, en este caos reviso que este logeado

const apiGameRouter = require('./api/game.routes');
router.use('/games', checkToken, apiGameRouter);

const apiRoleRouter = require('./api/role.routes');
router.use('/roles', apiRoleRouter);

const apiUserRouter = require('./api/user.routes');
router.use('/users', apiUserRouter);

const apiCategoryRouter = require('./api/category.routes');
router.use('/categories', checkToken, apiCategoryRouter);

const apiUserGameRouter = require('./api/usergame.routes');
router.use('/usergames', checkToken, apiUserGameRouter);

const apiDeveloperRouter = require('./api/developer.routes');
router.use('/developers', checkToken, apiDeveloperRouter);

const apiContactRouter = require('./api/contact.routes');
router.use('/contact', checkToken, apiContactRouter);

const apiDashboardRouter = require('./api/dashboard.routes');
router.use('/dashboard', apiDashboardRouter);

module.exports = router;