import { Card } from 'semantic-ui-react';
import ArtCard from './ArtCard';

function ArtCollection({artworks, handleFavorite, handleUnFavorite, favArtworks}){

    const artworkList = artworks.map((artwork) => {
        return <ArtCard 
                    key={artwork.id} 
                    artwork={artwork}
                    handleFavorite={handleFavorite}
                    handleUnFavorite={handleUnFavorite}
                    favArtworks={favArtworks}
                />
    })

    return (
        <div className="semantic-card-list-div">
            <Card.Group itemsPerRow={3}>
                {artworkList}
            </Card.Group>
        </div>
    );
}


export default ArtCollection;
