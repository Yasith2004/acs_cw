import { Link } from "react-router-dom";
import data from "../properties.json";

function PropertyCard() {

  return (
    <div className="property-listings">
        {data.properties.map((property) => (
            <Link to={`/property/${property.id}`} key={property.id}>
              <div className="property-card">
                <button id="favourite-btn" onClick={(e) => {e.preventDefault(); e.stopPropagation(); addToFavourites(property);}}>♡</button>
                <img src={property.picture[0]} alt={property.type} />
                <p className="price">£{property.price}</p>
                <p className="location">{property.location}</p>
                <p className="short-description">{property.shortDescription}</p>
              </div>
            </Link>
        ))}
    </div>
  );
}

export default PropertyCard;
