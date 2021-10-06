import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedUser } from "../../../redux/users/action";
import ViewContact from "../ViewContact";
import SearchBox from "../../atoms/SearchBox";
import { getFilteredUsers } from "../../../utils/helpers";
import classes from "./styles.module.scss";

const AllContacts = ({ users }) => {
  const [usersList, setUsersList] = useState(users);
  const [isContactShown, setIsContactShown] = useState(false);
  const { selectedUser } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => setUsersList(users), [users]);

  const toggleContactForm = (id) => {
    dispatch(setSelectedUser(id));
    setIsContactShown((prev) => !prev);
  };

  const filterContacts = (value) => {
    setUsersList(getFilteredUsers(value, users));
  };

  return (
    <>
      <div className={classes.allContacts}>
        <div className={classes.section}>
          <h4 className={classes.count}>{`Contacts (${usersList?.length})`}</h4>
          <SearchBox onSearch={filterContacts} />
        </div>

        {usersList?.length === 0 ? (
          <p>No contacts to display.</p>
        ) : (
          <>
            <div className={classes.heading}>
              <div>Name</div>
              <div>Phone</div>
              <div>Email</div>
              <div>Status</div>
            </div>
            {usersList?.map(({ name, email, id, phone, type }) => (
              <div
                className={`${classes.data} ${
                  id.value === selectedUser ? classes.selected : ""
                }`}
                key={id.value}
                onClick={() => toggleContactForm(id.value)}
              >
                <div className={classes.name}>
                  {name.first} {name.last}
                </div>
                <div className={classes.phone}>{phone}</div>
                <div className={classes.hideOnMobile}>{email}</div>
                <div className={classes.hideOnMobile}>{type}</div>
              </div>
            ))}
          </>
        )}
      </div>
      {isContactShown && <ViewContact toggleContactForm={toggleContactForm} />}
    </>
  );
};

export default AllContacts;
