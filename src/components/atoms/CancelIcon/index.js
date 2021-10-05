import MaterialIcon from "../MaterialIcon";
import classes from "./styles.module.scss";

const CancelIcon = ({ toggleContactForm }) => {
  return (
    <div className={classes.cancelIcon}>
      <MaterialIcon name="clear" onClick={toggleContactForm} />
    </div>
  );
};

export default CancelIcon;
