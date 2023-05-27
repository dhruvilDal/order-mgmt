import React from 'react';
import '../css/App.css';

const Header = () => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="/">
                    <img 
                        src="https://www.shutterstock.com/image-vector/clothing-store-logo-design-inspiration-600w-2104754999.jpg"
                        alt="Logo"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />
                    {' '}
                    Fashion Website
                </a>
            </div>
        </nav>
    );
};

export default Header;
