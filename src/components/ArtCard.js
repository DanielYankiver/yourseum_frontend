import { Card, Image } from 'semantic-ui-react';
import { useState } from 'react';

function ArtCard({artwork, handleFavorite, onDeleteArt, handleUnFavorite, favArtworks}){

    const { id, title, artist, image, year } = artwork
    // const [ starred, setStarred ] = useState(false)
    
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
            <Image height="350px" src={artwork.image} />
            <Card.Content id="art-card-info">
                <Card.Header>{artwork.title} - {artwork.artist}</Card.Header>
                <Card.Meta><span>{artwork.year}</span></Card.Meta>
            </Card.Content>
            <Card.Content extra id="art-card-extra">
                {buttons}
            </Card.Content>
        </Card>
    );
}

export default ArtCard;

        // <div>
        //     <h1>{artwork.title}</h1>
        //     <h2>{artwork.artist}</h2>
        //     <h3>{artwork.year}</h3>
        //     <img src={artwork.image}/>
        //     {artwork.starred ? <button onClick={handleStarred}> ⭐️ </button> : <button onClick={handleStarred}> ☆ </button>}
        //     <br/>
        //     <button onClick={handleDelete}>Delete🗑</button>
        // </div>

        // <Card 
        //     image={artwork.image}
        //     header={artwork.title}
        //     meta={artwork.year} 
        //     description={artwork.artist}
        //     extra={buttons}
        // />