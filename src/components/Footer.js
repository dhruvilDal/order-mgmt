import React from 'react';
import '../css/App.css';

const Footer = () => {
    return (
        <footer className="footer bg-dark text-white mt-5 p-4 text-center">
            <div className="container">
                &copy; {new Date().getFullYear()} Fashion Website
            </div>
        </footer>
    );
};

export default Footer;
