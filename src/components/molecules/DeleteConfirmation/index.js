import Button, { ButtonStyle } from "../../atoms/Button";
import classes from "./styles.module.scss";

export const DeleteAction = {
  Cancel: "cancel",
  Delete: "delete",
};

const DeleteConfirmation = ({ deleteContact }) => {
  return (
    <div className={classes.deleteConfirmation} data-testid="delete-confirmation">
      <div className={classes.overlay}></div>
      <div className={classes.content}>
        <div className={classes.title}>Delete this contact?</div>
        <div className={classes.buttonSection}>
          <Button
            style={ButtonStyle.Secondary}
            type="button"
            name="Cancel"
            onClick={() => deleteContact(DeleteAction.Cancel)}
          />
          <Button
            style={ButtonStyle.Primary}
            type="button"
            name="Delete"
            onClick={() => deleteContact(DeleteAction.Delete)}
          />
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmation;
