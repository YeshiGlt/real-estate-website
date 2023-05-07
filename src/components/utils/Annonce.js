import { annonceList } from "../../datas/annonceList";
import ButtonContact from "../ButtonContact";

function Annonce() {
  return (
    <div>
      {annonceList.map(
        ({ id, name, timeLeft, status, date, location, loan }) => (
          <div key={id}>
            <h3>{name}</h3>

            <div>
              <span>Time Left: {timeLeft}</span>
              <span>Status: {status}</span>
            </div>

            <div>
              <span>Date: {date}</span>
              <span>Location: {location}</span>
              <span>Loan: {loan}</span>
            </div>

            <div>
              <ButtonContact />
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default Annonce;
