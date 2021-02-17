import { Card, Image } from 'semantic-ui-react';
import { useState } from 'react';

function ArtCard({artwork, handleFavorite, onDeleteArt, handleUnFavorite, favArtworks}){

    const { id, title, artist, image, year } = artwork
    
    function handleStarred(e){
        if (favArtworks.find((f) => f.art_id === artwork.id)){
            handleUnFavorite(artwork)
        } else {
            handleFavorite(artwork)  
        }
    }

    function handleDelete(){
       fetch(`http://localhost:3001/arts/${id}`, {
           method: "DELETE",
       })
       onDeleteArt(id)
    }
    
    
    const buttons = (
        <div>
            <button className="btn-star"onClick={(e)=>handleStarred(e)}> ⭐️ </button>
            <button className="btn-del"onClick={handleDelete}>🗑</button>
        </div>
    )

    return (
        <Card className = "art-card">
            <Image className="art-card-image" src={artwork.image} />
            <Card.Content id="art-card-info">
                <Card.Header>{artwork.title}</Card.Header>
                <Card.Description>{artwork.artist}</Card.Description>
                <Card.Meta><span>{artwork.year}</span></Card.Meta>
            </Card.Content>
            <Card.Content extra id="art-card-extra">
                {buttons}
            </Card.Content>
        </Card>
    );
}

export default ArtCard;