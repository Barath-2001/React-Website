import { useState } from "react"
import { Link } from "react-router-dom"
import { BsBank } from "react-icons/bs";
import { PiNotePencilBold } from "react-icons/pi";
import { TbHomeDollar } from "react-icons/tb";
import { GiShakingHands } from "react-icons/gi";

let data1 = [
    {
        service: "Mortgage Loan Processing Support Services",
        content:`Sign Infosoft is a leading software company at the forefront of providing specialized Mortgage Loan Processing Support Services. Our comprehensive suite of services is meticulously designed to meet the unique demands of the mortgage industry, ensuring streamlined and efficient loan processing. We understand the critical nature of mortgage operations and strive to enhance the overall workflow for our clients.
                With a dedicated focus on precision and compliance, Sign Infosoft offers end-to-end support throughout the mortgage loan processing lifecycle. From document verification and validation to data entry and analysis, our skilled professionals bring a wealth of experience to ensure accuracy and reliability at every stage.
                Our commitment to client satisfaction is reflected in our tailored solutions that address the specific needs of each client. Whether it's expediting loan approvals, managing documentation, or navigating regulatory requirements, Sign Infosoft is poised to deliver results that drive operational excellence.
                By leveraging cutting-edge technology and industry best practices, we empower mortgage businesses to navigate the complexities of loan processing with ease. Our team of experts is committed to fostering a seamless and efficient experience for our clients, allowing them to focus on their core business while we handle the intricacies of mortgage loan processing support.`,
        One_liner:"With our support services, you can reduce processing times and operational overheads. We help you expedite the borrower's application through the system and towards closing.",
        icon: BsBank,
        row:"row",
        img:require("../Images/Services/Mortgage/mortgage-concept-illustration_114360-17866.png")

    },
    {
        service: "Mortgage Underwriting Services",
        content: `Sign Infosoft is a leading software company at the forefront of revolutionizing the mortgage industry through its comprehensive Mortgage Underwriting Services. With a dedicated focus on accuracy, efficiency, and compliance, our services are designed to streamline and enhance the underwriting process for mortgage lenders. Our team of skilled professionals employs cutting-edge technology and industry best practices to deliver thorough and reliable underwriting solutions.
                    At Sign Infosoft, we understand the critical role of mortgage underwriting in ensuring the stability and success of lending institutions. We offer a range of services that cover the entire spectrum of underwriting tasks, including risk assessment, credit analysis, income verification, and property evaluation. Our tailored solutions cater to the unique needs of each client, providing a seamless and efficient underwriting experience.
                    As a trusted partner in the mortgage industry, Sign Infosoft is committed to maintaining the highest standards of data security and confidentiality. Our comprehensive approach to Mortgage Underwriting Services empowers lenders with the insights needed to make informed decisions, minimize risks, and ultimately drive the success of their mortgage operations. With a dedication to innovation and excellence, Sign Infosoft continues to redefine and elevate the standards of mortgage underwriting services in the ever-evolving landscape of the financial industry.`,
        One_liner: "We can help you reduce underwriting costs with same-day underwriting decision turnaround time. Our experienced and skilled mortgage underwriters guarantee speed, accuracy, and efficiency.",
        icon: PiNotePencilBold,
        row: "row-reverse",
        img: require("../Images/Services/Mortgage/signing-contract-concept-illustration_114360-4909.png")
    },
    {
        service: "Mortgage Loan Servicing",
        content: `Sign Infosoft, a distinguished software company, is at the forefront of revolutionizing Mortgage Loan Servicing. With a relentless commitment to excellence, we offer a comprehensive suite of solutions to streamline and elevate the mortgage industry's operational landscape. Our cutting-edge software seamlessly integrates into the complex web of loan servicing, providing a robust platform for managing, processing, and optimizing mortgage-related tasks.
                    At Sign Infosoft, we recognize the critical role that Mortgage Loan Servicing plays in the financial sector. Our software solutions are meticulously crafted to enhance efficiency, accuracy, and compliance throughout the loan lifecycle. We empower lenders and financial institutions with intuitive tools for loan origination, payment processing, escrow management, and investor reporting.
                    By leveraging innovative technologies, we ensure that our Mortgage Loan Servicing software remains agile and adaptive to the evolving needs of the industry. Sign Infosoft's commitment to client success is evident in our user-friendly interfaces, seamless integrations, and the ability to scale with the growing demands of any mortgage servicing operation.
                    In a landscape where precision and compliance are paramount, Sign Infosoft stands as a trusted partner, providing advanced software solutions that redefine Mortgage Loan Servicing and drive operational excellence.`,
        One_liner: "We offer mortgage loan servicing solutions where we collect mortgage payments on your behalf, ensure that the collections are accurate, and manage related processes.",
        icon: TbHomeDollar,
        row: "row",
        img: require("../Images/Services/Mortgage/housing-prices-rise-concept-illustration_114360-20098.png")
    },
    {
        service: "Mortgage Closing Support Services",
        content: `Sign Infosoft is a leading software company dedicated to providing specialized Mortgage Closing Support Services. Our comprehensive suite of services caters specifically to the intricate needs of the mortgage industry, ensuring a seamless and efficient closing process. Leveraging cutting-edge technology and a team of seasoned professionals, we excel in delivering end-to-end support, from document preparation to final closing.
                    With a deep understanding of the regulatory landscape and industry best practices, Sign Infosoft stands as a trusted partner for mortgage lenders, brokers, and financial institutions. Our robust support services encompass a spectrum of tasks, including meticulous review of loan documentation, compliance checks, and coordination with all stakeholders involved in the closing process.
                    We prioritize accuracy and attention to detail in every aspect of mortgage closing support. By streamlining workflows and embracing innovative solutions, we empower our clients to navigate the complexities of the closing phase with confidence. Our commitment to excellence and customer satisfaction underscores our position as a reliable choice for those seeking top-tier Mortgage Closing Support Services in the dynamic landscape of the financial industry.`,
        One_liner: "We provide expert back-office assistance for all the stages of your mortgage closing process. With our reliable services, you can ensure accuracy and save time and resources.",
        icon: GiShakingHands,
        row: "row-reverse",
        img: require("../Images/Services/Mortgage/sale-concept-illustration_114360-201.png")
    }
]
function Mortgage() {
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
                <h2 className="Top" style={{ textAlign: `center` }}>Mortgage Support</h2>
                <p style={{ margin: `30px 15px` }}>
                Sign Infosoft excels in providing comprehensive mortgage services, catering to the diverse needs of individuals and businesses. With a focus on efficiency and client satisfaction, the company offers end-to-end mortgage solutions, including loan origination, processing, underwriting, and closing services. Leveraging advanced technologies, Sign Infosoft ensures a streamlined and secure mortgage process, reducing complexities and turnaround times. The team's expertise extends to compliance management, risk mitigation, and seamless integration of digital tools for a more accessible and transparent mortgage experience. Whether it's refinancing, loan modification, or new mortgage applications, Sign Infosoft combines industry knowledge with innovative solutions, making them a trusted partner in navigating the intricate landscape of mortgage services.
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
export default Mortgage;