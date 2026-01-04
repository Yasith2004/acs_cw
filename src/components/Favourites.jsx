function Favourites({ favourites, onRemove, onClear }) {
    return (
        <div className="favourites-container">
            <h1 style={{ textAlign: 'center', fontWeight: 'bold', color: '#1C2E5D', paddingBottom: '20px', margin: '0' }}>Favourites</h1>
            {favourites && favourites.length > 0 ? (
                <div className="favourites-list">
                    {favourites.map(fav => (
                        <div key={fav.id} className="favourite-item" style={{
                            display: 'flex',
                            gap: '10px',
                            marginBottom: '10px',
                            borderBottom: '1px solid #eee',
                            paddingBottom: '10px',
                            alignItems: 'center',
                            position: 'relative'
                        }}>
                            <img src={Array.isArray(fav.picture) ? fav.picture[0] : fav.picture} alt={fav.type} style={{
                                width: '60px',
                                height: '40px',
                                borderRadius: '4px',
                                objectFit: 'cover'
                            }} />
                            <div style={{ flex: 1 }}>
                                <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#1C2E5D' }}>{fav.type}</div>
                                <div style={{ fontSize: '12px', color: '#E1507A', fontWeight: 'bold' }}>£{fav.price}</div>
                            </div>
                            <button
                                onClick={() => onRemove(fav)}
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    cursor: 'pointer',
                                    color: '#dc3545',
                                    fontSize: '16px',
                                    padding: '5px'
                                }}
                                aria-label="Remove property"
                            >
                                <i className="fa-solid fa-trash"></i>
                            </button>
                        </div>
                    ))}
                    <button
                        onClick={onClear}
                        className="clear-fav-btn"
                        style={{
                            width: '100%',
                            padding: '8px',
                            marginTop: '10px',
                            backgroundColor: '#dc3545',
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            fontWeight: 'bold'
                        }}
                    >
                        Clear All
                    </button>
                </div>
            ) : (
                <div className="favourite-placeholder">
                    <p>No favourites yet.</p>
                </div>
            )}
        </div>
    );
}

export default Favourites;
