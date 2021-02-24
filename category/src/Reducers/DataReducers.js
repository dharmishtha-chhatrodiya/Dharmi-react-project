import { ADD_DATA, GET_DATA } from "../Actions/types";

const initialState = {
  data: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_DATA:
      return {
        ...state,
        category: state.category.length > 0 ? [{ name: action.payload, subCategory: [] }, { ...state.category }] : [{ name: action.payload, subCatgory: [] }],
      };
    default:
      return state;
  }
};
