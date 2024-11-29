
import {Container} from "react-bootstrap"
import img from "../Images/Map.png"
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
function Contact(){
    return(
        <>
            <h1 id='contact' style={{textAlign:`center`,paddingTop:`40px`}}>Contact</h1>
            <div className="box  " style={{ justifyContent:`space-between`,alignContent:`center`,margin:`40px auto`}}>
            <div className="Contact-container"  >
                <div className=''>
                    <Container>
                        <div className='gmaps-frame' onclick="document.getElementById('iframe').style.pointerEvents= 'auto'">
                                <a href="https://www.google.com/maps/place/11%C2%B000'59.7%22N+76%C2%B058'29.3%22E/@11.0167067,76.9747794,19.89z/data=!4m4!3m3!8m2!3d11.016593!4d76.9748029?entry=ttu" target="_blank" rel="noreferrer">
                                    <img className="Map-img" src={img} alt="Map" width="100%" Height="420px"  style={{margin:`10px`}}/>
                            </a>
                        </div>
                    </Container>
                </div>
            </div>           
                <div class="card auto-align " style={{ width: `16rem`,height:`27rem`, margin: `10px` }}>
                <div class="card-body">
                    <h2 className="" style={{fontSize:`1.5rem`}}>Get in Touch</h2>
                    <p class="card-text" style={{ verticalAlign: `middle`,marginTop:`40px` }}>
                        <FaLocationDot /><h6>397B, Level 2, Barathiyar Road,
                            New Siddhapudur,
                            Coimbatore 641044</h6>
                        <FaPhoneAlt /><h6>+91-8778942515</h6>
                        <br />
                        <MdEmail /><h6>info@signinfosoft.com</h6>
                    </p>
                </div>
            </div>
                <div class="card auto-align" style={{ width: `16rem`,height:`27rem`, margin:`10px` }}>
                <div class="card-body">
                        <h2 className="" style={{ fontSize: `1.5rem` }}>Representative office</h2>
                    <p class="card-text" style={{ verticalAlign: `middle` }}>
                        <FaLocationDot /><h6>3575 kaneff Crescent, Mississauga, ON L5A 3Y5, Canada</h6>
                        <br />
                            <FaPhoneAlt /><h6>+1 (647) 569-4984</h6>
                        <br />
                        <MdEmail /><h6>info@signinfosoft.com</h6>
                    </p>
                </div>
            </div>
                <div class="card auto-align" style={{ width: `16rem`,height:`27rem`,margin: `10px` }}>
                    <div class="card-body">
                        <h2 className="" style={{ fontSize: `1.5rem` }}>Representative office</h2>
                        <p class="card-text" style={{ verticalAlign: `middle` }}>
                            <FaLocationDot /><h6>OCTAVIA ST, TOONGABBILE, NEW, SYDNEY - 2146</h6>
                            <br />
                            <FaPhoneAlt /><h6>+61 403 808 099</h6>
                            <br />
                            <MdEmail /><h6>info@signinfosoft.com</h6>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Contact;