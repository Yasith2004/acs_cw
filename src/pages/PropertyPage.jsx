import { useParams } from "react-router-dom";
import { useState } from "react";
import data from "../properties.json";
import Gallery from "../components/Gallery";
import PropertyTab from "../components/PropertyTab";

function PropertyPage(){
    const { id } = useParams();
    const property = data.properties.find((p) => p.id === id);
    const [mainImage, setMainImage] = useState(property.picture[0]);

    return (
        <>
            <div className="image-container">
                <div className="main-image">
                    <img src={mainImage} alt={property.type} />
                </div>
                <Gallery pictures={property.picture} setMainImage={setMainImage} mainImage={mainImage} />
            </div>
            <div>
                <PropertyTab property={property} />
            </div>
        </>
    )
}

export default PropertyPage;