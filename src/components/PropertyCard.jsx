import { Link } from "react-router-dom";
import data from "../properties.json";

function PropertyCard({ properties }) {
  const list = properties || data.properties;

  return (
    <div className="property-listings">
        {list.map((property) => (
            <Link to={`/property/${property.id}`} key={property.id}>
              <div className="property-card">
              <button id="favourite-btn" onClick={(e) => {e.preventDefault(); e.stopPropagation(); addToFavourites && addToFavourites(property);}}>♡</button>
                <img src={Array.isArray(property.picture) ? property.picture[0] : property.picture} alt={property.type} />
                <p className="price">£{property.price}</p>
                <p className="location">{property.location}</p>
                <p className="short-description">{property.shortDescription}</p><br></br>
                <i className="date-added">Added on {property.added.year}-{property.added.month}-{property.added.day}</i>
              </div>
            </Link>
        ))}
    </div>
  );
}

export default PropertyCard;
