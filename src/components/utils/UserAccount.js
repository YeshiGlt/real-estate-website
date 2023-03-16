import "../../styles/utils/UserAccount.css";
import useraccount from "../../assets/profil-pictures/user-account-picture.png";

function UserAccount() {
  return (
    <div>
      <a href="#">
        <img src={useraccount} alt="Profil utilisateur" />
      </a>
    </div>
  );
}

export default UserAccount;
