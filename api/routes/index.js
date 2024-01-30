const Router = require('koa-router');
const rhinoRoutes = require('./rhino');

const router = new Router();

router.post('/rhinoceros', rhinoRoutes.postRhino);
router.get('/rhinoceros', rhinoRoutes.getRhinos);

module.exports = router;
