const defaultState = {
  errors: [],
  processing: {
    createRhino: false,
    fetchRhinos: false,
  },
  rhinos: [],
};

const rhinoReducer = (state=defaultState, action) => {
  switch (action.type) {
    case 'FETCH_RHINO_PROCESSING':
      return {
        ...state,
        processing: {
          ...state.processing,
          fetchRhinos: true,
        },
      };
    case 'CREATE_RHINO_PROCESSING':
      return {
        ...state,
        processing: {
          ...state.processing,
          createRhino: true,
        },
      };
    case 'FETCH_ALL_RHINOS_SUCCESS':
      return {
        ...state,
        errors: [],
        processing: {
          ...state.processing,
          fetchRhinos: false,
        },
        rhinos: action.rhinos,
      };
    case 'CREATE_RHINO_SUCCESS':
      return {
        ...state,
        errors: [],
        processing: {
          ...state.processing,
        },
        rhinos: [
          ...state.rhinos,
          {},
        ],
      };
    case 'RHINO_API_ERROR':
      return {
        ...state,
        errors: [
          {
            message: action.message,
            status: action.status,
          },
        ],
        processing: {
          ...state.processing,
          createRhino: false,
          fetchRhinos: false,
        },
      };
    case 'RHINO_FRONT_END_ERROR':
      return {
        ...state,
        errors: [
          {
            message: action.message,
          },
        ],
      };
    default:
      return state;
  }
}

export default rhinoReducer;
