import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link className="App-link" to="/">Skak score</Link>
          </li>
          <li>
            <Link to="/results">Resultater</Link>
          </li>
          <li>
            <Link to="/new-result" title="Skak resultat">Opret resultat</Link>
          </li>
          <li>
            <Link to="/note-list">Notater</Link>
          </li>
          <li>
            <Link to="/edit-note">Opret notat</Link>
          </li>
          <li>
            <Link to="/contact">Kontakt</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;