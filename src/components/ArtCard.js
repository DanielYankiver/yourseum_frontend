function ArtCard({artwork, handleFavorite, onDeleteArt}){

    const { id, title, artist, image, year } = artwork

    function handleStarred(){
        handleFavorite(artwork)
    }

    function handleDelete(){
       fetch(`http://localhost:3001/arts/${id}`, {
           method: "DELETE",
       })
       onDeleteArt(id)  
    }

    return (
        <div>
            <h1>{artwork.title}</h1>
            <h2>{artwork.artist}</h2>
            <h3>{artwork.year}</h3>
            <img src={artwork.image}/>
            {artwork.starred ? <button onClick={handleStarred}> ⭐️ </button> : <button onClick={handleStarred}> ☆ </button>}
            <br/>
            <button onClick={handleDelete}>Delete🗑</button>
        </div>
    );
}

export default ArtCard;
