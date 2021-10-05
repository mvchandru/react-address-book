import classes from "./styles.module.scss";

const Toast = () => {
  return (
    <div className={classes.toast}>
      <div className={classes.message}>Success</div>
    </div>
  );
};

export default Toast;
