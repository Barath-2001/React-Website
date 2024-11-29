import {Link} from "react-router-dom"
import React, { useState } from "react";
import { SiPowerbi } from "react-icons/si";
import { FaAppStore } from "react-icons/fa6";
import { TbWorldWww } from "react-icons/tb";
import { FaServer } from "react-icons/fa";
import { MdPersonSearch } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import { TiSpanner } from "react-icons/ti";
import { VscDebugAltSmall } from "react-icons/vsc";
import { FaSalesforce } from "react-icons/fa";
let data1=[
    {
        service:"Power BI Services",
        content: "Sign Infosoft, a leading software company, offers comprehensive Power BI services tailored to meet the evolving data analytics needs of businesses.Our Power BI services encompass the entire spectrum of business intelligence, starting with a thorough understanding of your organization's data landscape. We specialize in designing and implementing robust Power BI solutions, enabling you to visualize and analyze data effectively. Our experts leverage the full potential of Power BI to create insightful dashboards, interactive reports, and data-driven applications.We ensure seamless integration with your existing systems and databases, allowing for real - time data connectivity and updates.Whether its data modeling, ETL processes, or dashboard customization, Sign Infosoft excels in providing end-to-end Power BI services.Furthermore, our team offers training and support, empowering your workforce to harness the power of Power BI for informed decision- making.With a commitment to data accuracy, visualization excellence, and client satisfaction, Sign Infosoft stands as your trusted partner for unlocking the true potential of Power BI in driving business intelligence and analytics initiatives.",
        One_liner:"Our experts craft insightful visualizations, turning complex data into actionable insights that drive business growth and innovation.",
        icon: SiPowerbi,
        row: 'row',
        img: require("../Images/Services/Software/site-stats-concept-illustration_114360-1434.png")
    },
    {
        service: "Mobile App Development services",
        content:`
                Sign Infosoft, a dynamic software company, excels in delivering cutting-edge Mobile App Development services that redefine user experiences. Our team of skilled developers harnesses the latest technologies to craft innovative and functional mobile applications across various platforms. With a focus on user-centric design, we create intuitive and engaging interfaces that captivate audiences.
                We pride ourselves on our versatile approach, catering to diverse industries and business requirements. From concept to deployment, Sign Infosoft ensures a seamless development process, emphasizing quality and efficiency. We leverage industry best practices to build scalable and robust mobile solutions that align with our clients' visions.
                Collaboration is at the core of our development philosophy, and our agile methodology allows us to adapt swiftly to evolving project needs. Whether it's iOS or Android development, our commitment to excellence is unwavering. Our Mobile App Development services extend beyond mere functionality; we strive to elevate brands through immersive, feature-rich applications that leave a lasting impression.
                At Sign Infosoft, we don't just create apps; we craft digital experiences that resonate with users. Our dedication to innovation, coupled with a client-centric approach, positions us as a reliable partner for businesses seeking to thrive in the mobile-driven landscape.
        `,
        One_liner: "Ensure seamless user experience and enhance customer engagement with our mobile app development services.",
        icon: FaAppStore,
        row: 'row-reverse',
        img: require("../Images/Services/Software/app-development-concept-illustration_114360-5164.png")
    },
    {
        service: "Web Development Services",
        content: `Sign Infosoft, a leading software company, stands at the forefront of the digital landscape, offering unparalleled Web Development Services. With a commitment to excellence, our team of seasoned professionals brings visionary web solutions to life. We leverage cutting-edge technologies to create dynamic and user-centric websites that resonate with the unique goals of our clients.
                  Our approach to web development is rooted in innovation, marrying aesthetics with functionality to deliver captivating online experiences. We understand the significance of a robust online presence in today's digital age, and our services are meticulously designed to meet the diverse needs of businesses across industries.
                  At Sign Infosoft, we embark on each web development project with a comprehensive understanding of client objectives and industry dynamics. From responsive design to seamless navigation, our websites are crafted with precision, ensuring optimal performance across devices. Whether it's an engaging corporate site, an e-commerce platform, or a bespoke web application, our solutions are tailored to elevate your digital footprint.
                  Driven by a passion for technology and a relentless pursuit of quality, Sign Infosoft transforms concepts into captivating digital realities. Our Web Development Services not only meet the present needs of our clients but also position them for sustained success in the evolving digital landscape.
        `,
        One_liner: "Fuse creativity and functionality to deliver web solutions tailored to your business objectives and amplify your digital impact.",
        icon: TbWorldWww,
        row: 'row',
        img: require("../Images/Services/Software/programming-concept-illustration_114360-1351.png")
    },
    {
        service: "IT Infrastructure Services",
        content: `Sign Infosoft is a dynamic software company at the forefront of the industry, offering a diverse range of IT Infrastructure Services. With a commitment to excellence, we specialize in providing cutting-edge solutions that cater to the evolving needs of businesses across various sectors. Our comprehensive suite of services encompasses the design, implementation, and management of robust IT infrastructure, ensuring seamless operations and optimal performance.
                    At Sign Infosoft, we understand the critical role that a well-structured IT framework plays in the success of any organization. Our team of dedicated professionals brings a wealth of expertise to deliver customized solutions tailored to meet the unique requirements of each client. From network architecture and server management to security protocols and system optimization, we provide end-to-end services that empower businesses to thrive in the digital landscape.
                    Our client-centric approach places emphasis on reliability, scalability, and cost-effectiveness. Whether it's deploying cloud solutions, managing data centers, or implementing cybersecurity measures, Sign Infosoft is committed to providing innovative and future-ready IT Infrastructure Services. With a focus on staying ahead of technological advancements, we ensure that our clients remain at the forefront of the ever-evolving digital landscape. Partner with Sign Infosoft for a transformative IT infrastructure experience that propels your business towards sustained success.`,
        One_liner: "Strengthen your IT foundation. We design and manage robust infrastructure solutions, ensuring seamless operations and improved system performance.",
        icon: FaServer,
        row: 'row-reverse',
        img: require("../Images/Services/Software/server-concept-illustration_114360-287.png")
    },
    {
        service: "IT Staffing Services",
        content: `Sign Infosoft is a dynamic software company dedicated to offering comprehensive IT Staffing Services. With a focus on bridging talent gaps and fostering organizational growth, our staffing solutions are designed to meet the diverse needs of businesses across various industries. Leveraging our extensive network of skilled professionals, we connect companies with top-tier IT talent, ensuring the right expertise for successful project execution.
                    Our approach to IT staffing is rooted in understanding the unique requirements of each client. By meticulously assessing the skill sets, experience, and cultural fit, we curate a pool of candidates who align with the specific goals and values of the hiring organization. Our commitment to quality extends beyond the recruitment phase; we prioritize continuous support and engagement to foster lasting partnerships between employers and our skilled IT professionals.
                    At Sign Infosoft, we recognize the critical role that a robust IT team plays in driving innovation and achieving business objectives. Through our staffing services, we empower organizations to adapt to evolving technological landscapes and remain competitive. Whether clients require short-term project-based staffing or long-term strategic hires, Sign Infosoft stands as a trusted partner in navigating the dynamic world of IT talent acquisition.`,
        One_liner: "Our extensive network and rigorous vetting process ensure you access skilled professionals who seamlessly integrate into your team.",
        icon: MdPersonSearch,
        row: 'row',
        img: require("../Images/Services/Software/shared-workspace-concept-illustration_114360-5249.png")
    },
    {
        service: "Software Development Technologies",
        content: `Sign Infosoft, a dynamic software company, is at the forefront of innovation in Software Development Technologies. Our commitment to excellence is evident in our adept utilization of cutting-edge technologies to create robust and scalable software solutions. We leverage a diverse range of programming languages, frameworks, and tools to meet the unique needs of our clients.

                    At Sign Infosoft, our skilled and forward-thinking development team is dedicated to crafting custom software applications that drive business growth. With a comprehensive understanding of the latest industry trends, we embrace emerging technologies to stay ahead of the curve. Our proficiency extends across a spectrum of technologies, ensuring versatility in our approach to software development.
                    Client satisfaction is at the core of our values, and we prioritize delivering solutions that not only meet but exceed expectations. From front-end development to back-end architecture, we adopt a holistic approach to create seamless and intuitive user experiences. Our software development process is characterized by agility and adaptability, allowing us to respond dynamically to the evolving needs of the tech landscape.
                    Sign Infosoft is not just a software company; it is a technology partner that empowers businesses to thrive in the digital era. With a passion for innovation and a commitment to quality, we continue to drive technological advancements that shape the future of Software Development Technologies.`,
        One_liner: "Harness cutting-edge tools and methodologies to build robust, scalable solutions that meet today's demands and tomorrow's opportunities.",
        icon: FaLaptopCode,
        row: 'row-reverse',
        img: require("../Images/Services/Software/programmer-concept-illustration_114360-2284.png")
    },
    {
        service: "Software Testing",
        content: `Sign Infosoft stands as a distinguished software company, specializing in the crucial domain of Software Testing. Our dedicated focus on this integral aspect of software development reflects our commitment to delivering high-quality, reliable, and flawless products to our clients. We understand the pivotal role that meticulous testing plays in ensuring the functionality, performance, and security of software applications.

                    Our team of skilled testing professionals employs a comprehensive approach to identify and rectify potential defects, ensuring that our clients receive software solutions that not only meet but exceed industry standards. With a keen eye for detail, we execute thorough testing processes to validate the functionality of each component, guaranteeing a seamless user experience.
                    At Sign Infosoft, we recognize the dynamic nature of the software landscape, and our testing methodologies evolve in tandem with technological advancements. Whether it's manual or automated testing, our goal remains unwavering — to provide our clients with robust, error-free software that aligns perfectly with their business objectives.
                    Our commitment to Software Testing extends beyond identifying issues; we view it as a proactive measure to enhance software quality, reduce risks, and ultimately contribute to the success of our clients' projects. With Sign Infosoft, you can trust that your software undergoes rigorous testing, ensuring its reliability, performance, and compliance with industry standards.`,
        One_liner: "Hire dedicated teams to monitor, troubleshoot, and optimize your applications, ensuring your technology investment thrives long-term.",
        icon: TiSpanner,
        row: 'row',
        img: require("../Images/Services/Software/software-code-testing-concept-illustration_114360-8414.png")
    },
    {
        service: "Software Maintenance and Support",
        content: `Sign Infosoft, a distinguished software company, is at the forefront of delivering impeccable Software Maintenance and Support services. Our unwavering commitment revolves around ensuring the continual functionality and optimization of your software solutions. With a dedicated team of experts, we provide vigilant monitoring, prompt issue resolution, and ongoing enhancements to safeguard the integrity and performance of your software applications.
                    Our comprehensive approach involves thorough analysis and proactive measures to identify potential issues before they impact your operations. We prioritize a seamless user experience by promptly addressing any challenges that may arise, minimizing downtime and maximizing the longevity of your software investments.
                    At Sign Infosoft, we recognize that technology evolves, and so do your software needs. Our support services extend beyond mere troubleshooting to encompass continuous improvements and updates, aligning your software with industry best practices. Whether it's bug fixes, performance optimizations, or adapting to new requirements, our team is dedicated to ensuring your software remains robust, secure, and aligned with your business objectives.
                    Partnering with Sign Infosoft for Software Maintenance and Support guarantees a reliable, responsive, and forward-looking approach, allowing you to focus on your core business activities while we handle the intricacies of your software ecosystem.`,
        One_liner: "Hire dedicated teams to monitor, troubleshoot, and optimize your applications, ensuring your technology investment thrives long-term.",
        icon: VscDebugAltSmall,
        row: 'row-reverse',
        img: require("../Images/Services/Software/Support.png")
    },
    {
        service: "Salesforce Implementation & Support",
        content: `Sign Infosoft is a distinguished software company, offering comprehensive Salesforce Implementation and Support services. Our team of experts excels in the seamless integration of Salesforce solutions, tailoring them to meet the unique needs of businesses across various industries. With a commitment to excellence, we empower organizations to unlock the full potential of Salesforce, optimizing their operations and fostering growth.
                    Our Salesforce Implementation services encompass the entire lifecycle of the implementation process. From initial consultation and requirement analysis to customization, configuration, and deployment, we ensure a smooth transition to Salesforce. We understand that each business has unique requirements, and our solutions are crafted to align perfectly with those needs.
                    In addition to implementation, our dedicated Support services ensure that Salesforce continues to operate at its best. We provide ongoing maintenance, troubleshooting, and updates, ensuring that our clients' Salesforce environments remain efficient, secure, and up-to-date.
                    At Sign Infosoft, we prioritize client success, and our Salesforce services are designed to drive operational excellence. Whether it's optimizing sales processes, enhancing customer relationship management, or improving data visibility, our Salesforce solutions are tailored to drive tangible results and elevate the overall business performance. As a trusted partner, Sign Infosoft is dedicated to empowering businesses on their journey to Salesforce success.`,
        One_liner: "Specializes in Salesforce Implementation & Support, delivering tailored solutions to optimize business processes.",
        icon: FaSalesforce,
        row: 'row',
        img: require("../Images/Services/Software/memory-storage-concept-illustration_114360-2942.png")
}
]

