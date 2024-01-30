const Joi = require('@hapi/joi');

const validRhinoSpecies = [
  'white_rhinoceros',
  'black_rhinoceros',
  'indian_rhinoceros',
  'javan_rhinoceros',
  'sumatran_rhinoceros',
];

exports.createRhino = Joi.object({
  name: Joi.string()
    .alphanum()
    .min(1)
    .max(20),
  species: Joi.any()
    .valid(...validRhinoSpecies),
});
