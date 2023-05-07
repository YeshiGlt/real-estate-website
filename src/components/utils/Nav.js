import Logo from "./Logo";
import AppIcon from "../../assets/icons/app-icon.svg";
import Home from "../../assets/icons/home-icon.svg";
import Message from "../../assets/icons/message-icon.svg";
import Folder from "../../assets/icons/folder-icon.svg";
import Percentage from "../../assets/icons/percentage-icon.svg";
import Judge from "../../assets/icons/judge-icon.svg";
import Setting from "../../assets/icons/setting-icon.svg";
import SignInOut from "../../assets/icons/sign-in-out-icon.svg";
import { Columns } from "react-bulma-components";
import "../../styles/utils/Nav.css";

function Nav() {
  return (
    <Columns.Column>
      <Columns.Column>
        <Logo />
      </Columns.Column>

      <Columns.Column>
        <Columns.Column className="icons iconColor">
          <img src={AppIcon} alt="Icône application" />
        </Columns.Column>
        <Columns.Column className="icons">
          <img src={Home} alt="Icône accueil" />
        </Columns.Column>
        <Columns.Column className="icons">
          <img src={Message} alt="Icône messages/notifications" />
        </Columns.Column>
        <Columns.Column className="icons">
          <img src={Folder} alt="Icône dossier" />
        </Columns.Column>
        <Columns.Column className="icons">
          <img src={Percentage} alt="Icône pourcentage" />
        </Columns.Column>
        <Columns.Column className="icons">
          <img src={Judge} alt="Icône justice" />
        </Columns.Column>
      </Columns.Column>

      <Columns.Column>
        <Columns.Column className="icons">
          <img src={Setting} alt="Icône réglages" />
        </Columns.Column>
        <Columns.Column className="icons">
          <img src={SignInOut} alt="Icône quitter/déconnexion" />
        </Columns.Column>
      </Columns.Column>
    </Columns.Column>
  );
}

export default Nav;
