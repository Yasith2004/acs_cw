function Gallery({ pictures, setMainImage, mainImage }) {
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
