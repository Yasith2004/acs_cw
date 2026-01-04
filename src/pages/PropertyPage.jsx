import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import data from "../data/properties.json";
import Gallery from "../components/Gallery";
import PropertyTab from "../components/PropertyTab";

function PropertyPage() {
    const { id } = useParams();
    const property = data.properties.find((p) => p.id === id);
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