import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../../redux/users/action";
import Loader from "../../components/atoms/Loader";
import Message, { MessageStyle } from "../../components/atoms/Message";
import AllContacts from "../../components/organisms/AllContacts";

const AddressBook = () => {
  const { isLoading, users, isError, errorMessage } = useSelector(
    (state) => state.users
  );
  const dispatch = useDispatch();

  // eslint-disable-next-line
  useEffect(() => dispatch(fetchUsers()), []);

  return isLoading ? (
    <Loader />
  ) : isError ? (
    <Message style={MessageStyle.Error} message={errorMessage} />
  ) : (
    <AllContacts users={users} />
  );
};

export default AddressBook;
