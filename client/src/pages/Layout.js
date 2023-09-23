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
            <Link to="/results">Skak resultater</Link>
          </li>
          <li>
            <Link to="/city-list">City list</Link>
          </li>          
          {/* <li>
            <Link to="/note-list">Notater</Link>
          </li>
          <li>
            <Link to="/edit-note">Opret notat</Link>
          </li> */}
          <li>
            <Link to="/contact">Kontakt</Link>
          </li>
        </ul>
      </nav>

      <aside>TOBE SideBar</aside>
      
      <Outlet />
      <footer>Footer</footer>
    </>
  )
};

export default Layout;