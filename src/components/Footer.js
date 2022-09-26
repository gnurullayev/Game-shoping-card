import React from 'react';

function Footer(props) {
    return (
        <div>
            <footer className="footer">
                <div className="container">
                    <div className="footer-info d-flex justify-content-between align-items-center">
                        <p>© {new Date().getFullYear()} shopping card </p>
                        <p className="">Game</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;