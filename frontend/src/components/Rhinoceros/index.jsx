import React from 'react';

import RhinoInputs from './RhinoInputs';
import RhinoTable from './RhinoTable';
import Loading from '../Shared/Loading';

import '../../css/rhinoceros.css';

const Rhinoceros = (props) => {
  const {
    errors,
    processing,
    rhinos,
    _createRhino,
    _fetchRhinos,
  } = props;

  return (
    <section className='rhinoceros'>
      <RhinoInputs
        processing={ processing.createRhino }
        _createRhino={ _createRhino }
        _fetchRhinos={ _fetchRhinos } />

    <div className='rhino-table-container'>
      <h2>Rhinos</h2>
      {
        processing.fetchRhinos
          ? <Loading />
          : <RhinoTable rhinos={ rhinos } />
      }

      {
        errors.length > 0 &&
          <ul className='rhino-errors'>
            { errors.map((err, idx) => <li key={ idx }>{ err.message }</li>) }
          </ul>
      }
    </div>

    </section>
  );
}

export default Rhinoceros;
