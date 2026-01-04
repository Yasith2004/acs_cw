import { Link } from "react-router-dom";
import data from "../data/properties.json";
import { useFavourites } from "../context/FavouritesContext";

function PropertyCard({ properties }) {
  const list = properties || data.properties;
  const { favourites, toggleFavourite } = useFavourites();

  return (
    <div className="property-listings">
      {list.map((property) => {
        const isFav = favourites?.some(fav => fav.id === property.id);
        return (
          <Link to={`/property/${property.id}`} key={property.id}>
            <div
              className="property-card"
              draggable="true"
              onDragStart={(e) => {
                e.dataTransfer.setData("application/json", JSON.stringify(property));
              }}
            >
              <button
                id="favourite-btn"
                onClick={(e) => {
                  e.preventDefault(); // Prevent navigation
                  e.stopPropagation();
                  toggleFavourite(property);
                }}
                style={{ color: isFav ? '#E1507A' : 'darkgray' }}
              >
                {isFav ? <i className="fas fa-heart" style={{ fontSize: '22px', color: '#E1507A' }}></i> : '♡'}
              </button>
              <img src={Array.isArray(property.picture) ? property.picture[0] : property.picture} alt={property.type} />
              <p className="price">£{property.price}</p>
              <p className="location">{property.location}</p>
              <p className="short-description">{property.shortDescription}</p>
              <i className="date-added">Added on {property.added.year}-{property.added.month}-{property.added.day}</i>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default PropertyCard;
