import PropertyCard from "../components/PropertyCard";

function Search() {
    return (
      <>
        <div className="search-container">
          <form action="#">
            <input type="text" placeholder="Enter postcode area (e.g. BR1, NW1)" />
            <button type="button" onClick={() => Search()}>Search</button><br></br>
            <label htmlFor="type">Type:</label>
              <select id="type" name="type">
                <option value="Flat">Apartment</option>
                <option value="House">House</option>
                <option value="Bungalow">Bungalow</option>
                <option value="Maisonette">Maisonette</option>
              </select><br></br>
            <label htmlFor="price">Price:</label>
              <input type="number" id="price-min" name="price-min" placeholder="Enter min price" />
              <input type="number" id="price-max" name="price-max" placeholder="Enter max price" /><br></br>
            <label htmlFor="bedrooms">Bedrooms:</label>
              <input type='number' id='min-bedrooms' name='min-bedrooms' placeholder='Enter min bedrooms' />
              <input type='number' id='max-bedrooms' name='max-bedrooms' placeholder='Enter max bedrooms' /><br></br>
            <label htmlFor="date-added">Date Added:</label>
              <input type="date" id="date-1" name="date1-added" />
              <input type="date" id="date-2" name="date2-added" /><br></br>
            <div className="clear-btn">
              <input type="reset" value="Clear"></input>
            </div>
          </form>
        </div>
        <PropertyCard/>
      </>
    )
}

export default Search;