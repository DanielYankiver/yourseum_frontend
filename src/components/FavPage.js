import PageTitle from './PageTitle';
import PageImage from './PageImage';
import PageInfo from './PageInfo';
import { useState, useEffect } from 'react';


function FavPage(){
    const [ favArtworks, setFavArtworks ] = useState([])

    useEffect(()=>{
        const favoritedList = 
        fetch('http://localhost:3001/favorites')
            .then(r => r.json())
            .then(favList => {
                // const newFavArtList = favList.map((f) => f.art)
                // setFavArtworks(newFavArtList)
                setFavArtworks(favList)
            })
    }, [])
    
    return (
        <div>
            <PageTitle />
            <PageImage favArtworks={favArtworks}/>
            <PageInfo />
        </div>
    );
}


export default FavPage; 