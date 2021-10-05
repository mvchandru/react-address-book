import axios from "axios";
import { apiUrl } from "./../../utils/constants";
import * as usersType from "./types";

const fetchUsersRequest = () => {
  return {
    type: usersType.GET_USERS_REQUEST,
  };
};

const fetchUsersSuccess = (data) => {
  return {
    type: usersType.GET_USERS_SUCCESS,
    payload: data,
  };
};

const fetchUsersFailure = (data) => {
  return {
    type: usersType.GET_USERS_FAILURE,
    payload: data,
  };
};

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest());
    axios
      .get(apiUrl.users)
      .then((response) => {
        const data = response.data.results;
        let users = [];
        if (data && Array.isArray(data) && data.length > 0) {
          users = data
            .map((user, index) => {
              return {
                ...user,
                type: index % 2 === 0 ? "Work" : "Private",
              };
            })
            .sort((a, b) => (a.name.first > b.name.first ? 1 : -1));
        }
        dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(fetchUsersFailure(errorMessage));
      });
  };
};

export const setSelectedUser = (id) => {
  return {
    type: usersType.SET_SELECTED_USER,
    payload: id,
  };
};

export const updateUser = (user, id) => {
  return {
    type: usersType.UPDATE_USER,
    payload: {
      user,
      id,
    },
  };
};

export const addUser = (user) => {
  return {
    type: usersType.ADD_USER,
    payload: user,
  };
};

export const deleteUser = (id) => {
  return {
    type: usersType.DELETE_USER,
    payload: { id },
  };
};
