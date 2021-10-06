import MaterialIcon from "../MaterialIcon";
import classes from "./styles.module.scss";

const SearchBox = ({ onSearch }) => {
  return (
    <div className={classes.searchBox}>
      <input
        type="text"
        placeholder="Search contacts"
        onChange={(e) => onSearch(e.target.value)}
      />
      <div className={classes.searchIcon}>
        <MaterialIcon name="search" />
      </div>
    </div>
  );
};

export default SearchBox;
