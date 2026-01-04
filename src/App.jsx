import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Search from './pages/Search.jsx';
import PropertyPage from './pages/PropertyPage.jsx';
import Logo from './images/logo.png';
import { FavouritesProvider } from './context/FavouritesContext.jsx';
import './App.css';

function App() {

  return (
    <FavouritesProvider>
      <HashRouter>
        <header className="header">
          <Link to="/" id="home-link">
            <div className="logo-section">
              <img id="navbar-logo" src={Logo} alt="Logo" />
              <p id='brand-name'>LuxLiving</p>
            </div>
          </Link>
          <ul>
            <li><Link to="/">About Us</Link></li>
            <li><Link to="/">Contact</Link></li>
          </ul>
        </header>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/property/:id" element={<PropertyPage />} />
        </Routes>
        <footer>
          <p>© 2024 LuxLiving. All rights reserved.</p>
        </footer>
      </HashRouter>
    </FavouritesProvider>
  )
}

export default App;
