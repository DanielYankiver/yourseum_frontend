function PageInfo({artwork}){

    return (
        <div className="fav-info">
            <h1>{artwork.title}  ({artwork.year}) - {artwork.artist}</h1>
        </div>
    );
}


export default PageInfo; 