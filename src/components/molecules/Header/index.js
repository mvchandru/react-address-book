import { useSelector } from "react-redux";
import AddIcon from "../../atoms/AddIcon";
import classes from "./styles.module.scss";

const Header = () => {
  const { pageTitle } = useSelector((state) => state.page);

  return (
    <header>
      <div className={classes.header}>
        <h3 className={classes.title}>{pageTitle}</h3>
        <div className={classes.addIcon}>
          <AddIcon />
        </div>
      </div>
    </header>
  );
};

export default Header;
