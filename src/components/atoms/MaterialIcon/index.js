import "./styles.scss";

const MaterialIcon = ({ name, color, onClick, ...props }) => {
  return (
    <span
      className={`icons material-icons ${color ? color : ""}`}
      data-testid={props["data-testid"]}
      onClick={onClick}
    >
      {name}
    </span>
  );
};

export default MaterialIcon;
