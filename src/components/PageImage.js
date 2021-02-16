import { useState } from 'react';
import PageInfo from './PageInfo';

function PageImage({favArtworks}){
    console.log(favArtworks)
    const favList = favArtworks.map((f) => f.art)
    const [favImageCount, setFavImageCount] = useState(0);

    if(favList.length === 0){
        return <h1>There is nothing in your favorites list!</h1>
    }

    function nextBtn(){
        setFavImageCount((favImageCount) => (favImageCount + 1) % favArtworks.length)   
    }

    function prevBtn(){
        setFavImageCount((favImageCount) => ((favImageCount - 1) + favArtworks.length) % favArtworks.length)   
    }

    return (
        <div>
            <button onClick={() => prevBtn()}> ⬅️ </button>  
            <img src={favList[favImageCount].image} alt={favList[favImageCount].title}></img>
            <button onClick={() => nextBtn()}> ➡️ </button>
            <PageInfo artwork={favList[favImageCount]}/>
        </div>
    );
}


export default PageImage;