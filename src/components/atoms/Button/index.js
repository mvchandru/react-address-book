import classes from "./styles.module.scss";

export const ButtonStyle = {
  Primary: "primary",
  Secondary: "secondary",
};

const Button = ({ style = ButtonStyle.Primary, type, name, onClick }) => (
  <button
    className={`${classes.button} ${classes[style]}`}
    type={type}
    onClick={onClick}
  >
    {name}
  </button>
);

export default Button;
