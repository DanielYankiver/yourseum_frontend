import { useState } from 'react';
import PageInfo from './PageInfo';

function PageImage({favArtworks}){
    console.log(favArtworks)
    const favList = favArtworks.map((f) => f.art)
    const [favImageCount, setFavImageCount] = useState(0);

    if(favList.length === 0){
        return <h1 style={{color:'ivory'}}>There is nothing in your favorites list!</h1>
    }

    function nextBtn(){
        setFavImageCount((favImageCount) => (favImageCount + 1) % favArtworks.length)   
    }

    function prevBtn(){
        setFavImageCount((favImageCount) => ((favImageCount - 1) + favArtworks.length) % favArtworks.length)   
    }

    return (
        <div className="outer-fav-div">
            <PageInfo artwork={favList[favImageCount]}/>
            <div className="fav-image-div">
                <button className="fav-image-btns" onClick={() => prevBtn()}>←</button>  
                <img className="fav-image" src={favList[favImageCount].image} alt={favList[favImageCount].title}></img>
                <button className="fav-image-btns" onClick={() => nextBtn()}>→</button>
            </div>
        </div>
    );
}


export default PageImage;