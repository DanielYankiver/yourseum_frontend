function PageImage({favArtworks}){
    console.log(favArtworks)
    const favList = favArtworks.map((f) => f.art)
    const favImageCount = 0;

    if(favList.length === 0){
        return <h1>There is nothing in your favorites list!</h1>
    }
    return (
        <img src={favList[favImageCount].image} alt={favList[favImageCount].title}></img>
    );
}


export default PageImage; 