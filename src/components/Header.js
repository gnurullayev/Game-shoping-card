import React from 'react';

function Header(props) {
    return (
        <header className='header'>
            <div className="container">   
                <div className="d-flex flex-column flex-md-row align-items-center pb-3 border-bottom">
                    <a href="/" className="d-flex align-items-center text-dark text-decoration-none">
                        <b>ShoppingCard</b>
                    </a>

                    <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
                        <a className="py-2 text-dark text-decoration-none" href="#">Pricing</a>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;