import React from 'react'

import { Link as Links } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link'; 
const Footer = () => {
    return (
        <>
            <div className="Footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-5 col-12 ft-1">
                            <h3><span className='green'> Sign Infosoft</span></h3>
                            <p >
                                Sign Infosoft is a leading software company offering a diverse range of innovative solutions. Specializing in software development, we deliver tailored and cutting-edge software solutions to meet the unique needs of our clients.                            
                            </p>
                            <div className="footer-icons " style={{margin:`20px 0`}}>
                                <a href="https://www.facebook.com/profile.php?id=61555126155079" target="_blank" rel="noreferrer">
                                    <i class="fa-brands fa-facebook"></i>
                                </a>
                                <a href="https://www.instagram.com/signinfosoft/" target="_blank" rel="noreferrer" >
                                    <i class="fa-brands fa-instagram"></i>
                                </a>
                                <a href="https://www.youtube.com/@SignInfoSoft" target="_blank" rel="noreferrer">
                                    <i class="fa-brands fa-youtube"></i>
                                </a>
                                <a href='https://www.linkedin.com/in/sign-infosoft-8839a427b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Beuv4R0APTtacFOYJPChG2A%3D%3D' target='_blank' rel="noreferrer">
                                    <i class="fa-brands fa-linkedin"></i>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 col-12 ft-2">
                            <h5 className='green'>Quick Links</h5>
                            <ul style={{color:`white`}}>
                                <li className="nav-item">
                                    <Links to="/Services">Services</Links>
                                </li>
                                <li>
                                    <HashLink  to="/#blog">Blog</HashLink>
                                </li>
                                <li className="nav-item">
                                    <HashLink  to="/#about"  >About Us</HashLink>
                                </li>
                                <li className="nav-item">
                                    <HashLink  to="#contact" >Contact Us</HashLink>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-4 col-12 ft-3" >
                            <h5 className='green'>Contact Info</h5>
                            <p><i class="fa-solid fa-phone-volume contact-icons"></i>+91-8778942515</p>
                            <p><i class="fa-solid fa-envelope contact-icons"></i>info@signinfosoft.com</p>
                            <p><i class="fa-solid fa-paper-plane contact-icons"></i>397B, Level 2, Barathiyar Road, New Siddhapudur,Coimbatore 641044</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Last-footer'>
                <p>@{new Date().getFullYear()} All rights reserved.</p>
            </div>
        </>
    )
}

export default Footer