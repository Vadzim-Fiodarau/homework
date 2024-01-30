import React from 'react';

const RhinoTable = (props) => {
  const { rhinos } = props;

  return (
    <table className='rhino-table'>

      <thead className='rhino-table-header'>
        <tr className='rhino-header-row'>
          <th scope="col" className='rhino-cell rhino-cell--header rhino-cell--id'>ID</th>
          <th scope="col" className='rhino-cell rhino-cell--header rhino-cell--name'>Name</th>
          <th scope="col" className='rhino-cell rhino-cell--header rhino-cell--species'>Species</th>
        </tr>
      </thead>

      <tbody className='rhino-table-body'>
        {
          rhinos.map((rhino, idx) => (
            <tr className='rhino-table-row' key={ idx }>
              <td className='rhino-cell rhino-cell--body rhino-cell--id'>{ rhino.id }</td>
              <td className='rhino-cell rhino-cell--body rhino-cell--name'>{ rhino.name }</td>
              <td className='rhino-cell rhino-cell--body rhino-cell--species'>{ rhino.species }</td>
            </tr>
          ))
        }
      </tbody>

    </table>
  );
}

export default RhinoTable;
