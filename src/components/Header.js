// import { Link } from 'react-router-dom';

function Header({history}) {

    function handleClick() {
        history.push('/artwork')
    }
    

    return (
        <div className="header-div">
            {/* <Link to='/artwork'> YOURSEUM </Link> */}
            <h1 className="main-header" onClick={handleClick}>YOURSEUM</h1>
        </div>
    );
}

export default Header; 