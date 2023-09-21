import "../../styles/utils/SearchHome.css";
import Search from "../../assets/icons/search-icon.svg";

function SearchHome() {
  return (
    <div className="field">
      <div className="control">
        <img src={Search} alt="Icône de recherche" />
        <input
          type="search"
          id="search-home"
          className="input is-normal"
          placeholder="Search Home"
        />
      </div>
    </div>
  );
}

export default SearchHome;
