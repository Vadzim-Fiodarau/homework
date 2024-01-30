const uuidv4 = require('uuid/v4');
const rhinos = require('../data/rhinos');

exports.getAll = (query) => {
  const queryParams = Object.keys(query);

  if (queryParams.length === 0) {
    return rhinos;
  }

  const filteredRhinoceros = rhinos.filter((rhino) => queryParams.every((param) => rhino[param] === query[param]));
  return filteredRhinoceros;
};

exports.newRhino = data => {
  const newRhino = {
    id: uuidv4(),
    name: data.name,
    species: data.species,
  };

  rhinos.push(newRhino);
  return newRhino;
};
