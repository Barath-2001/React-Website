import {Link} from "react-router-dom";
import { FaCode } from "react-icons/fa";
import { TbHomeDollar } from "react-icons/tb";
import { FaTruck } from "react-icons/fa";
import { MdHealthAndSafety } from "react-icons/md";
import { FaDatabase } from "react-icons/fa";
import { FaHandHoldingHeart } from "react-icons/fa6"; 
import { FaFileAudio } from "react-icons/fa";
import { GiArchiveResearch } from "react-icons/gi";
import { TbPhotoEdit } from "react-icons/tb";
import React from "react";
let data = [
    {
        services: "Software Development",
        path: "/Software-Development",
        icon:FaCode,
        one_liner: "Transforming visions into seamless software solutions through expert development and innovation."
    },
    {
        services: "Mortgage Support",
        path: "/Mortgage-Support",
        icon: TbHomeDollar,
        one_liner: "Elevating your mortgage experience with innovative and reliable software support."
    },
    {
        services: " Healthcare BPO",
        path: "/Healthcare-BPO",
        icon: MdHealthAndSafety,
        one_liner: "Empowering healthcare efficiency through strategic outsourcing with our Healthcare BPO solutions."
    },
    {
        services: "Data Service",
        path: "/Data-Services",
        icon: FaDatabase,
        one_liner: "Delivers unparalleled data services, transforming information into actionable insights for business excellence."
    },
    {
        services: "Insurance BPO",
        path: "/Insurance-BPO",
        icon: FaHandHoldingHeart,
        one_liner: "Streamlining insurance processes with precision and efficiency through our dedicated Insurance BPO services."
    },
    {
        services: "Research and Analysis Solution",
        path: "/Research-and-Analysis-Solution",
        icon: GiArchiveResearch,
        one_liner: "Leveraging cutting-edge technology to provide actionable insights and drive informed decision-making."
    },
    {
        services: "Transcription Services",
        path: "/Transcription-Services",
        icon: FaFileAudio,
        one_liner: " Elevating Communication with Precision Transcription Services."
    },
    {
        services: "Logistics Service",
        path: "/Logistics-Services",
        icon: FaTruck,
        one_liner: " Empowering Logistics with Seamless and Efficient Services."
    },
    {
        services: "Photo Editing",
        path: "/Photo-Editing",
        icon: TbPhotoEdit,
        one_liner: "Transforming images with precision and creativity, our photo editing services bring your visual visions to life."
    }
];

function Services(){
    const Service = (values) => {
    
        return (
            <div className="" style={{margin:`10px auto`}}>
                <div class="card h-100" style={{ width: `18rem`}}>
                    <span style={{textAlign: `center`}}>
                        <button style={{ textAlign: `center`, width: `4em`, borderRadius: `10px`, backgroundColor:`#99f2e2`}}>
                        <values.icon style={{ fontSize: `2rem`}} /> 
                    </button>
                    </span>
                    <h5 class="card-title" style={{ fontSize: `1.5rem`, textAlign: `center`, marginTop: `15px` }}>{values.services}</h5>
                    <p class="card-text">{values.one_liner}</p>
                    <Link className="mt-auto" to={values.path} >
                        <button style={{ borderRadius:`2em`,padding:`.5em 1.5em`,height:`auto`}}>
                        Learn More
                        </button>
                    </Link>
                </div>
            </div>
        )
    }
    return (
        <>
            <div className="" style={{ backgroundColor:``}}>
                <h2 style={{textAlign:`center`,paddingTop:`80px`}}>Services</h2>
                <p style={{margin:`0 15px`}}>
                    Sign Infosoft is a dynamic software company offering a diverse range of services. Specializing in cutting-edge solutions, they cater to businesses with innovative software development, web design, and mobile app development. Their commitment to excellence is evident in delivering tailored solutions that meet the unique needs of clients. With a skilled team of professionals, Sign Infosoft strives to stay ahead in the ever-evolving tech landscape. Whether it's enhancing user experiences, optimizing business processes, or creating robust applications, Sign Infosoft stands out as a reliable partner, ensuring clients leverage the full potential of modern technology for their success.
                </p>
            </div>   
            <div className="container">
                <div className="row ">
                    {data.map(Service)}
                </div>
            </div>

        </>
    );
}
export default Services;