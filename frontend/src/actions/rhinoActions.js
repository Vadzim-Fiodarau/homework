import http from '../config/http';

const RHINO_URI = '/rhinoceros';

export const fetchRhinosProcessing = () => {
  return {
    type: 'FETCH_RHINO_PROCESSING',
  };
}

export const createRhinoProcessing = () => {
  return {
    type: 'CREATE_RHINO_PROCESSING',
  };
}

export const fetchRhinosSuccess = (data) => {
  const { rhinoceroses } = data;
  return {
    type: 'FETCH_ALL_RHINOS_SUCCESS',
    rhinos: rhinoceroses,
  };
}

export const createRhinoSuccess = (data) => {
  return {
    type: 'CREATE_RHINO_SUCCESS',
    newRhino: data, // data === { id, name, species }
  };
}

export const rhinoApiError = (error) => {
  return {
    type: 'RHINO_API_ERROR',
    message: error.response ? error.response.data : 'Network Error',
    status: error.response ? error.response.status : 500,
  };
}

// Get all rhinos
export const fetchRhinosRequest = (filters) => {
  let query = '';
  for (const key of Object.keys(filters)) {
    if (query) {
      query += '&';
    }
    query += `${key}=${filters[key]}`;
  }
  return (dispatch) => {
    dispatch(fetchRhinosProcessing());
    return http.get(`${RHINO_URI}?${query}`)
      .then((response) => {
        dispatch(fetchRhinosSuccess(response.data));
      })
      .catch((error) => {
        dispatch(rhinoApiError(error));
      });
  }
}

// Create Rhino
export const createRhinoRequest = (rhinoData) => {
  return (dispatch) => {
    dispatch(createRhinoProcessing());
    return http.post(RHINO_URI, rhinoData)
      .then((response) => {
        dispatch(createRhinoSuccess(response.data));
      })
      .catch((error) => {
        dispatch(rhinoApiError(error));
      });
  }
}
