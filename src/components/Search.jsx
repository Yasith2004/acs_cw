import { useState } from "react";
import PropertyCard from "../components/PropertyCard";
import data from "../properties.json";
import favouriteBtn from "../images/favourite.png";
import { Link } from "react-router-dom";

function monthIndex(monthName) {
  const months = {
    January:0, February:1, March:2, April:3, May:4, June:5,
    July:6, August:7, September:8, October:9, November:10, December:11
  };
  return months[monthName] ?? 0;
}

function Search() {
  const [postcode, setPostcode] = useState("");
  const [type, setType] = useState("");
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");
  const [minBedrooms, setMinBedrooms] = useState("");
  const [maxBedrooms, setMaxBedrooms] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [results, setResults] = useState(data.properties);

  const handleSearch = (e) => {
    e.preventDefault();
    const filtered = data.properties.filter((prop) => {
      if (postcode && !prop.location.toLowerCase().includes(postcode.toLowerCase())) return false;
      if (type && prop.type !== type) return false;
      if (priceMin && prop.price < Number(priceMin)) return false;
      if (priceMax && prop.price > Number(priceMax)) return false;
      if (minBedrooms && prop.bedrooms < Number(minBedrooms)) return false;
      if (maxBedrooms && prop.bedrooms > Number(maxBedrooms)) return false;
      if (dateFrom) {
        const added = new Date(prop.added.year, monthIndex(prop.added.month), prop.added.day);
        const from = new Date(dateFrom);
        if (added < from) return false;
      }
      if (dateTo) {
        const added = new Date(prop.added.year, monthIndex(prop.added.month), prop.added.day);
        const to = new Date(dateTo);
        if (added > to) return false;
      }
      return true;
    });
    setResults(filtered);
  };

  return (
    <>
      <div className="favourite-icon">
        <Link to="/favourites">
          <img src={favouriteBtn} id="fav-icon" alt="Favourites" />
        </Link>
      </div>
      <div className="search-container">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Enter postcode area (e.g. BR1, NW1)"
            value={postcode}
            onChange={(e) => setPostcode(e.target.value)}
          />
          <button type="submit">Search</button><br></br>

          <label htmlFor="type">Type:</label>
            <select id="type" name="type" value={type} onChange={(e) => setType(e.target.value)}>
              <option value="">Any</option>
              <option value="Flat">Flat</option>
              <option value="House">House</option>
              <option value="Bungalow">Bungalow</option>
              <option value="Maisonette">Maisonette</option>
            </select><br></br>

          <label htmlFor="price">Price:</label>
            <input type="number" id="price-min" name="price-min" placeholder="Enter min price" value={priceMin} onChange={(e) => setPriceMin(e.target.value)} />
            <input type="number" id="price-max" name="price-max" placeholder="Enter max price" value={priceMax} onChange={(e) => setPriceMax(e.target.value)} /><br></br>

          <label htmlFor="bedrooms">Bedrooms:</label>
            <input type='number' id='min-bedrooms' name='min-bedrooms' placeholder='Enter min bedrooms' value={minBedrooms} onChange={(e) => setMinBedrooms(e.target.value)} />
            <input type='number' id='max-bedrooms' name='max-bedrooms' placeholder='Enter max bedrooms' value={maxBedrooms} onChange={(e) => setMaxBedrooms(e.target.value)} /><br></br>

          <label htmlFor="date-added">Date Added:</label>
            <input type="date" id="date-1" name="date1-added" value={dateFrom} onChange={(e) => setDateFrom(e.target.value)} />
            <input type="date" id="date-2" name="date2-added" value={dateTo} onChange={(e) => setDateTo(e.target.value)} /><br></br>

          <div className="clear-btn">
            <input type="reset" value="Clear" onClick={() => { setPostcode(""); setType(""); setPriceMin(""); setPriceMax(""); setMinBedrooms(""); setMaxBedrooms(""); setDateFrom(""); setDateTo(""); setResults(data.properties); }} />
          </div>
        </form>
      </div>
      <PropertyCard properties={results} />
    </>
  )
}

export default Search;