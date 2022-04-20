import React, { useState } from 'react'
import './Navibar.css';
import logo from '../../assets/steamlogo.jpg';
import {Link} from "react-router-dom"

const Navibar = () => {
    const [clicked, setClicked] = useState(false)
    const handleClick = () => {
        setClicked(!clicked);
    }

    const MenuItems = [
        {
            title: 'Home',
            url: '/',
            cName: 'nav-links'
        },
        {
            title: 'Games',
            url: '/games',
            cName: 'nav-links'
        },
        {
            title: 'Sign In',
            url: '/signin',
            cName: 'nav-links'
        }

    ]
    return(
        <nav className = 'NavbarItems'>
            <div className ='navbar-logo'><img src={logo} className = 'logo' alt = '???'/>
                <div className = 'logo-name-center'>
                    <h1 className='logo-name'>Noir Games</h1>
                </div>
            </div>
            <div className = 'menu-icon' onClick={handleClick}>
                <i className = {clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className = {clicked ? 'nav-menu active' : 'nav-menu'}>
                {MenuItems.map((item, index) => {
                    return(
                        <li key = {index}>
                            <a className = {item.cName} href = {item.url}>
                                {item.title}
                            </a>
                        </li>
                    )
                })}
            </ul>
            {/* <div style = {{width: "250px", display: "flex", justifyContent: "center", alignContent: "center", marginRight: "25px"}}>
            <div className="dropdown">
                <button className="dropbtn">Get Started</button>
                <div className="dropdown-content">
                    <a href="/participant">Job Seeker</a>
                    <a href="/hiringmanager">Hiring Manager</a>
                </div>
                </div>
            </div> */}
            <div>

            </div>
        </nav>
    );
            
}

export default Navibar