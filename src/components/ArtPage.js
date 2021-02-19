import { useEffect } from 'react';
import ArtCollection from './ArtCollection';
import ArtFavorites from './ArtFavorites';

function ArtPage({artworks, history, setArtworks, currentUser, setFavArtworks, favArtworks, setCurrentUser}){

    useEffect(()=>{
        fetch(`${process.env.REACT_APP_RAILS_URL}/favorites`)
            .then(r => r.json())
            .then(favList => {
                // console.log(favList)
                console.log(currentUser)
                if (favList.errors){
                    favList.errors.forEach((error) => {return(<h1 style={{color: "red"}}>{error}</h1>)})
                } else {
                    const myFavList = favList.filter((f) => f.user.id === currentUser.id)
                    setFavArtworks(myFavList) 
                }
            })
    },[])
    
    function handleFavorite(artwork){

        const { id, title, artist, image, year } = artwork
        const newFav = { 
            user_id: currentUser.id,
            art_id: id, 
            starred: false 
        }
        fetch(`${process.env.REACT_APP_RAILS_URL}/favorites`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newFav)
        })
            .then((r) => r.json())
            .then(newFavorite => {
                setFavArtworks([...favArtworks, newFavorite])
            })
    }

    function handleUnFavorite(artwork){
        const delFav = favArtworks.filter((f) => f.art_id === artwork.id)[0]
        fetch(`${process.env.REACT_APP_RAILS_URL}/favorites/${delFav.id}`, {
           method: "DELETE",
       })
       const updatedFavList = favArtworks.filter((f) => f.art_id !== artwork.id)
       setFavArtworks(updatedFavList)
    }

    function handleFavoriteListDel(artwork){
        console.log(artwork.fav_id)
        fetch(`${process.env.REACT_APP_RAILS_URL}/favorites/${artwork.fav_id}`, {
           method: "DELETE",
       })
       const updatedFavList = favArtworks.filter((f) => f.art_id !== artwork.id)
       setFavArtworks(updatedFavList)

    }
    
    //***** DElETE FUNCTION (commented out for go live) */

    // function handleDeleteArt(id){
    //     const updatedArtArray = artworks.filter((artwork) => artwork.id !== id)
    //     setArtworks(updatedArtArray)
    // }

    return (
        <div className="artpage">
            <ArtCollection artworks={artworks} handleFavorite={handleFavorite} handleUnFavorite={handleUnFavorite} favArtworks={favArtworks}/>
            <ArtFavorites favArtworks={favArtworks} handleFavoriteListDel={handleFavoriteListDel} history={history}/>
        </div>
    );
}

export default ArtPage;
