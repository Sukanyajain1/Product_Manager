import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const TopNav = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg highlight">
                <div className="container-fluid">
                <h1 className="navbar-brand">Sukanya Jain's Web Developer Portfolio</h1>
                <ul className="navbar-nav nav-tabs justify-content-end">
                    <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/" className="nav-link">My Projects</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/" className="nav-link">About Me</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/" className="nav-link">Contact Me</Link>
                    </li>
                </ul>
                </div>
            </nav>
        </>
    );
}

export default TopNav;