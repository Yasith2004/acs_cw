import { useState } from "react";
import PropertyCard from "../components/PropertyCard";
import data from "../data/properties.json";
import Favourites from "../components/Favourites";

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

  /**
   * Handles the search form submission.
   * Filters the full property list based on all active criteria.
   * 
   * @param {Event} e The form submission event.
   */
  const handleSearch = (e) => {
    e.preventDefault();

    const filteredProperties = data.properties.filter((property) => {
      // Postcode filter
      if (postcode && !property.location.toLowerCase().includes(postcode.trim().toLowerCase())) {
        return false;
      }

      // Type filter
      if (type && property.type !== type) {
        return false;
      }

      // Price filter
      const price = Number(property.price);
      if (priceMin && price < Number(priceMin)) {
        return false;
      }
      if (priceMax && price > Number(priceMax)) {
        return false;
      }

      // Bedrooms filter
      const bedrooms = Number(property.bedrooms);
      if (minBedrooms && bedrooms < Number(minBedrooms)) {
        return false;
      }
      if (maxBedrooms && bedrooms > Number(maxBedrooms)) {
        return false;
      }

      // Date added filter
      if (dateFrom || dateTo) {
        const monthMap = {
          "January": 0, "February": 1, "March": 2, "April": 3, "May": 4, "June": 5,
          "July": 6, "August": 7, "September": 8, "October": 9, "November": 10, "December": 11
        };

        const propDate = new Date(
          property.added.year,
          monthMap[property.added.month],
          property.added.day
        );

        if (dateFrom) {
          const from = new Date(dateFrom);
          from.setHours(0, 0, 0, 0);
          if (propDate < from) return false;
        }
        if (dateTo) {
          const to = new Date(dateTo);
          to.setHours(0, 0, 0, 0);
          if (propDate > to) return false;
        }
      }

      return true;
    });

    setResults(filteredProperties);
  };

  /**
   * Resets all search filters and clarifies the results to show all properties.
   */
  const handleReset = () => {
    setPostcode("");
    setType("");
    setPriceMin("");
    setPriceMax("");
    setMinBedrooms("");
    setMaxBedrooms("");
    setDateFrom("");
    setDateTo("");
    setResults(data.properties);
  };

  return (
    <div className="search-page-container">
      <div className="search-content">
        <div className="search-container">
          <form onSubmit={handleSearch} onReset={handleReset}>
            <h1><i className="fa-solid fa-magnifying-glass"></i> Search Properties</h1>

            <div className="search-grid">
              <div className="form-group">
                <label htmlFor="type">Property Type</label>
                <select id="type" name="type" value={type} onChange={(e) => setType(e.target.value)}>
                  <option value="">Any</option>
                  <option value="Apartment">Apartment</option>
                  <option value="House">House</option>
                  <option value="Bungalow">Bungalow</option>
                  <option value="Maisonette">Maisonette</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="price-min">Min Price (£)</label>
                <input type="number" id="price-min" name="price-min" placeholder="e.g. 300000" value={priceMin} onChange={(e) => setPriceMin(e.target.value)} />
              </div>

              <div className="form-group">
                <label htmlFor="price-max">Max Price (£)</label>
                <input type="number" id="price-max" name="price-max" placeholder="e.g. 800000" value={priceMax} onChange={(e) => setPriceMax(e.target.value)} />
              </div>

              <div className="form-group">
                <label htmlFor="min-bedrooms">Min Bedrooms</label>
                <input type='number' id='min-bedrooms' name='min-bedrooms' placeholder='Any' value={minBedrooms} onChange={(e) => setMinBedrooms(e.target.value)} />
              </div>

              <div className="form-group">
                <label htmlFor="max-bedrooms">Max Bedrooms</label>
                <input type='number' id='max-bedrooms' name='max-bedrooms' placeholder='Any' value={maxBedrooms} onChange={(e) => setMaxBedrooms(e.target.value)} />
              </div>

              <div className="form-group">
                <label htmlFor="postcode">Postcode Area</label>
                <input
                  type="text"
                  id="postcode"
                  placeholder="e.g. SW1, NW1"
                  value={postcode}
                  onChange={(e) => setPostcode(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="date-1">Added After</label>
                <input type="date" id="date-1" name="date1-added" value={dateFrom} onChange={(e) => setDateFrom(e.target.value)} />
              </div>

              <div className="form-group">
                <label htmlFor="date-2">Added Before</label>
                <input type="date" id="date-2" name="date2-added" value={dateTo} onChange={(e) => setDateTo(e.target.value)} />
              </div>
            </div>

            <div className="form-actions">
              <button type="submit" className="search-btn"><i className="fa-solid fa-magnifying-glass"></i> Search Properties</button>
              <button type="reset" className="clear-btn"><i className="fa-solid fa-eraser"></i> Clear</button>
            </div>
          </form>
        </div>
        {results.length > 0 ? (
          <PropertyCard properties={results} />
        ) : (
          <div className="no-results">
            <h3>No properties found matching your criteria.</h3>
            <p>Try adjusting your search filters.</p>
          </div>
        )}
      </div>
      <aside className="favourites-sidebar">
        <Favourites />
      </aside>
    </div>
  )
}

export default Search;