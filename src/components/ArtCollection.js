import { Card } from 'semantic-ui-react';
import ArtCard from './ArtCard';

function ArtCollection({artworks, handleFavorite, onDeleteArt, handleUnFavorite}){

    const artworkList = artworks.map((artwork) => {
        return <ArtCard 
                    key={artwork.id} 
                    artwork={artwork}
                    handleFavorite={handleFavorite}
                    onDeleteArt={onDeleteArt}
                    handleUnFavorite={handleUnFavorite}
                />
    })

    return (
        <div className="semantic-card-list-div">
            <h1>Browse Artworks: </h1>
            <Card.Group itemsPerRow={3}>
                {artworkList}
            </Card.Group>
        </div>
    );
}


export default ArtCollection;
