const Joi = require('@hapi/joi');
const model = require('../models/rhino');
const rhinoSchema = require('../schemas/rhinoSchema');

exports.postRhino = (ctx, next) => {
  const validationResult = rhinoSchema.createRhino.validate(ctx.request.body);;
  if (!validationResult.error) {
    ctx.response.body = model.newRhino(ctx.request.body);
  } else {
    const errors = validationResult.error.details.map(detail => detail.message);
    ctx.response.body = errors;
    return ctx.status = 200;
  };
}

exports.getRhinos = (ctx, next) => {
  const rhinoceroses = model.getAll(ctx.query);
  ctx.response.body = { rhinoceroses };
}
