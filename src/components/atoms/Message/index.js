import classes from "./styles.module.scss";

export const MessageStyle = {
  Information: "information",
  Error: "error",
  Warning: "warning",
};

const Message = ({ style = MessageStyle.Information, message }) => (
  <p className={`${classes.message} ${classes[style]}`}>{message}</p>
);

export default Message;
