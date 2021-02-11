// import { useState, useEffect } from 'react';
import ArtCollection from './ArtCollection';
// import ArtFavorites from './ArtFavorites';

function ArtPage({artworks, history}){

    return (
        <div>
            <ArtCollection artworks={artworks}/>
            {/* <ArtFavorites /> */}
        </div>
    );
}

export default ArtPage;