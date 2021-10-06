import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { users } from "../../../utils/mockResponse";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import AllContacts from "./index";

describe("All Contacts", () => {
  const mockStore = configureStore();
  const store = mockStore({ users });

  test("renders all the users data", () => {
    const { container } = render(
      <Provider store={store}>
        <AllContacts users={users} />
      </Provider>
    );
    expect(container.getElementsByClassName("data").length).toBe(25);
  });

  test("renders the search box", () => {
    const { container } = render(
      <Provider store={store}>
        <AllContacts users={users} />
      </Provider>
    );

    const searchBox = container.querySelector("div.searchBox");
    expect(searchBox).toBeInTheDocument();
  });

  test("renders the view form when the contact is clicked", async () => {
    const { container, queryByTestId } = render(
      <Provider store={store}>
        <AllContacts users={users} />
      </Provider>
    );

    const firstContact = container.querySelector("div.data");
    userEvent.click(firstContact);

    expect(queryByTestId("view-contact")).toBeTruthy();
  });
});
