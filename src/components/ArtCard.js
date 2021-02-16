import { Card, Image } from 'semantic-ui-react';
import { useState } from 'react';

function ArtCard({artwork, handleFavorite, onDeleteArt, handleUnFavorite}){

    const { id, title, artist, image, year } = artwork
    const [ starred, setStarred ] = useState(false)
    
    function handleStarred(e){
        handleFavorite(artwork)  
        setStarred(!starred)  
    }

    function handleUnStarred(e){
        handleUnFavorite(artwork)
        setStarred(!starred)
    }
    
    function handleDelete(){
       fetch(`http://localhost:3001/arts/${id}`, {
           method: "DELETE",
       })
       onDeleteArt(id)
    }
    
    const buttons = (
        <div>
            {starred ? <button onClick={(e)=>handleUnStarred(e)}> ⭐️ </button> : <button onClick={(e)=>handleStarred(e)}> ⭐️ </button>}
            <button onClick={handleDelete}>🗑</button>
        </div>
    )

    return (
        <Card >
            <Image height="350px" src={artwork.image} />
            <Card.Content>
                <Card.Header>{artwork.title} - {artwork.artist}</Card.Header>
                <Card.Meta><span>{artwork.year}</span></Card.Meta>
            </Card.Content>
            <Card.Content extra>
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