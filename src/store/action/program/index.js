import * as types from "../actionTypes";


export const selectedProgram = (data) => {
 return {
  type: types.GET_SELECTED_PROGRAM,
  payload: data,
 };
};