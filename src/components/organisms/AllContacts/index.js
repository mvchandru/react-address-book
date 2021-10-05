import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedUser } from "../../../redux/users/action";
import ViewContact from "../ViewContact";
import classes from "./styles.module.scss";

const AllContacts = ({ users }) => {
  const [isContactShown, setIsContactShown] = useState(false);
  const { selectedUser } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const toggleContactForm = (id) => {
    dispatch(setSelectedUser(id));
    setIsContactShown((prev) => !prev);
  };

  return (
    <>
      <div className={classes.allContacts}>
        <div className={classes.section}>
          <h4 className={classes.count}>{`Contacts (${users.length})`}</h4>
        </div>

        {users.length === 0 ? (
          <p>No contacts to display.</p>
        ) : (
          <>
            <div className={classes.heading}>
              <div>Name</div>
              <div>Phone</div>
              <div>Email</div>
              <div>Status</div>
            </div>
            {users.map(({ name, email, id, phone, type }) => (
              <div
                className={`${classes.data} ${
                  id.value === selectedUser && classes.selected
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
