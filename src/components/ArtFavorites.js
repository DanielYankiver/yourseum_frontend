// import ArtCard from './ArtCard';

function ArtFavorites({artworks, handleFavorite}){

    function handleStarred(artwork){
        handleFavorite(artwork)
    }

    const favArt = artworks.map((artwork) => {
        return (
            <div>
                <h1>{artwork.title}</h1>
                <h2>{artwork.artist}</h2>
                <h3>{artwork.year}</h3>
                <img src={artwork.image}/>
                {artwork.starred ? <button onClick={()=>handleStarred(artwork)}> ⭐️ </button> : <button onClick={()=>handleStarred(artwork)}> ☆ </button>}
                <br/>
            </div>
            );
    })
    
    return (
        <div>
            <ul>
                <h1>Favorites: </h1>   
                {favArt}
            </ul>
        </div>
    );
}

export default ArtFavorites;
