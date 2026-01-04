/**
 * Gallery component renders a grid of property images.
 * Clicking on a thumbnail updates the main image displayed on the PropertyPage.
 * 
 * @param {Object} props - The component props.
 * @param {Array} props.pictures - Array of image URLs.
 * @param {Function} props.setMainImage - State setter function for the main image.
 * @param {string} props.mainImage - The currently selected main image URL.
 * @returns {JSX.Element} The rendered image gallery.
 */
function Gallery({ pictures, setMainImage, mainImage }) {
  /**
   * Updates the parent component's main image state.
   * @param {string} img - The URL of the clicked image.
   */
  const viewImage = (img) => {
    setMainImage(img);
  };

  return (
    <div className="image-gallery">
      {pictures.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Property image ${index + 1}`}
          onClick={() => viewImage(img)}
          className={img === mainImage ? "selected" : ""}
        />
      ))}
    </div>
  );
}

export default Gallery;
