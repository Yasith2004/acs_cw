import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import data from "../data/properties.json";
import Gallery from "../components/Gallery";
import PropertyTab from "../components/PropertyTab";

/**
 * PropertyPage component displays the detailed information about a specific property.
 * It retrieves the property ID from the URL parameters, finds the matching property
 * in the data source, and manages the state for the main image displayed in the gallery.
 * 
 * @returns {JSX.Element} The rendered property detail page.
 */
function PropertyPage() {
    const { id } = useParams();
    // Find the property in the JSON data matching the ID from URL params
    const property = data.properties.find((p) => p.id === id);
    // State to manage the currently displayed main image in the gallery
    const [mainImage, setMainImage] = useState(property.picture[0]);

    return (
        <div className="property-page-container">
            <Link to="/" className="back-btn"><i className="fa-solid fa-arrow-left"></i>Go Back</Link>
            <div className="main-content">
                <div className="image-container">
                    <div className="main-image">
                        <img src={mainImage} alt={property.type} />
                    </div>
                    <Gallery pictures={property.picture} setMainImage={setMainImage} mainImage={mainImage} />
                </div>
                <div className="property-tab">
                    <PropertyTab property={property} />
                </div>
            </div>

        </div>
    )
}

export default PropertyPage;