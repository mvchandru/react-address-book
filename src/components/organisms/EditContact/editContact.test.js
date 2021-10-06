import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { users } from "../../../utils/mockResponse";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import EditContact from "./index";

describe("Edit Contact", () => {
  const initialState = {
    users: {
      users,
      selectedUser: "24175095",
    },
  };
  const mockStore = configureStore();
  const store = mockStore(initialState);

  test("renders the edit form", () => {
    const { queryByTestId } = render(
      <Provider store={store}>
        <EditContact />
      </Provider>
    );
    expect(queryByTestId("edit-contact")).toBeTruthy();
  });

  test("renders two icons (delete & cancel)", () => {
    const { container } = render(
      <Provider store={store}>
        <EditContact />
      </Provider>
    );

    const iconSection = container.querySelector("div.icons");
    expect(iconSection.children.length).toBe(2);
  });

  test("renders the delete confirmation when delete icon is clicked", () => {
    const { container, queryByTestId } = render(
      <Provider store={store}>
        <EditContact />
      </Provider>
    );

    const deleteIcon = container.querySelector("[data-testid='delete-icon']");
    userEvent.click(deleteIcon);

    expect(queryByTestId("delete-confirmation")).toBeTruthy();
  });
});
