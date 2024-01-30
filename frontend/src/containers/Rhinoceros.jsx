import { connect } from 'react-redux';

import {
  createRhinoRequest,
  fetchRhinosRequest,
} from '../actions/rhinoActions';

import Rhinoceros from '../components/Rhinoceros';

function mapStateToProps(state) {
  return {
    ...state.rhinoceros,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    _createRhino: (rhinoData) => {
      dispatch(createRhinoRequest(rhinoData));
    },
    _fetchRhinos: (filters) => {
      dispatch(fetchRhinosRequest(filters));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Rhinoceros);
