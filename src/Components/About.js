import React, { useState } from "react";
import { Container } from "react-bootstrap";
function About() {
    const [isOpen, SetIsOpen] = useState(false)

    return (
        <Container id="about" style={{margin:`auto`,paddingTop:`0px`}}>
            <div style={{  }}>
                <div class="" style={{ Width: `100%`, backgroundColor: `` }}>
                <div class="card-body">
                    <h5 class="card-title" ><span className="green">About</span> US</h5>
                    <p class={isOpen ? "card-text1" : "card-text text"} style={{textAlign:`justify`}}>
                        Sign Infosoft is a versatile software company offering a comprehensive suite of services. Specializing in software development, we craft innovative and customized solutions tailored to our clients' needs. Our expertise extends to mortgage support, ensuring seamless operations in the financial domain. In the healthcare sector, we provide BPO services, contributing to efficient healthcare management. Our proficiency in data services empowers businesses with accurate and actionable insights.
                        As leaders in insurance BPO, we optimize processes for enhanced efficiency. Sign Infosoft excels in research and analysis solutions, driving informed decision-making. Additionally, our transcription services uphold accuracy and confidentiality. In logistics, we provide streamlined solutions for efficient supply chain management. Lastly, our Photoshop editing services showcase creativity and precision, adding a visual edge to diverse projects.
                    </p>
                        <button onClick={() => SetIsOpen(!isOpen)} class="Read-btn" style={{ Color: `#02066f`}}>{isOpen ? 'Read Less' : 'Read More' }</button>
                </div>
            </div>
        </div>
        </Container>
    );
}

export default About;