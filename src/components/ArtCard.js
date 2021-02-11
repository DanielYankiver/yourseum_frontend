function ArtCard({artwork}){
    return (
        <div>
            <h1>{artwork.title}</h1>
            <h2>{artwork.artist}</h2>
            <h3>{artwork.year}</h3>
            <img src={artwork.image}/>
        </div>
    );
}


export default ArtCard;