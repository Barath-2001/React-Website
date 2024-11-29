import { useState } from "react"
import { Link } from "react-router-dom"
import { FaFileInvoiceDollar } from "react-icons/fa";
import { IoMdPeople } from "react-icons/io";
import { MdOutlinePayment } from "react-icons/md";
import { AiOutlineAudit } from "react-icons/ai";
import { FaTruckLoading } from "react-icons/fa";
import { TbArrowsRandom } from "react-icons/tb";
import { GrCloudSoftware } from "react-icons/gr";

let data1 = [
    {
        service: "Bill of Lading Generation",
        content:`Sign Infosoft, a leading software company, takes pride in its expertise in Bill of Lading Generation, offering innovative solutions that streamline and automate the complex process of creating shipping documentation. With a focus on efficiency and accuracy, we empower businesses involved in logistics and supply chain management. Our specialized software ensures a seamless and error-free generation of Bills of Lading, a critical document in international trade.
                    Our solution is designed to meet the unique needs of various industries, facilitating quick and precise documentation to support the smooth flow of goods. Through cutting-edge technology, Sign Infosoft brings simplicity to a traditionally intricate process, enabling users to generate Bills of Lading effortlessly. This not only enhances operational efficiency but also contributes to reducing errors and mitigating risks associated with manual documentation.
                    At Sign Infosoft, we understand the significance of timely and accurate documentation in the shipping industry. Our Bill of Lading Generation software reflects our commitment to providing robust tools that simplify logistics processes, ensuring that businesses can focus on what matters most – delivering goods globally with confidence and compliance.`,
        One_liner:"",
        icon: FaFileInvoiceDollar,
        row:"row",
        img:require("../Images/Services/Logistic/bill-analysis-concept-illustration_114360-16349_1.png")
    },
    {
        service: "Customer Relationship Management",
        content: `Sign Infosoft, a dynamic software company, excels in delivering sophisticated Customer Relationship Management (CRM) solutions. We take pride in our ability to empower businesses with tools that foster enhanced customer interactions and bolster overall operational efficiency. Our CRM services are meticulously crafted to address the diverse needs of modern enterprises, providing a comprehensive platform for managing and nurturing customer relationships.
                    At Sign Infosoft, our approach to CRM is rooted in understanding the unique requirements of each client. We go beyond conventional CRM functionalities, tailoring solutions to align seamlessly with specific business objectives. Our expert team harnesses the power of cutting-edge technologies to implement, customize, and integrate CRM systems that drive tangible results.
                    Through our CRM services, businesses can streamline their sales processes, gain deeper insights into customer behavior, and cultivate lasting relationships. We prioritize user-friendly interfaces, ensuring that our CRM solutions are intuitive and accessible to all levels of staff. Sign Infosoft is committed to elevating customer experiences, facilitating data-driven decision-making, and ultimately contributing to the sustained success of our clients in an ever-evolving business landscape.`,
        One_liner: "",
        icon: IoMdPeople,
        row: "row-reverse",
        img: require("../Images/Services/Logistic/partnership-concept-illustration_114360-5994_1.png")
    },
    {
        service: "Freight Payment Processing",
        content: `Sign Infosoft, a distinguished software company, excels in delivering unparalleled Freight Payment Processing solutions. With a profound understanding of the logistics industry's intricacies, we have curated a robust suite of services to streamline and optimize the financial aspects of freight management.
                    Our Freight Payment Processing services are designed to meet the dynamic needs of businesses engaged in the transportation and logistics sectors. By leveraging cutting-edge technologies and industry best practices, we empower organizations to manage their payment workflows efficiently, ensuring accuracy, transparency, and compliance.
                    At Sign Infosoft, our team of experienced professionals is committed to providing comprehensive solutions that address the unique challenges associated with freight payment processing. We facilitate seamless invoice validation, automated payment processing, and meticulous auditing to eliminate discrepancies and enhance financial accuracy.
                    Our commitment to innovation is reflected in our adaptable and scalable solutions, catering to businesses of all sizes. Through advanced analytics and reporting functionalities, we enable our clients to gain valuable insights into their financial transactions, promoting informed decision-making and strategic planning.
                    With Sign Infosoft as your trusted partner, experience a transformative approach to Freight Payment Processing that not only simplifies complex financial workflows but also drives operational efficiency and cost savings within your logistics operations.`,
        One_liner: "",
        icon: MdOutlinePayment,
        row: "row",
        img: require("../Images/Services/Logistic/fitting-piece-concept-illustration_114360-5546.png")
    },
    {
        service: "Freight Payment & Pre-audit",
        content: `Sign Infosoft, a dynamic software company, offers a specialized suite of services with a primary focus on Freight Payment & Pre-audit solutions. Our cutting-edge software is meticulously designed to streamline and optimize the complex processes involved in freight management. With a commitment to excellence, we empower businesses to enhance their supply chain efficiency and reduce operational costs through meticulous pre-audit procedures.
                    Our Freight Payment system stands as a testament to innovation, providing clients with a robust platform to manage and audit their freight expenses. By leveraging advanced technologies, we ensure accuracy, transparency, and compliance with industry standards. This results in a seamless financial workflow, allowing businesses to allocate resources more strategically and make informed decisions.
                    At Sign Infosoft, we prioritize the unique needs of our clients, offering tailored solutions that address the intricacies of the logistics industry. Our comprehensive approach to Freight Payment & Pre-audit reflects our dedication to delivering not just software, but a transformative solution that contributes to the overall success of our clients' supply chain operations. As a trusted partner, Sign Infosoft is committed to pushing the boundaries of innovation and efficiency in the realm of freight management.`,
        One_liner: "",
        icon: AiOutlineAudit,
        row: "row-reverse",
        img: require("../Images/Services/Logistic/barcode-concept-illustration_114360-6802.png")
    },
    {
        service: "Freight Payment & Post-audit",
        content: `Sign Infosoft is a dynamic software company dedicated to revolutionizing logistics and supply chain management through our unparalleled Freight Payment & Post-audit services. We leverage cutting-edge technology to streamline the intricate process of freight payments, offering an integrated and efficient solution for businesses across industries.
                    Our comprehensive Freight Payment & Post-audit services provide a meticulous examination of freight invoices, ensuring accuracy and compliance with agreed-upon terms. By meticulously scrutinizing each transaction, we identify discrepancies, overcharges, or billing errors, enabling our clients to achieve significant cost savings and maintain financial integrity.
                    At Sign Infosoft, we prioritize transparency and precision in our services. Our team of experts collaborates closely with clients to understand their unique requirements, tailoring our solutions to suit the specific needs of their supply chain. With our robust software platform, we facilitate seamless communication between stakeholders, reducing manual errors and optimizing the entire freight payment lifecycle.
                    In a rapidly evolving business landscape, Sign Infosoft stands as a reliable partner, empowering organizations to navigate the complexities of freight payment and post-audit with confidence. Our commitment to innovation, accuracy, and client satisfaction sets us apart as a leader in the realm of logistics software solutions.`,
        One_liner: "",
        icon: AiOutlineAudit,
        row: "row",
        img: require("../Images/Services/Logistic/accountant-concept-illustration_114360-5678.png")
    },
    {
        service: "Logistics for Trucking Companies",
        content: `Sign Infosoft, a distinguished software company, pioneers in providing comprehensive logistics solutions tailored specifically for trucking companies. Our specialized software suite is meticulously designed to address the unique challenges within the trucking industry, offering a holistic approach to streamline operations and boost overall efficiency.
                    Our logistics solutions for trucking companies encompass a wide array of functionalities, covering everything from route optimization and dispatch management to real-time tracking and reporting. Through advanced technology integration, we empower trucking businesses to enhance their decision-making processes, minimize costs, and maximize overall productivity.
                    At Sign Infosoft, we prioritize user-friendly interfaces and intuitive designs, ensuring that our logistics software is accessible to both experienced professionals and those new to the industry. Our commitment to innovation is reflected in features such as load planning, scheduling, and inventory management, providing trucking companies with the tools needed to navigate the complexities of the logistics landscape seamlessly.
                    Recognizing the dynamic nature of the trucking industry, Sign Infosoft remains dedicated to continuous improvement, staying abreast of emerging technologies to bring cutting-edge solutions to our clients. With a customer-centric approach, our logistics software not only meets the current needs of trucking companies but also adapts to future challenges, fostering long-term success and growth within the ever-evolving logistics sector.`,
        One_liner: "",
        icon: FaTruckLoading, 
        row: "row-reverse",
        img: require("../Images/Services/Logistic/accountant-concept-illustration_114360-5678.png")
    },
    {
        service: "Logistics Management Automation Software",
        content: `Sign Infosoft, a dynamic software company, takes pride in offering state-of-the-art Logistics Management Automation Software. Our innovative solution is meticulously designed to revolutionize the logistics industry, providing an integrated platform for efficient and streamlined operations.
                     With a focus on enhancing supply chain efficiency, our Logistics Management Automation Software optimizes every facet of the logistics process. From inventory management to order fulfillment, the platform ensures real-time visibility and control. This translates into reduced operational costs, improved delivery timelines, and heightened customer satisfaction.
                    One of the standout features of our software is its adaptability to diverse business models and sizes. Whether you are a small-scale operation or a large enterprise, our solution scales seamlessly to meet your specific logistics needs. The software facilitates end-to-end automation, allowing businesses to overcome operational challenges and respond proactively to market demands.
                    Sign Infosoft is dedicated to delivering a user-friendly experience, ensuring that businesses can easily integrate and navigate our Logistics Management Automation Software. Our commitment to innovation and client satisfaction positions us as a reliable partner in the evolution of logistics management.
                    In a competitive market, staying ahead requires embracing technology. Sign Infosoft's Logistics Management Automation Software is the gateway to a more efficient, agile, and competitive logistics ecosystem, empowering businesses to thrive in the rapidly evolving landscape.`,
        One_liner: "",
        icon: GrCloudSoftware,
        row: "row",
        img: require("../Images/Services/Logistic/warehouse-outside-concept-illustration_114360-15740.png")
    },
    {
        service: "Supply Chain Optimization Services",
        content: `Sign Infosoft, a leading software company, specializes in providing cutting-edge Supply Chain Optimization Services. With a keen focus on enhancing operational efficiency and reducing costs, our services are designed to streamline and optimize every aspect of the supply chain.
                    Through innovative technology solutions, we empower businesses to gain greater visibility and control over their supply chain processes. Our team of skilled professionals works collaboratively with clients to analyze their unique requirements, identify bottlenecks, and implement strategic optimizations.
                    From inventory management to demand forecasting, our comprehensive suite of services ensures a synchronized and responsive supply chain ecosystem. We leverage advanced analytics and automation to enhance decision-making processes, enabling businesses to adapt swiftly to dynamic market conditions.
                    Sign Infosoft goes beyond traditional supply chain management by incorporating intelligent technologies, such as AI and machine learning, to anticipate challenges and proactively address them. This forward-thinking approach not only minimizes disruptions but also positions our clients at the forefront of industry innovation.
                    Our commitment to excellence is reflected in our ability to deliver tailored solutions that align with the specific needs of each client. With Sign Infosoft, businesses can unlock the full potential of their supply chain, drive operational excellence, and gain a competitive edge in the ever-evolving global market.`,
        One_liner: "",
        icon: TbArrowsRandom,
        row: "row-reverse",
        img: require("../Images/Services/Logistic/automated-warehouse-concept-illustration_114360-22441.png")
    }
]
function Logistics() {
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
            <div style={{ }}>
                <h2 className="Top" style={{ textAlign: `center` }}>Logistics Service</h2>
                <p>
                    Providing seamless logistics solutions, our company excels in optimizing supply chain operations. With a commitment to efficiency, we offer a comprehensive range of services, including transportation, warehousing, and distribution. Leveraging cutting-edge technology, we ensure real-time visibility and traceability of shipments, enhancing overall transparency. Our dedicated team of logistics professionals is adept at streamlining processes, reducing costs, and minimizing lead times. From last-mile delivery solutions to global freight management, we tailor our services to meet the unique demands of each client. Emphasizing reliability and precision, our logistics service is designed to empower businesses with a competitive edge in today's dynamic market. Partner with us for a strategic approach to logistics, ensuring your products reach their destination seamlessly and on time.
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
export default Logistics;