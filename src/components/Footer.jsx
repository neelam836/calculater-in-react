import React from 'react';
import { BsArrowUp } from "react-icons/bs";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-dark text-light py-3 mt-auto">
            <div className="container d-flex justify-content-between align-items-center">
                <span>
                    &copy; {currentYear} My React Apps
                </span>
                <button
                    type="button"
                    className="btn btn-outline-light btn-sm rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: '36px', height: '36px', padding: 0 }}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    aria-label="Back to Top"
                >
                    <BsArrowUp size={18} />
                </button>
            </div>
        </footer>
    );
};

export default Footer;
