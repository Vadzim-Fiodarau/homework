import React, { useState } from 'react';

import Loading from '../Shared/Loading';

const RhinoInputs = (props) => {
  const {
    processing,
    _createRhino,
    _fetchRhinos,
  } = props;

  const [createName, setCreateName] = useState('');
  const [createSpecies, setCreateSpecies] = useState('');
  const [lookupName, setLookupName] = useState('');
  const [lookupSpecies, setLookupSpecies] = useState('');

  const createRhino = (e) => {
    e.preventDefault();
    _createRhino({
      name: createName,
      species: createSpecies,
    });
  }

  const getAllRhinos = (e) => {
    e.preventDefault();
    const filters = {};
    if (lookupName) {
      filters.name = lookupName;
    }
    if (lookupSpecies) {
      filters.species = lookupSpecies;
    }
    _fetchRhinos(filters);
  }

  return (
    <div className='rhino-inputs'>
      <h2>Rhino API Actions</h2>

      <form className='rhino-inputs__form'>
        <h4>Create Rhino</h4>
        <label htmlFor='create_rhino_name'>Rhino Name</label>
        <input
          className='rhino-inputs__form__input'
          id='create_rhino_name'
          onChange={ (e) => { setCreateName(e.target.value); } }
          name='createName'
          type='text'
          value={ createName } />
        <label htmlFor='create_rhino_species'>Rhino Species</label>
        <input
          className='rhino-inputs__form__input'
          id='create_rhino_species'
          onChange={ (e) => { setCreateSpecies(e.target.value); } }
          name='createSpecies'
          type='text'
          value={ createSpecies } />
        {
          processing
            ? <Loading className='create-loading' />
            : <button onClick={ createRhino }>Create Rhino</button>
        }
      </form>

      <form className='rhino-inputs__form'>
        <h4>Get All Rhinos</h4>
        <label htmlFor='get_rhino_name'>Rhino Name (optional)</label>
        <input
          className='rhino-inputs__form__input'
          id='get_rhino_name'
          onChange={ (e) => { setLookupName(e.target.value); } }
          name='lookupName'
          type='text'
          value={ lookupName } />
        <label htmlFor='create_rhino_species'>Rhino Species (optional)</label>
        <input
          className='rhino-inputs__form__input'
          id='create_rhino_species'
          onChange={ (e) => { setLookupSpecies(e.target.value); } }
          name='lookupSpecies'
          type='text'
          value={ lookupSpecies } />
        <button onClick={ getAllRhinos }>Get all Rhinos</button>
      </form>
    </div>
  );
}

export default RhinoInputs;
