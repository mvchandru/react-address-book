import { useState } from "react";
import MaterialIcon from "../MaterialIcon";
import EditContact from "../../organisms/EditContact";
import Toast from "../Toast";
import classes from "./styles.module.scss";

const EditIcon = ({ toggleContactForm }) => {
  const [isContactShown, setIsContactShown] = useState(false);
  const [isToastShown, setIsToastShown] = useState(false);

  const toggleContactEditForm = () => {
    setIsContactShown((prev) => !prev);
  };

  return (
    <div className={classes.editIcon}>
      <MaterialIcon name="edit" onClick={toggleContactEditForm} />
      {isContactShown && (
        <EditContact
          toggleContactEditForm={toggleContactEditForm}
          toggleContactForm={toggleContactForm}
        />
      )}
      {isToastShown && <Toast />}
    </div>
  );
};

export default EditIcon;
