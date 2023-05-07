import "../styles/App.css";
import "bulma/css/bulma.min.css";
import { Columns, Image } from "react-bulma-components";
import Nav from "./utils/Nav";
import Header from "./utils/Header";
import CardHome from "./utils/CardHome";
import ContactAgent from "./agent/ContactAgent";
import Annonce from "./utils/Annonce";
import { dreamHomeOfBest } from "../datas/dreamHomeOfBest";

function App() {
  return (
    <Columns>
      <Columns.Column className="is-one-fifth">
        <Nav />
      </Columns.Column>

      <Columns.Column className="is-four-fifths">
        <Header />

        <Columns>
          <Columns.Column>
            <section>
              {dreamHomeOfBest.map(({ id, name, picture }) => (
                <Columns key={id}>
                  <Image src={picture} alt={`${name} picture`} />
                </Columns>
              ))}
            </section>
            <section>
              <div>
                <h2>Top Real Estate</h2>
                <span>View All</span>
              </div>
              <div>
                <CardHome />
              </div>
            </section>
          </Columns.Column>
          <Columns.Column>
            <Annonce />
            <ContactAgent />
          </Columns.Column>
        </Columns>
      </Columns.Column>
    </Columns>
  );
}

export default App;
