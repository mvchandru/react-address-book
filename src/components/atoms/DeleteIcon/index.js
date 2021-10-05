import MaterialIcon from "../MaterialIcon";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../../redux/users/action";
import classes from "./styles.module.scss";

const DeleteIcon = ({ userId, toggleContactForm }) => {
  const dispatch = useDispatch();

  const deleteContact = () => {
    dispatch(deleteUser(userId));
    toggleContactForm();
  };

  return (
    <div className={classes.deleteIcon}>
      <MaterialIcon name="delete" onClick={deleteContact} />
    </div>
  );
};

export default DeleteIcon;
