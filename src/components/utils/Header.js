import "../../styles/utils/Header.css";
import Title from "./Title";
import SearchHome from "./SearchHome";
import Alert from "./Alert";
import UserAccount from "./UserAccount";
import { Columns } from "react-bulma-components";

function Header() {
  return (
    <Columns>
      <Columns>
        <Title />
      </Columns>
      <Columns>
        <SearchHome />
        <Alert />
        <UserAccount />
      </Columns>
    </Columns>
  );
}

export default Header;
