import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container-fluid">
                <ul className="navbar-nav">
                    <li className="nav-item m-1">
                        <Link className="nav-link " to="/">
                            Main
                        </Link>
                    </li>
                    <li className="nav-item m-1">
                        <Link className="nav-link" to="/todos">
                            Todos
                        </Link>
                    </li>
                </ul>
            </div> 
        </nav>
            
    );
}
 
export default NavBar;