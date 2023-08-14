import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Skak score</h1>
      <p>Skak score er en simpel måde at holde styr på point i brædtspillet</p>

      <Link className="App-link" to="/Resultat">Opret resultat</Link>

    </>
  )
};

export default Home;