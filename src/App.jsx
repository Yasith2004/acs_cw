import './App.css'
import logo from './images/logo.png';

function App() {

  return (
    <>
      <header className="header">
        <a href='#'>
          <div className="logo-section">
            <img id="navbar-logo" src={logo} alt="Logo" />
            <p id='brand-name' href='#'>LuxLiving</p>
          </div>
        </a>
        <ul>
          <li><a href='#'>About Us</a></li>
          <li><a href='#'>Contact</a></li>
        </ul>
      </header>
      <main>
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
              <input type="date" id="date-2" name="date-added" /><br></br>
            <div className="clear-btn">
              <input type="reset" value="Clear"></input>
            </div>
          </form>
        </div>
        <div className="property-listings">
          <a href="#">
            <div className="property-card">
              <img src={logo} alt="Property-1" />
              <p class="description">Attractive three bedroom semi-detached family home situated within 0.5 miles of Petts Wood station</p>
              <p class="location">Location: Petts Wood Road, Petts Wood, Orpington BR5</p>
              <p class="price">Price: £750,000</p>
            </div>
          </a>
          <a href="#">
            <div className="property-card">
              <img src={logo} alt="Property-2" />
              <p class="description">Presented in excellent decorative order throughout is this two double bedroom, two bathroom, garden flat etc.</p>
              <p class="location">Location: Crofton Road Orpington BR6</p>
              <p class="price">Price: £399,995</p>
            </div>
          </a>
          <a href="#">
            <div className="property-card">
              <img src={logo} alt="Property-3" />
              <p class="description">Spacious four bedroom detached house located in a quiet residential cul-de-sac.</p>
              <p class="location">Location: Chislehurst Road, Orpington BR6</p>
              <p class="price">Price: £925,000</p>
            </div>
          </a>
          <a href="#">
            <div className="property-card">
              <img src={logo} alt="Property-4" />
              <p class="description">Well-maintained three bedroom bungalow offering single-level living.</p>
              <p class="location">Location: Leesons Hill, Orpington BR5</p>
              <p class="price">Price: £685,000</p>
            </div>
          </a>
          <a href="#">
            <div className="property-card">
              <img src={logo} alt="Property-5" />
              <p class="description">Modern one bedroom apartment situated close to transport links and local amenities.</p>
              <p class="location">Location: High Street, Orpington BR6</p>
              <p class="price">Price: £275,000</p>
            </div>
          </a>
          <a href="#">
            <div className="property-card">
              <img src={logo} alt="Property-6" />
              <p class="description">Impressive five bedroom executive home offering luxury living throughout.</p>
              <p class="location">Location: Farnborough Common, Orpington BR6</p>
              <p class="price">Price: £1,250,000</p>
            </div>
          </a>
          <a href="#">
            <div className="property-card">
              <img src={logo} alt="Property-7" />
              <p class="description">Two bedroom first-floor maisonette presented in good condition throughout.</p>
              <p class="location">Location: Tubbenden Lane, Orpington BR6</p>
              <p class="price">Price: £365,000</p>
            </div>
          </a>
        </div>
      </main>
      <footer>
        <p>© 2024 LuxLiving. All rights reserved.</p>
      </footer>
    </>
  )
}

export default App
