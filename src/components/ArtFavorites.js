import { Card, Icon } from 'semantic-ui-react';

function ArtFavorites({favArtworks, handleFavoriteListDel, history}){

    function handleStarred(artwork){
        handleFavoriteListDel(artwork)
    }

    const favArt = favArtworks.map((f)=>{
        return {...f.art, fav_id: f.id}
    }).map((artwork) => {
        return (
            <Card id="art-card-info"
                key={artwork.id}
                image={artwork.image}
                header={artwork.title}
                meta={artwork.year} 
                description={artwork.artist}
                extra={<button className="btn-star" onClick={()=>handleStarred(artwork)}> ⭐️ </button>}
            />
            );
    })
    
    return (
        <div className="favorites-list">
            <ul className="favorites-list-ul">
                <button className="fav-button" onClick={()=>history.push('/favorites')}>Favorites</button>
                {favArt}
            </ul>
        </div>
    );
}

export default ArtFavorites;
