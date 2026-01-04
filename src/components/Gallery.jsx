import { useState } from "react";

/**
 * Gallery component renders a featured image and a grid of property thumbnails.
 */
function Gallery({ pictures }) {
  // Internal state to manage the currently displayed featured image
  const [activeImage, setActiveImage] = useState(pictures[0]);

  return (
    <div className="gallery-container">
      <div className="main-image">
        <img src={activeImage} alt="Featured property view" />
      </div>
      <div className="image-gallery">
        {pictures.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Property view ${index + 1}`}
            onClick={() => setActiveImage(img)}
            className={img === activeImage ? "selected" : ""}
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
