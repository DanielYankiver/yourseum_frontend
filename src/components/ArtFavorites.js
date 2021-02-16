import { Card, Icon } from 'semantic-ui-react';

function ArtFavorites({favArtworks, handleFavoriteListDel}){

    function handleStarred(artwork){
        handleFavoriteListDel(artwork)
    }

    const favArt = favArtworks.map((f)=>{
        return {...f.art, fav_id: f.id}
    }).map((artwork) => {
        return (
            <Card 
                key={artwork.id}
                image={artwork.image}
                header={artwork.title}
                meta={artwork.year} 
                description={artwork.artist}
                extra={<button onClick={()=>handleStarred(artwork)}> ⭐️ </button>}
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
