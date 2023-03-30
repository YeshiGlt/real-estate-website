import "../styles/App.css";
import Nav from "./utils/Nav";
import Header from "./utils/Header";
import CardHome from "./utils/CardHome";

function App() {
  return (
    <div>
      <Nav />
      <div>
        <Header />
      </div>
      <div>
        <section></section>
        <section>
          <div>
            <h2>Top Real Estate</h2>
            <span>View All</span>
          </div>
          <div>
            <CardHome />
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
