import { FETCH_DATA, UPDATE_ITEMS, IS_ERROR  } from "../actions/actions";

const initialState = {
    prices: [],
    isFetchingData: false,
    error: ""
  };
  
export const Reducer = (state = initialState, action) => {
  switch (action.type) {
      case FETCH_DATA:
          return {
              ...state,
              isFetchingData: true,
              prices: []
          };
        case UPDATE_ITEMS:
            return {
                ...state,
                isFetchingData: false,
                prices: action.payload
            }
        case IS_ERROR:
            return {
                ...state,
                isFetchingData: false,
                error: action.payload
            }
        default:
            return state;
  }
};
