// import { useState, useEffect } from 'react';
import ArtCollection from './ArtCollection';
import ArtFavorites from './ArtFavorites';

function ArtPage({artworks, history, setArtworks}){
    console.log(artworks)

    function handleFavorite(artwork){
        if (artwork.starred === false) {
            artwork.starred = true
        } else {
            artwork.starred = false
        }
        const updatedArr = artworks.map((art) => {
            if (art.id === artwork.id){
                return artwork;
            }
            return art;
        })
        setArtworks(updatedArr)
    }

    function handleDeleteArt(id){
        const updatedArtArray = artworks.filter((artwork) => artwork.id !== id)
        setArtworks(updatedArtArray)
    }
    
    const favoritedArtworks = artworks.filter((art) => {
        if (art.starred === true) {
            return art
        }
    })

    return (
        <div>
            <ArtCollection artworks={artworks} handleFavorite={handleFavorite} onDeleteArt={handleDeleteArt}/>
            <ArtFavorites artworks={favoritedArtworks} handleFavorite={handleFavorite} />
        </div>
    );
}

export default ArtPage;
