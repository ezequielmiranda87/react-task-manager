import React from 'react';
import {Link} from 'react-router-dom';
import SignedInLinks from '../layout/SignedInLinks';
import SignedOutLinks from '../layout/SignedOutLinks';

const NavBar = (props) => {
    return(
        <nav className = "nav-wrapper grey darken-3">
            <div className = "container">
                <Link to ="/" className="brand-logo">Task Manager</Link>
                <SignedInLinks/>
                <SignedOutLinks/>
            </div>
        </nav>
    )
}

export default NavBar;