function Software(){
    const Service=(values)=>{
        // eslint-disable-next-line no-unused-vars
        const [data, SetData] = useState({
            service:values.service,
            content:values.content
        });
        return(
            <div className="box" style={{alignItems:`center`,justifyContent:`space-around`,flexDirection:values.row}}>
            <div>
                <img src={values.img} alt="img" height="300px" width="100%" />
            </div>
                <div className="" style={{flexGrow:`0` }}>
                    <div class="card h-100 auto-align" style={{width: `18rem`}}>
                    <span style={{ textAlign: `center` }}>
                        <button style={{ textAlign: `center`, width: `4em`, borderRadius: `10px`, backgroundColor: `#99f2e2` }}>
                            <values.icon style={{ fontSize: `2rem` }} />
                        </button>
                    </span>                            
                    <h6 class="card-title" style={{fontSize:`1.5rem`,textAlign:`center`,marginTop:`15px`}}>{values.service}</h6>
                            <p class="card-text">{values.One_liner}</p>
                        <Link className="mt-auto" to="/Detail" state={{ data: data }} >
                        <button style={{ borderRadius: `2em`, padding: `.5em 1.5em`, height: `auto` }} >Learn More</button>
                        </Link>
                </div>
            </div>
            </div>

        )
    }
    return(
        <>
            <div style={{ }}>
                <h2 className="Top" style={{ textAlign: `center` }}>Software Development</h2>
                <p style={{margin:`30px 15px`}}>
                    Sign Infosoft excels in software development, offering a comprehensive suite of services that drive technological innovation for businesses. With a team of skilled developers, they craft customized solutions to meet the specific requirements of clients. From conceptualization to deployment, Sign Infosoft ensures a seamless development process, leveraging the latest technologies and industry best practices. Their expertise spans across diverse domains, including web development, mobile app development, and enterprise software solutions. Striving for excellence, Sign Infosoft is committed to delivering scalable, robust, and user-friendly applications. With a focus on staying ahead of industry trends, they empower clients to achieve their business objectives through cutting-edge software solutions, reinforcing their position as a trusted partner in the realm of software development.
                </p>
            </div>  
            <div className="container"> 
                <div className="">
                        {data1.map(Service)}    
                </div>
            </div>          
        </>
    );
}
export default Software;