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
              <p>
                Time Left: <span>{timeLeft}</span>
              </p>
              <p>
                Status: <span>{status}</span>
              </p>
            </div>

            <div>
              <p>
                Date: <span>{date}</span>
              </p>
              <p>
                Location: <span>{location}</span>
              </p>
              <p>
                Loan: <span>{loan}</span>
              </p>
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
