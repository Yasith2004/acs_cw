import { useParams } from "react-router-dom";
import data from "../properties.json";
import Gallery from "../components/Gallery";

function PropertyPage(){
    const { id } = useParams();
    const property = data.properties.find((p) => p.id === id);
    return (
        <div className="image-container">
            <div className="main-image">
                <img src={property.picture[0]} alt={property.type} />
            </div>
            <Gallery />
        </div>
    )
}

export default PropertyPage;