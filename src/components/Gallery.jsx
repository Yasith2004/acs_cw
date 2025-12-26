import { useParams } from "react-router-dom";
import data from "../properties.json";

function Gallery() {
  const { id } = useParams();

  const property = data.properties.find(
    (p) => p.id === id
  );

  return (
    <div className="image-gallery">
      {property.picture.map((img, index) => (
        <img key={index} src={img} alt={`Property image ${index + 1}`} />
      ))}
    </div>
  );
}

export default Gallery;
