import data from "../properties.json";
import { Link } from "react-router-dom";

function Gallery(){
    return(

        <div className="other-images">
            {data.properties[index].picture.map((img, index) => (
                <Link to="" key={index}>
                    <img src={img} alt= {`${index + 1}`} />
                </Link>
            ))}
        </div>
    )
}

export default Gallery;