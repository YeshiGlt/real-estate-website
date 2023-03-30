import "../../styles/utils/Header.css";
import Title from "./Title";
import SearchHome from "./SearchHome";
import Alert from "./Alert";
import UserAccount from "./UserAccount";

function Header() {
  return (
    <div>
      <div>
        <Title />
      </div>
      <div>
        <SearchHome />
        <Alert />
        <UserAccount />
      </div>
    </div>
  );
}

export default Header;
