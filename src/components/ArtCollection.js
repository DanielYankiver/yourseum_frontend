 import ArtCard from './ArtCard';

function ArtCollection({artworks, handleFavorite, onDeleteArt}){

    const artworkList = artworks.map((artwork) => {
        return <ArtCard 
                    key={artwork.id} 
                    artwork={artwork}
                    handleFavorite={handleFavorite}
                    onDeleteArt={onDeleteArt}
                />
    })

    return (
        <div>
            <ul>
                <h1>Browse Artworks: </h1>
                {artworkList}
            </ul>
        </div>
    );
}


export default ArtCollection;
