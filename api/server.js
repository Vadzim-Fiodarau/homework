const Koa = require('koa');
const cors = require('koa-cors');
const compose = require('koa-compose');
const bodyParser = require('koa-bodyparser');
const routes = require('./routes');

const app = module.exports = new Koa();
const PORT = process.env.PORT || 4000;

app.proxy = true;

app.use(bodyParser());

app.use(cors({
  credentials: true,
}));

const allRoutes = compose([
  routes.routes(),
  routes.allowedMethods(),
]);

app.use(async (ctx, next) => {
  console.log('request received', {
    method: ctx.method,
    path: ctx.path,
    querystring: ctx.querystring,
  });
  await next();
});

app.use(allRoutes);

console.log(`Server listening on port: ${PORT}`);
const server = app.listen(PORT);
