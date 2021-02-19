function Header({history, currentUser, handleLogOut}) {
    
    function handleClick() {
        history.push('/artwork')
    }
    

    return (
        <div className="header-div">
            { currentUser ? <h1 className="main-header" onClick={handleClick}>YOURSEUM</h1> : <h1 className="main-header">YOURSEUM</h1>}
            { currentUser ? <button className="log-out" onClick={handleLogOut}> Logout </button>
            : null}
        </div>
    );
}

export default Header; 