import { useState } from "react";
import MaterialIcon from "../MaterialIcon";
import DeleteConfirmation, {
  DeleteAction,
} from "../../molecules/DeleteConfirmation";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../../redux/users/action";
import classes from "./styles.module.scss";

const DeleteIcon = ({ userId, toggleContactForm }) => {
  const [isDeleteConfirmationShown, setIsDeleteConfirmationShown] =
    useState(false);
  const dispatch = useDispatch();

  const deleteConfirmation = () => {
    setIsDeleteConfirmationShown(true);
  };

  const deleteContact = (action) => {
    setIsDeleteConfirmationShown(false);
    if (action === DeleteAction.Delete) {
      dispatch(deleteUser(userId));
      toggleContactForm();
    }
  };

  return (
    <>
      <div className={classes.deleteIcon}>
        <MaterialIcon
          data-testid="delete-icon"
          name="delete"
          onClick={deleteConfirmation}
        />
      </div>
      {isDeleteConfirmationShown && (
        <DeleteConfirmation deleteContact={deleteContact} />
      )}
    </>
  );
};

export default DeleteIcon;
