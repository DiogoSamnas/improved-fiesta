import "./header.css";

function Header(){
    return(
        <div className="header">
            <h1>IMPROVED <a>FIESTA</a></h1>

            <div className="menu">
                <div className="title">
                    MY NOTES
                </div>
                <div className="order">
                    ORDER
                </div>
            </div>
        </div>
    );
}

export default Header;