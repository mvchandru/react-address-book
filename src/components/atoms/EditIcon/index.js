import { useState } from "react";
import MaterialIcon from "../MaterialIcon";
import EditContact from "../../organisms/EditContact";
import classes from "./styles.module.scss";

const EditIcon = ({ toggleContactForm }) => {
  const [isContactShown, setIsContactShown] = useState(false);

  const toggleContactEditForm = () => {
    setIsContactShown((prev) => !prev);
  };

  return (
    <div className={classes.editIcon}>
      <MaterialIcon
        data-testid="edit-icon"
        name="edit"
        onClick={toggleContactEditForm}
      />
      {isContactShown && (
        <EditContact
          toggleContactEditForm={toggleContactEditForm}
          toggleContactForm={toggleContactForm}
        />
      )}
    </div>
  );
};

export default EditIcon;
