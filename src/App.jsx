import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Search from './pages/Search.jsx';
import PropertyCard from './components/PropertyCard.jsx';
import Logo from './images/logo.png';
import './App.css';

function App() {

  return (
        <BrowserRouter>
          <header className="header">
            <Link to="/" id="home-link">
              <div className="logo-section">
                <img id="navbar-logo" src={Logo} alt="Logo" />
                <p id='brand-name'>LuxLiving</p>
              </div>
            </Link>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </header>
          <Routes>
            <Route path="/" element={<Search />} />
          </Routes>
          <footer>
            <p>© 2024 LuxLiving. All rights reserved.</p>
          </footer>
        </BrowserRouter>
  )
}

export default App;
