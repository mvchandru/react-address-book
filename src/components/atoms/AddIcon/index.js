import { useState } from "react";
import MaterialIcon from "../MaterialIcon";
import NewContact from "../../organisms/NewContact";
import classes from "./styles.module.scss";

const AddIcon = () => {
  const [isContactShown, setIsContactShown] = useState(false);

  const toggleContactNewForm = () => {
    setIsContactShown((prev) => !prev);
  };

  return (
    <div className={classes.addIcon}>
      <MaterialIcon
        name="person_add"
        onClick={toggleContactNewForm}
        color="white"
      />
      {isContactShown && (
        <NewContact toggleContactForm={toggleContactNewForm} />
      )}
    </div>
  );
};

export default AddIcon;
