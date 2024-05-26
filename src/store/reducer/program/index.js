import * as types from '../../actionTypes';


const initialState = {

};

const programReducer = (state = initialState, action) => {
 switch (action.type) {
  case types.GET_SELECTED_PROGRAM:
   return { ...state, selectedProgram: action.payload };

  default:
   return state;
 }
};

export default programReducer;
