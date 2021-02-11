import ArtCard from './ArtCard';

function ArtCollection({artworks}){

    const artworkList = artworks.map((artwork) => {
        return <ArtCard 
                    key={artwork.id} 
                    artwork={artwork}
                />
    })

    return (
        <div>
            <ul>
                {artworkList}
            </ul>
        </div>
    );
}


export default ArtCollection;