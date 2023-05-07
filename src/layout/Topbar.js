import {Link, useLocation} from "react-router-dom";

function Topbar () {

    const location = useLocation()

    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link to="/" className="navbar-brand">Start Bootstrap</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className={ "nav-link" + ( ( location.pathname == "/" ) ? " active" : "" ) }>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/blockchain" className={ "nav-link" + ( ( location.pathname == "/blockchain" ) ? " active" : "" ) }>Blockchain Stuff</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/blog" className={ "nav-link" + ( ( location.pathname == "/blog" ) ? " active" : "" ) }>Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className={ "nav-link" + ( ( location.pathname == "/about" ) ? " active" : "" ) }>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className={ "nav-link" + ( ( location.pathname == "/contact" ) ? " active" : "" ) }>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )

}

export default Topbar