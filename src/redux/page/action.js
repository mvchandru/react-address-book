import * as pageType from "./types";

export const setPageTitle = (data) => {
  return {
    type: pageType.SET_PAGE_TITLE,
    payload: data,
  };
};