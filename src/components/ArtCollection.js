 import { Card } from 'semantic-ui-react';
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
        <div classsName="semantic-card-list-div">
            <h1>Browse Artworks: </h1>
            <Card.Group itemsPerRow={3}>
                {artworkList}
            </Card.Group>
        </div>
    );
}


export default ArtCollection;
