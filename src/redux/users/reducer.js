import * as usersType from "./types";

const initialState = {
  isLoading: false,
  users: [],
  isError: false,
  errorMessage: "",
  selectedUser: "",
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case usersType.GET_USERS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case usersType.GET_USERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        users: action.payload,
      };
    case usersType.GET_USERS_FAILURE:
      return {
        ...state,
        isLoading: false,
        users: [],
        isError: true,
        errorMessage: action.payload,
      };
    case usersType.SET_SELECTED_USER:
      return {
        ...state,
        selectedUser: action.payload,
      };
    case usersType.ADD_USER:
      // Add the new user to users array and sort it by first name
      const usersArrayAfterAdd = [...state.users, action.payload];
      return {
        ...state,
        users: usersArrayAfterAdd.sort((a, b) =>
          a.name.first > b.name.first ? 1 : -1
        ),
      };
    case usersType.UPDATE_USER:
      // Find Index of the edited user object
      const index = state.users.findIndex(
        (user) => user.id.value === action.payload.id
      );
      const usersArrayAfterEdit = [...state.users];
      // Update the user object using index
      usersArrayAfterEdit[index] = action.payload.user;
      // Update the users array and sort it by first name
      return {
        ...state,
        users: usersArrayAfterEdit.sort((a, b) =>
          a.name.first > b.name.first ? 1 : -1
        ),
      };
    case usersType.DELETE_USER:
      // Filter the users array from the deleted one
      const usersArrayAfterDelete = state.users.filter(
        (user) => user.id.value !== action.payload.id
      );
      return {
        ...state,
        users: usersArrayAfterDelete,
      };
    default:
      return state;
  }
};

export default usersReducer;
