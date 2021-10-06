import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { users } from "../../../utils/mockResponse";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import ViewContact from "./index";

describe("View Contact", () => {
  const initialState = {
    users: {
      users,
      selectedUser: "24175095",
    },
  };
  const mockStore = configureStore();
  const store = mockStore(initialState);

  test("renders the view form", () => {
    const { queryByTestId } = render(
      <Provider store={store}>
        <ViewContact />
      </Provider>
    );
    expect(queryByTestId("view-contact")).toBeTruthy();
  });

  test("renders three icons (edit, delete & cancel)", () => {
    const { container } = render(
      <Provider store={store}>
        <ViewContact />
      </Provider>
    );

    const iconSection = container.querySelector("div.icons");
    expect(iconSection.children.length).toBe(3);
  });

  test("renders the edit form when edit icon is clicked", () => {
    const { container, queryByTestId } = render(
      <Provider store={store}>
        <ViewContact />
      </Provider>
    );

    const editIcon = container.querySelector("[data-testid='edit-icon']");
    userEvent.click(editIcon);

    expect(queryByTestId("edit-contact")).toBeTruthy();
  });

  test("renders the delete confirmation when delete icon is clicked", () => {
    const { container, queryByTestId } = render(
      <Provider store={store}>
        <ViewContact />
      </Provider>
    );

    const deleteIcon = container.querySelector("[data-testid='delete-icon']");
    userEvent.click(deleteIcon);

    expect(queryByTestId("delete-confirmation")).toBeTruthy();
  });
});
