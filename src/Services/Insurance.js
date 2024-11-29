import { useState } from "react"
import { Link } from "react-router-dom"
import { FaUmbrella } from "react-icons/fa6";
import { FaFileSignature } from "react-icons/fa";

let data1 = [
    {
        service: "Insurance Agency Back Office Support Services",
        content:`Sign Infosoft, a leading software company, stands as a trusted provider of comprehensive Insurance Agency Back Office Support Services. With a deep commitment to innovation and excellence, we bring a suite of tailored solutions that empower insurance agencies to thrive in a dynamic and competitive landscape.
                    Our specialized services cover a wide spectrum, addressing the unique needs and challenges faced by insurance agencies. From meticulous data entry and policy management to seamless claims processing, our back-office support services ensure accuracy and efficiency in every operation.
                    At Sign Infosoft, we understand the critical role that back-office operations play in the success of an insurance agency. Our dedicated team of professionals is adept at handling complex tasks, enabling agencies to focus on core business functions and client relationships. We leverage cutting-edge technology and industry best practices to streamline workflows, reduce operational costs, and enhance overall productivity.
                    In addition to our operational prowess, we prioritize data security and confidentiality, implementing robust measures to safeguard sensitive information. By choosing Sign Infosoft for Insurance Agency Back Office Support Services, agencies not only gain a strategic partner but also unlock opportunities for sustained growth and success in the competitive insurance industry.`,
        One_liner:"We offer the best-in-class back-office support to insurance agencies. By outsourcing insurance BPO services to us, our clients can delegate resource-consuming processes like data management, sourcing, sorting, processing, and analysis.",
        icon: FaUmbrella,
        row:"row",
        img:require("../Images/Services/Insurance/office-work-concept-illustration_114360-9187.png")
    },
    {
        service: "Insurance Back Office Services for Agencies",
        content: `Sign Infosoft is a distinguished software company offering specialized Insurance Back Office Services for agencies. We pride ourselves on delivering comprehensive and tailored solutions to meet the unique needs of insurance agencies. With a deep understanding of the intricacies of the insurance industry, our dedicated team provides robust back-office support to streamline operations and enhance overall efficiency.
                    Our services cover a broad spectrum, including policy management, claims processing, underwriting support, and premium calculations. We leverage advanced technologies and industry best practices to ensure accuracy, compliance, and timely execution of tasks. By outsourcing back-office functions to Sign Infosoft, insurance agencies can focus on their core competencies, driving growth and client satisfaction.
                    Our team of experts is committed to maintaining the highest standards of data security and confidentiality, safeguarding sensitive information throughout the entire process. This commitment, coupled with our agile and client-centric approach, positions Sign Infosoft as a trusted partner in the insurance sector. We enable agencies to adapt to market dynamics, reduce operational costs, and stay ahead in a competitive landscape.
                    At Sign Infosoft, we envision a future where insurance agencies can thrive by leveraging our cutting-edge technology and seamless back-office support, ultimately achieving unparalleled success in the dynamic insurance marketplace.`,
        One_liner: "Handle policy administration, claims processing, and data entry, ensuring accuracy, compliance, and seamless workflows.",
        icon: FaUmbrella,
        row: "row-reverse",
        img: require("../Images/Services/Insurance/shared-workspace-concept-illustration_114360-5189.png")
    },
    {
        service: "Insurance BPO Services for Carriers",
        content: `Sign Infosoft stands as a leading software company, offering distinguished Insurance BPO Services catered specifically for carriers. In the dynamic landscape of the insurance industry, our tailored solutions ensure that carriers experience streamlined and efficient operations. We bring a wealth of experience to the table, understanding the unique challenges and demands of insurance carriers in today's competitive market.
                    Our comprehensive suite of services is designed to address various facets of the insurance business, covering everything from claims processing to policy administration. Through meticulous data management and analytics, we facilitate accurate and timely decision-making for carriers, empowering them to navigate complex insurance landscapes with confidence.
                    At Sign Infosoft, we prioritize precision and efficiency in every aspect of our Insurance BPO Services. Our team of dedicated professionals collaborates closely with carriers, providing personalized support to enhance overall operational efficiency. We aim to not only meet but exceed the expectations of carriers, ensuring that our services contribute significantly to their growth and success in the insurance domain.
                    With a commitment to innovation and excellence, Sign Infosoft is your trusted partner in navigating the intricacies of insurance operations, providing carriers with the tools and support needed to thrive in an ever-evolving industry.`,
        One_liner: "Lower operational costs and establish competitive pricing by choosing us as your insurance BPO service provider. We provide support services for policy issuance, policy renewals, policy checking, claims management, and loss run processing.",
        icon: FaFileSignature,
        row: "row",
        img: require("../Images/Services/Insurance/office-work-concept-illustration_114360-9187.png")
    },
    {
        service: "Insurance Back Office Management Services",
        content: `Sign Infosoft is a leading software company that excels in providing comprehensive Insurance Back Office Management Services. With a focus on innovation and efficiency, our dedicated team ensures seamless operations and strategic support for insurance-related processes.
                    Our Insurance Back Office Management Services encompass a wide range of tasks, from policy administration to claims processing. We understand the dynamic nature of the insurance industry and tailor our services to meet the evolving needs of our clients. Through meticulous data management and advanced technology solutions, we optimize workflows, resulting in improved accuracy and quicker turnaround times.
                    At Sign Infosoft, we prioritize data security and confidentiality, adhering to industry standards and compliance requirements. Our robust systems and protocols ensure that sensitive information is handled with the utmost care, providing our clients with peace of mind.
                    Collaborating with Sign Infosoft means gaining a reliable partner committed to enhancing the overall efficiency of insurance operations. We leverage our technical expertise and industry knowledge to empower insurance companies to focus on their core business while we handle the intricacies of back-office management.
                    With a proven track record of successful implementations and satisfied clients, Sign Infosoft stands as a trusted provider of Insurance Back Office Management Services, contributing to the sustained growth and success of insurance businesses.`,
        One_liner: "We are an ISO-certified insurance BPO services company with a rich domain experience. From policy approval to error detection, BU assistance, timely document update, and policy monitoring --- we provide end-to-end support services to MGAs.",
        icon: FaUmbrella,
        row: "row-reverse",
        img: require("../Images/Services/Insurance/shared-workspace-concept-illustration_114360-5189.png")
    }
]
function Insurance() {
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
                <div className="auto-align auto-align" style={{flexGrow: `0` }}>
                    <div class="card h-100" style={{ width: `18rem` }}>
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
            <div style={{ }}>
                <h2 className="Top" style={{ textAlign: `center` }}>Insurance BPO</h2>
                <p style={{ margin: `30px 15px` }}>
                    Sign Infosoft Insurance BPO stands as a trusted partner in the insurance industry, offering comprehensive outsourcing solutions. With a focus on efficiency and accuracy, Sign Infosoft provides a suite of BPO services tailored to meet the unique demands of insurance companies. Their expert team excels in claims processing, policy administration, underwriting support, and customer service. Leveraging advanced technologies and industry best practices, Sign Infosoft ensures streamlined operations, reduced costs, and improved customer satisfaction for their clients. Whether handling complex policy management tasks or enhancing the overall operational workflow, Sign Infosoft Insurance BPO is dedicated to delivering top-notch services that empower insurance companies to thrive in a competitive landscape while maintaining compliance and quality standards.
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
export default Insurance;