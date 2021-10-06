import * as pageType from "./types";

const initialState = {
  pageTitle: "Address book",
};

const pageReducer = (state = initialState, action) => {
  switch (action.type) {
    case pageType.SET_PAGE_TITLE:
      return {
        ...state,
        pageTitle: action.payload,
      };
    default:
      return state;
  }
};

export default pageReducer;
