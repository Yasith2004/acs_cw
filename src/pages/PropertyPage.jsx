import { useParams, Link } from "react-router-dom";
import data from "../data/properties.json";
import Gallery from "../components/Gallery";
import PropertyTab from "../components/PropertyTab";

/**
 * PropertyPage component displays the detailed information about a specific property.
 * It retrieves the property ID from the URL parameters and finds the matching property.
 * 
 * @returns {JSX.Element} The rendered property detail page.
 */
function PropertyPage() {
    const { id } = useParams();
    // Find the property in the JSON data matching the ID from URL params
    const property = data.properties.find((p) => p.id === id);

    if (!property) {
        return <div className="no-property">Property not found.</div>;
    }

    return (
        <div className="property-page-container">
            <Link to="/" className="back-btn"><i className="fa-solid fa-arrow-left"></i>Go Back</Link>
            <div className="main-content">
                <div className="image-container">
                    <Gallery pictures={property.picture} />
                </div>
                <div className="property-tab">
                    <PropertyTab property={property} />
                </div>
            </div>
        </div>
    )
}

export default PropertyPage;