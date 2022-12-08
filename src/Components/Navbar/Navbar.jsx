import React from 'react';
import '../Navbar/Navbar.css';
import {Link} from 'react-scroll';

const Navbar = () => {
  return (
    <div className="n-wrapper">
        <div className="n-left">
            <div className="n-name">Zion Teasley</div>
            {/* <span>toggle</span> */}
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul style={{listStyleType: 'none'}}>

                    <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass'>
                    <li>Home</li>
                    </Link>

                    <Link spy={true} to='Services' smooth={true} activeClass='activeClass'>
                    <li>Specialties</li>
                    </Link>

                    {/* <li>Experience</li> */}
                    <Link spy={true} to='Portfolio' smooth={true} activeClass='activeClass'>
                    <li>Projects</li>
                    </Link>
                    {/* <li>Testimonials</li> */}
                </ul>
            </div>

            
            <button className="button n-button">
                Contact
            </button>
        </div>
    </div>
  )
}

export default Navbar