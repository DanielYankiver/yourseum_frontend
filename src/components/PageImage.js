import { useState } from 'react';
import PageInfo from './PageInfo';
import Modal from 'react-modal';
// import ReactDOM from 'react-dom';

Modal.setAppElement('#root');
function PageImage({favArtworks}){
    
    const favList = favArtworks.map((f) => f.art)
    const [favImageCount, setFavImageCount] = useState(0);
    const [showModal, setShowModal] = useState(false);
    
    if(favList.length === 0){
        return <h1 style={{color:'ivory'}}>There is nothing in your favorites list!</h1>
    }

    function nextBtn(){
        setFavImageCount((favImageCount) => (favImageCount + 1) % favArtworks.length)   
    }

    function prevBtn(){
        setFavImageCount((favImageCount) => ((favImageCount - 1) + favArtworks.length) % favArtworks.length)   
    }

    function openModal(){
        setShowModal((showModal) => !showModal);
    }

    function closeModal(){
        setShowModal((showModal) => !showModal);
    }

    function afterOpen(){
        console.log(document.querySelector('#fav-image'));
    }

    return (
        <div className="outer-fav-div">
            <PageInfo artwork={favList[favImageCount]}/>
            <div className="fav-image-div">
                <button className="fav-image-btns" onClick={() => prevBtn()}>←</button>  
                <img id="fav-image" className="fav-image" onClick={openModal} src={favList[favImageCount].image} alt={favList[favImageCount].title}></img>
                <Modal isOpen={showModal} onAfterOpen={afterOpen} onRequestClose={closeModal} contentLabel="Fullscreen Fav Image" className="Modal" overlayClassName="Overlay">
                    <div className="modal-div">
                        <button className="modal-close"onClick={closeModal}>X</button>
                        <img className="modal-image" src={favList[favImageCount].image} alt={favList[favImageCount].title}></img>
                    </div>
                </Modal>
                <button className="fav-image-btns" onClick={() => nextBtn()}>→</button>
            </div>
            <div className="fav-image-description-div">
                <h4 className="fav-image-description">{favList[favImageCount].description}</h4>
            </div>      
        </div>
    );
}

// ReactDOM.render(<PageImage/>, document.getElementById('fav-image'));
export default PageImage;