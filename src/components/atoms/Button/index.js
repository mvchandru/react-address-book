import classes from "./styles.module.scss";

export const ButtonStyle = {
  Primary: "primary",
  Secondary: "secondary",
};

const Button = ({ style = ButtonStyle.Primary, type, name }) => (
  <button className={`${classes.button} ${classes[style]}`} type={type}>
    {name}
  </button>
);

export default Button;
