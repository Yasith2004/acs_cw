import './App.css'
import logo from './images/logo.png';

function App() {

  return (
    <main>
      <header className="header">
        <img id="navbar-logo" src={logo} alt="Logo" />
        <a className='brand-name' href='#'>LuxLiving</a>
        <ul>
          <li><a href='#'>About Us</a></li>
          <li><a href='#'>Contact</a></li>
        </ul>
      </header>
      <div className="search-container">
        <form action="/search" method="get">
          <input type="text" placeholder="Enter postcode area (e.g. BR1, NW1)" />
          <input type="submit" value="Search"></input><br></br>
          <label for="type">Type:</label>
            <select id="type" name="type">
              <option value="apartment">Apartment</option>
              <option value="house">House</option>
              <option value="villa">Villa</option>
            </select><br></br>
          <label for="price">Price:</label>
            <input type="number" id="price-min" name="price-min" placeholder="Enter min price" />
            <input type="number" id="price-max" name="price-max" placeholder="Enter max price" /><br></br>
          <label for="bedrooms">Bedrooms:</label>
            <input type='number' id='min-bedrooms' name='min-bedrooms' placeholder='Enter min bedrooms' />
            <input type='number' id='max-bedrooms' name='max-bedrooms' placeholder='Enter max bedrooms' /><br></br>
          <label for="date-added">Date Added:</label>
            <input type="date" id="date-1" name="date-added" />
            <input type="date" id="date-2" name="date-added" />
          <input type="reset" value="Clear"></input>
        </form>
      </div>
    </main>
  )
}

export default App
