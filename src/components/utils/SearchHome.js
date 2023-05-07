import "../../styles/utils/SearchHome.css";
import Search from "../../assets/icons/search-icon.svg";

function SearchHome() {
  return (
    <div>
      <img src={Search} alt="Icône de recherche" />
      <input type="search" id="search-home" />
    </div>
  );
}

export default SearchHome;
