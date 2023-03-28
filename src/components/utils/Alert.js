import "../../styles/utils/Alert.css";
import "bulma/css/bulma.min.css";
import alert from "../../assets/icons/alert-icon.svg";

function Alert() {
  return (
    <div className="bg-multi-icons">
      <img src={alert} alt="Icône d'alerte" />
    </div>
  );
}

export default Alert;
