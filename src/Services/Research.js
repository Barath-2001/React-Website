import { Link } from "react-router-dom"
import { useState } from "react"
import { FaSackDollar } from "react-icons/fa6";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaSearchDollar } from "react-icons/fa";
import { IoBarChartOutline } from "react-icons/io5";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { CiMedicalClipboard } from "react-icons/ci";


let data1 = [
    {
        service: "Financial Research Services",
        content: `Sign Infosoft, a distinguished software company, is at the forefront of revolutionizing the financial landscape through its unparalleled Financial Research Services. With an unwavering commitment to excellence, we empower clients with cutting-edge solutions that transcend traditional boundaries. Our team of skilled professionals harnesses the power of technology to deliver comprehensive and insightful financial research, guiding businesses towards informed decision-making.
                    At Sign Infosoft, we understand the dynamic nature of the financial sector, and our services are designed to adapt and thrive in this ever-evolving environment. We offer a robust suite of solutions that spans market analysis, trend identification, and risk assessment. By leveraging advanced technologies and industry expertise, we provide clients with a strategic edge, enabling them to navigate complexities and seize opportunities in the financial landscape.
                    Our Financial Research Services cater to diverse needs, from market intelligence for investment decisions to in-depth analyses that drive financial strategies. Sign Infosoft stands as a beacon of innovation and reliability, consistently exceeding expectations in delivering tailored financial research solutions. As a trusted partner, we empower businesses to stay ahead in the competitive financial landscape, ensuring sustained growth and success.`,
        One_liner:"Get comprehensive insights into market trends, investment opportunities, and economic indicators with our research support.",
        icon: FaSackDollar,
        row:"row",
        img:require("../Images/Services/Research/accounting-concept-illustration_114360-16970.png")
    },
    {
        service: "Investment Research Services",
        content: `Sign Infosoft stands as a dynamic software company, offering specialized services in the domain of Investment Research. With a dedicated focus on excellence, we bring forth comprehensive solutions that cater to the unique needs of clients navigating the complexities of financial markets. Our team of skilled professionals is adept at conducting in-depth research, providing valuable insights, and delivering precise analyses to empower informed decision-making in the ever-evolving landscape of investments.
                    At Sign Infosoft, we understand the critical role that research plays in the investment domain. Leveraging cutting-edge technologies and industry best practices, we aim to provide robust and accurate investment research services. Our commitment to delivering high-quality outcomes is reflected in our meticulous approach to data analysis, market trends, and risk assessment.
                    Whether clients seek market intelligence, asset valuation, or investment strategy recommendations, Sign Infosoft is equipped to meet these needs with a strategic and client-centric mindset. Through our Investment Research Services, we strive to be a reliable partner for businesses and individuals seeking to navigate the intricacies of the financial realm, ensuring they are well-informed and positioned for success in their investment endeavors.`,
        One_liner: "Analyze market data, asset performance, and risk factors to optimize your investment portfolio and achieve your financial goals.",
        icon: BsGraphUpArrow,
        row: "row-reverse",
        img: require("../Images/Services/Research/financial-advisor-concept-illustration_114360-16973.png")
    },
    {
        service: "Market Research Services",
        content: `Sign Infosoft is a dynamic software company at the forefront of the industry, offering a comprehensive array of Market Research Services. Our commitment to excellence is reflected in our meticulous approach to gathering, analyzing, and interpreting data. With a keen understanding of the evolving market landscape, we provide clients with valuable insights that empower informed decision-making.
                    Our seasoned team of professionals leverages cutting-edge technologies to conduct thorough market research, unraveling trends, and uncovering opportunities. We tailor our services to meet the unique needs of each client, ensuring that our analyses align with their strategic objectives

                    At Sign Infosoft, we recognize the pivotal role that accurate and timely market intelligence plays in shaping business strategies. Whether clients seek to understand consumer behavior, assess market competition, or identify emerging trends, our Market Research Services serve as a catalyst for success. We prioritize precision, confidentiality, and actionable results, fostering enduring partnerships with clients across diverse industries.
                    In an ever-changing business landscape, Sign Infosoft stands as a reliable partner, offering not just services, but strategic insights that propel businesses forward. Our dedication to delivering unparalleled Market Research Services underscores our commitment to driving excellence and innovation in every project we undertake.`,
        One_liner: "Analyze consumer behavior, industry trends, and competitive landscapes to shape your decisions and drive innovation.",
        icon: IoBarChartOutline,
        row: "row",
        img: require("../Images/Services/Research/analysis-concept-illustration_114360-1119.png")
    },
    {
        service: "Business Research Services",
        content: `Sign Infosoft, a distinguished software company, excels in delivering comprehensive Business Research Services. Our dedicated team leverages sophisticated methodologies and advanced analytical tools to provide in-depth insights that empower businesses to make informed decisions. With a commitment to precision and thoroughness, we conduct exhaustive market research, competitor analysis, and industry trends evaluation.
                    Our Business Research Services extend beyond data gathering, encompassing strategic analysis to unveil growth opportunities and potential risks. We pride ourselves on delivering actionable recommendations that contribute to our clients' strategic planning and overall success. Whether it's understanding consumer behavior, identifying market gaps, or assessing the competitive landscape, Sign Infosoft employs a holistic approach to ensure the highest quality of research outcomes.
                    In a rapidly evolving business landscape, our agility and adaptability enable us to stay ahead of industry shifts, offering real-time insights that foster innovation and resilience. Through meticulous data interpretation, we transform raw information into valuable knowledge, enabling businesses to stay competitive and responsive to market dynamics.
                    At Sign Infosoft, our Business Research Services are not just about information; they're about facilitating strategic growth, enhancing operational efficiency, and fostering a culture of informed decision-making. We are dedicated to being a trusted partner on the journey to success, providing unparalleled research services that empower businesses to navigate complexities and thrive in their respective industries.`,
        One_liner: "Analyze market dynamics, competitor landscapes, and emerging trends to adapt, compete, and thrive in a rapidly changing business environment.",
        icon: FaSearchDollar,
        row: "row-reverse",
        img: require("../Images/Services/Research/business-plan-concept-illustration_114360-1450.png")
    },
    {
        service: "Social Media Monitoring Services",
        content: `Sign Infosoft is a leading software company specializing in Social Media Monitoring Services, providing businesses with robust solutions to navigate the dynamic landscape of online interactions. Leveraging advanced technologies, we offer comprehensive monitoring tools that allow organizations to gain real-time insights into their social media presence. Our services encompass the tracking of brand mentions, sentiment analysis, and competitor activity, enabling clients to make data-driven decisions.
                    With a focus on accuracy and depth, Sign Infosoft's Social Media Monitoring Services go beyond surface-level analytics. We delve into the nuances of online conversations, identifying trends, sentiments, and key influencers. Our dedicated team of professionals ensures that clients receive actionable intelligence to enhance their online strategies.
                    Whether it's managing brand reputation, tracking marketing campaigns, or staying ahead of industry trends, our Social Media Monitoring Services empower businesses to proactively engage with their audience. By staying attuned to the pulse of social media platforms, Sign Infosoft helps clients foster meaningful connections, mitigate risks, and capitalize on emerging opportunities in the digital realm.
                    In a world where social media plays a pivotal role in shaping perceptions and driving decisions, Sign Infosoft is your trusted partner, providing cutting-edge solutions to navigate and harness the vast landscape of social media effectively.`,
        One_liner: "Use cutting-edge tools to track brand sentiment, market trends, and consumer conversations to respond effectively and nurture relationships.",
        icon: TiSocialFacebookCircular,
        row: "row",
        img: require("../Images/Services/Research/social-dashboard-concept-illustration_114360-1589.png")
    },
    {
        service: "Medical Writing Services",
        content: `Sign Infosoft, a leading software company, stands as a premier provider of Medical Writing Services. Leveraging our deep understanding of the healthcare domain, we offer a comprehensive suite of writing services tailored to the specific needs of the medical and pharmaceutical industries.
                    Our team of experienced medical writers possesses the expertise to create clear, accurate, and compliant documents that meet the stringent standards of the medical and scientific community. Whether it's clinical study reports, regulatory submissions, or scientific publications, Sign Infosoft ensures that all content is meticulously researched, organized, and presented.
                    With a commitment to excellence, we prioritize adherence to industry guidelines, ensuring that our clients' documents are not only informative but also aligned with the latest regulatory requirements. We understand the critical importance of precision in medical writing, where accuracy can impact patient safety, regulatory compliance, and overall success in the highly regulated healthcare landscape.
                    At Sign Infosoft, we go beyond conventional medical writing by offering a collaborative approach that involves close communication with clients. This ensures that our services align seamlessly with their objectives, contributing to the overall success of their projects and initiatives in the dynamic and evolving field of healthcare.`,
        One_liner: "Our skilled writers craft clear, accurate, and engaging content that distills complex medical information into accessible formats.",
        icon: CiMedicalClipboard,
        row: "row-reverse",
        img: require("../Images/Services/Research/medical-prescription-concept-illustration_114360-6755.png")
    }
]
function Research() {
    const Service = (values) => {
        // eslint-disable-next-line no-unused-vars
        const [data, SetData] = useState({
            service: values.service,
            content:values.content
        });
        return (
            <div className="box" style={{ alignItems: `center`, justifyContent: `space-around`, flexDirection: values.row }}>
                <div>
                    <img src={values.img} alt="img" height="300px" width="100%" />
                </div>
                <div className="" style={{flexGrow: `0` }}>
                    <div class="card h-100 auto-align" style={{ width: `18rem` }}>
                        <span style={{ textAlign: `center` }}>
                            <button style={{ textAlign: `center`, width: `4em`, borderRadius: `10px`, backgroundColor: `#99f2e2` }}>
                                <values.icon style={{ fontSize: `2rem` }} />
                            </button>
                        </span>
                        <h6 class="card-title" style={{ fontSize: `1.5rem`, textAlign: `center`, marginTop: `15px` }}>{values.service}</h6>
                        <p class="card-text">{values.One_liner}</p>
                        <Link className="mt-auto" to="/Detail" state={{ data: data }} >
                            <button style={{ borderRadius: `2em`, padding: `.5em 1.5em`, height: `auto` }} >Learn More</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <>
            <div style={{  }}>
                <h2 className="Top"  style={{ textAlign: `center` }}>Research and Analysis Solution</h2>
                <p style={{ margin: `30px 15px` }}>
                    Sign Infosoft excels in Research and Analysis Solutions, providing businesses with invaluable insights and strategic intelligence. Leveraging advanced analytics, machine learning, and data visualization, they empower clients to make informed decisions and stay ahead in competitive markets. Their dedicated team employs cutting-edge technologies to sift through vast datasets, identifying trends, patterns, and potential opportunities. From market research to competitor analysis, Sign Infosoft tailors solutions to meet specific business goals. With a commitment to precision and relevance, they contribute to enhancing operational efficiency and driving growth. By harnessing the power of data, Sign Infosoft ensures that businesses are equipped with the knowledge needed to navigate complexities and make strategic decisions that positively impact their bottom line.
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
export default Research;