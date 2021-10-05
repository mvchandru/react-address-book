import "./styles.scss";

const MaterialIcon = ({ name, color, onClick }) => {
  return (
    <span
      className={`icons material-icons ${color ? color : ""}`}
      onClick={onClick}
    >
      {name}
    </span>
  );
};

export default MaterialIcon;
