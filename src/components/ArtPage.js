import { useEffect } from 'react';
import ArtCollection from './ArtCollection';
import ArtFavorites from './ArtFavorites';

function ArtPage({artworks, history, setArtworks, currentUser, setFavArtworks, favArtworks}){
    // console.log(artworks)

    useEffect(()=>{
        const favoritedList = 
        fetch('http://localhost:3001/favorites')
            .then(r => r.json())
            .then(favList => {
                // const newFavArtList = favList.map((f) => f.art)
                // setFavArtworks(newFavArtList)
                setFavArtworks(favList)
            })
    }, []) //we think it should be favArtworks
    
    function handleFavorite(artwork){

        const { id, title, artist, image, year } = artwork
        const newFav = { 
            user_id: currentUser.id,
            art_id: id, 
            starred: false 
        }
        // if (artwork.starred === false) {
        //     artwork.starred = true
        // } else {
        //     artwork.starred = false
        // }
        // const updatedArr = artworks.map((art) => {
        //     if (art.id === artwork.id){
        //         return artwork;
        //     }
        //     return art;
        // })
        // setArtworks(updatedArr)

        fetch('http://localhost:3001/favorites', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newFav)
        })
        .then((r) => r.json())
        .then(newFavorite => setFavArtworks([...favArtworks, newFavorite]))
    }

    function handleUnFavorite(artwork){
        const delFav = favArtworks.filter((f) => f.art_id === artwork.id)[0]
        fetch(`http://localhost:3001/favorites/${delFav.id}`, {
           method: "DELETE",
       })
       const updatedFavList = favArtworks.filter((f) => f.art_id !== artwork.id)
       setFavArtworks(updatedFavList)
    }

    function handleFavoriteListDel(artwork){
        console.log(artwork.fav_id)
        fetch(`http://localhost:3001/favorites/${artwork.fav_id}`, {
           method: "DELETE",
       })
       const updatedFavList = favArtworks.filter((f) => f.art_id !== artwork.id)
       setFavArtworks(updatedFavList)

    }

    function handleDeleteArt(id){
        const updatedArtArray = artworks.filter((artwork) => artwork.id !== id)
        setArtworks(updatedArtArray)
    }

    return (
        <div className="artpage">
            <ArtCollection artworks={artworks} handleFavorite={handleFavorite} onDeleteArt={handleDeleteArt} handleUnFavorite={handleUnFavorite}/>
            <ArtFavorites favArtworks={favArtworks} handleFavoriteListDel={handleFavoriteListDel}/>
        </div>
    );
}

export default ArtPage;
