import classes from "./styles.module.scss";

const SlideOut = ({ toggleContactForm, children }) => {
  return (
    <div className={classes.slideout}>
      <div
        className={classes.overlay}
        onClick={() => toggleContactForm("")}
      ></div>
      <div className={classes.slideoutContainer}>{children}</div>
    </div>
  );
};

export default SlideOut;
