import { useState } from "react";
import { Link } from "react-router-dom";
import img from "../Images/Service.jpg"
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";


const accordionData = [
    {
        title: "Software Development",
        path: "/Software-Development",
        content: `Sign Infosoft excels in software development, delivering innovative solutions for businesses. With expertise in web design, mobile app development, and cutting-edge technologies, they provide tailored services to meet clients' unique requirements. The skilled team at Sign Infosoft ensures the creation of robust applications, optimizing user experiences and streamlining business processes. Committed to staying at the forefront of technology, Sign Infosoft stands as a reliable partner, helping clients harness the power of software for their success.`,
    },
    {
        title: "Mortgage Support",
        content: `
            Sign Infosoft excels in Mortgage Support services, offering a comprehensive suite of solutions tailored to meet the specific needs of the mortgage industry. Their expertise spans document verification, loan processing, underwriting support, and more. With a dedicated team and advanced technologies, Sign Infosoft ensures efficient and accurate processing, contributing to streamlined mortgage workflows. As a trusted partner in Mortgage Support, they prioritize precision and reliability, empowering clients with the tools and assistance needed to navigate the complexities of mortgage-related processes.
        `,
        path: "/Mortgage-Support"
    },
    {
        title: "Healthcare BPO",
        content: `
            In the realm of healthcare business process outsourcing (BPO), Sign Infosoft excels as a trusted partner. With a focus on efficiency and compliance, they offer comprehensive BPO solutions for healthcare providers. From medical billing and coding to claims processing, Sign Infosoft streamlines administrative tasks, enabling healthcare organizations to allocate more resources to patient care. Their commitment to accuracy and confidentiality ensures a seamless outsourcing experience, contributing to the overall effectiveness of healthcare operations.
        `,
        path: "/Healthcare-BPO"
    },
    {
        title: "Data Service",
        content: `
            Sign Infosoft excels in data services, providing comprehensive solutions for businesses. Their expertise spans data analytics, management, and processing, ensuring clients harness actionable insights. With a focus on accuracy and security, Sign Infosoft offers data cleansing, migration, and integration services. Leveraging advanced technologies, they empower organizations to make informed decisions, enhance efficiency, and drive growth. Whether handling large datasets or implementing real-time analytics, Sign Infosoft delivers reliable and scalable data services tailored to meet the evolving needs of modern enterprises.
        `,
        path: "/Data-Services"
    },
    {
        title: "Insurance BPO",
        content: `
        Sign Infosoft excels in Insurance BPO services, providing an efficient and reliable outsourcing solution. With a focus on the insurance industry, their expert team offers streamlined processes, data management, and customer support. Whether handling claims processing, policy administration, or customer inquiries, Sign Infosoft ensures accuracy and compliance. Leveraging advanced technology and industry expertise, they optimize operational efficiency for insurance companies, allowing them to concentrate on core activities while benefiting from Sign Infosoft's dedicated and specialized BPO services.
        `,
        path: "/Insurance-BPO"
    },
    {
        title: "Research and Analysis Solution",
        content: `
            Sign Infosoft excels in Research and Analysis Solutions, providing businesses with valuable insights and strategic intelligence. Leveraging advanced technologies and a skilled team of analysts, they deliver comprehensive reports, market trends, and competitive analysis to empower informed decision-making. With a commitment to accuracy and efficiency, Sign Infosoft's Research and Analysis Solutions are tailored to meet the specific needs of clients, ensuring they stay ahead in their industries. Whether it's market research, data analysis, or trend forecasting, Sign Infosoft is a trusted partner for unlocking key business insights.
        `,
        path: "/Research-and-Analysis-Solution"
    },
    {
        title: "Transcription Services",
        content: `
        Sign Infosoft excels in transcription services, providing accurate and efficient conversion of audio and video content into written text. Leveraging advanced technology and a skilled team, they ensure precision in transcribing diverse content such as interviews, meetings, and more. Clients benefit from timely and reliable transcriptions, meeting the highest standards of quality. Sign Infosoft's transcription services streamline information retrieval, enhancing accessibility and usability across various industries.
    `,
        path: "/Transcription-Services"
    },
    {
        title: "Logistics Service",
        content: `
Sign Infosoft excels in logistics services, providing efficient solutions in a dynamic market. With a focus on seamless supply chain management, they optimize processes, enhance visibility, and ensure timely deliveries. Leveraging cutting-edge technology, Sign Infosoft offers innovative tracking systems, route optimization, and inventory management. Their commitment to reliability and customer satisfaction sets them apart, making Sign Infosoft a trusted partner for businesses seeking streamlined and effective logistics solutions.    `,
        path: "/Logistics-Services"
    },
    {
        title: "Photo Editing",
        content: `Sign Infosoft excels in photo editing, offering an array of services to enhance and transform images. Their skilled team employs advanced techniques to retouch, color correct, and manipulate photos, ensuring a polished and professional outcome. From restoring old photographs to refining product images for e-commerce, Sign Infosoft's photo editing services cater to diverse needs. With attention to detail and a creative touch, they elevate visual content, making it visually appealing and impactful. Trust Sign Infosoft for high-quality photo editing that brings out the best in your images.    `,
        path: "/Photo-Editing"
    }
];
const accordionStyles = {
    maxWidth: "600px",
    margin:" 40px 0  40px 0 "
    

};

const accordionTitleStyles = {
    display: "flex",
    justifyContent: "space-between",
    cursor: "pointer",
    padding: "5px",
    background: "#4169E1",
    border: "2px solid #4169E1",
    borderRadius: "2em",
    color:"white"
};

const accordionContentStyles = {
    padding: "5px",
    background: "",
    margin:"0 5px",
    border:"1px solid black",
    borderRadius:"12px"
};

const AccordionSection = ({
    section,
    isActiveSection,
    setActiveIndex,
    sectionIndex,
}) => {
    const toggleSection = () => {
        const nextIndex = isActiveSection ? null : sectionIndex;
        setActiveIndex(nextIndex);
    };
    return (
        <div className="diable2" style={{ margin:`10px`}}>
            <div style={accordionTitleStyles} onClick={toggleSection}>
                <div className=" disable1" style={{fontWeight:`bold`,textAlign:`center`,margin:`10px auto`,justifyContent:`center`,alignItems:`center`}}>{section.title}</div>
                <div style={{ color: `#02066f`, fontSize: `2rem` }}>{isActiveSection ? <MdKeyboardArrowUp/> : <MdKeyboardArrowDown />}</div>
            </div>
            {isActiveSection && (
                <div style={accordionContentStyles}>
                {section.content}
                <br/>
                <Link to={section.path}>
                        <button className="btn btn-primary mt-auto" style={{ display:`block`,margin: `5px auto`, color: `white`, backgroundColor: `#4169E1`, borderRadius: `2em`, padding: `.5em 1.5em` }}>Learn more</button>
                </Link>
                </div>
            )}
        </div>
    );
};

const Services = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    
    return (
        <>
        <h1 style={{ textAlign: `center`, color:`black`,}}>Our Services</h1>
        <div className="box" style={{alignItems:`center`,justifyContent:`space-evenly`}}>
            <div style={accordionStyles}>
                {accordionData.map((section, index) => (
                    <AccordionSection
                        section={section}
                        key={index}
                        isActiveSection={index === activeIndex}
                        setActiveIndex={setActiveIndex}
                        sectionIndex={index}
                    />
                ))}
            </div>
            <div className="disable" >
                <img src={img} alt="img" height="600px" width="100%" style={{margin:`0px `}}></img>
            </div>
        </div>
        </>
    );
};

export default Services;