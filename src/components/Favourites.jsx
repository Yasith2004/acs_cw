function Favourites() {

    return (
        <div>
            <h1>Your Favourites</h1>
            {favourites.length === 0 ? (
                <p>No favourites yet.</p>
            ) : (
                <div className="favourites-list">
                    {favourites.map((p) => (
                        <div className="property-card" key={p.id}>
                            <img src={p.picture && p.picture[0]} alt={p.type} />
                            <p className="price">£{p.price}</p>
                            <p className="location">{p.location}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Favourites;