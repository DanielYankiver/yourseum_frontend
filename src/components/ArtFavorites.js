import ArtCard from './ArtCard';

function ArtFavorites({artworks, handleFavorite}){

    const favArt = artworks.map((a) => {
        return <ArtCard 
                    key={a.id} 
                    artwork={a}
                    handleFavorite={handleFavorite}
                /> 
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
