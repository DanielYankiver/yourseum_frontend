import { Card, Icon } from 'semantic-ui-react';

function ArtFavorites({artworks, handleFavorite}){

    function handleStarred(artwork){
        handleFavorite(artwork)
    }

    const favArt = artworks.map((artwork) => {
        return (
            <Card 
                image={artwork.image}
                header={artwork.title}
                meta={artwork.year} 
                description={artwork.artist}
                extra={artwork.starred ? <button onClick={()=>handleStarred(artwork)}> ⭐️ </button> : <button onClick={()=>handleStarred(artwork)}> ☆ </button>}
            />
            );
    })
    
    return (
        <div className="favorites-list">
            <ul>
                <h1>Favorites: </h1>   
                {favArt}
            </ul>
        </div>
    );
}

export default ArtFavorites;
