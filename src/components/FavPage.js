import PageTitle from './PageTitle';
import PageImage from './PageImage';
import { useState, useEffect } from 'react';


function FavPage({currentUser}){
    const [ favArtworks, setFavArtworks ] = useState([])

    useEffect(()=>{
        const favoritedList = 
        fetch(`${process.env.REACT_APP_RAILS_URL}/favorites`)
            .then(r => r.json())
            .then(favList => {
                const myFavList = favList.filter((f) => f.user.id === currentUser.id)
                setFavArtworks(myFavList)
            })
    }, [])
    
    return (
        <div>
            <PageTitle />
            <PageImage favArtworks={favArtworks}/>
        </div>
    );
}


export default FavPage; 