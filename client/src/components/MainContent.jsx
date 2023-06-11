import React, { useState, useEffect } from 'react';
import '../App.css'
import { Outlet } from 'react-router-dom';

const MainContent = () => {
    return (
        <>
            <Outlet/>

            <div className="footer highlight">
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-3 mt-3">
                        <div className="col-6">
                            <h4 className="border-bottom border-dark">ABOUT</h4>
                            <div className="row">
                            <div className="col-3">Profile picture</div>
                            <div className="col">
                                <p>Sukanya Jain is a freelance web developer living in Long Island, NY. She began her engineering journey with a Bachelor's in Biomolecular Sciences from NYU Tandon School of Engineering (2019) and is continuing to build on that path after completing the Fullstack Software Engineering Bootcamp program offered by Coding Dojo (2022). They say a parent should never do this, but if she had to...</p>
                                <p className="mb-0">&lt;Sukanya&gt;</p>
                                <ul className="mb-0">
                                <li>&lt;Front-End class="growing-on-me" id="like-a-fungus" /&gt;</li>
                                <li>&lt;Back-End class="favorite-forever" /&gt;</li>
                                <li>&lt;Database class="good-stuff" /&gt;</li>
                                </ul>
                                <p>&lt;/Sukanya&gt;</p>
                            </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <h4 className="border-bottom border-dark">MERN Stack Projects</h4>
                            {/* <Link to={{ pathname: "http://44.202.10.33/" }} target="_blank">Pizza-Time</Link> */}
                            <p>WaterBnB</p>
                            <p>BuJo Pro</p>
                            <p>Gift Detectives</p>
                        </div>
                        <div className="col-3">
                        <h4 className="border-bottom border-dark">Java Spring Boot Projects</h4>
                        <p>Project # 1</p>
                        <p>Project # 2</p>
                        <p>Project # 3</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MainContent;