import { useState } from "react"
import { Link } from "react-router-dom";
import { RiBillLine } from "react-icons/ri";
import { LiaFileCode } from "react-icons/lia";
import { MdVerifiedUser } from "react-icons/md";
import { LuFileAudio2 } from "react-icons/lu";
import { MdAccountBalanceWallet } from "react-icons/md";
import { LuFileType2 } from "react-icons/lu";

let data1 = [
    {
        service: "Medical Billing Services",
        content:`Sign Infosoft, a leading software company, is at the forefront of delivering exceptional Medical Billing Services. Our dedicated team ensures accuracy, efficiency, and compliance in managing the intricate process of medical billing. With a commitment to streamlining healthcare revenue cycles, we offer comprehensive services that encompass billing, coding, claims submission, and revenue realization.
                    Our advanced technology solutions integrate seamlessly with healthcare providers' systems, facilitating a smooth and transparent billing workflow. Through meticulous attention to detail, we navigate the complex landscape of medical codes, ensuring precise coding that meets industry standards.
                    At Sign Infosoft, we prioritize compliance with evolving healthcare regulations, safeguarding the financial interests of our clients. Our seasoned professionals possess in-depth knowledge of medical billing intricacies, enabling us to resolve issues promptly and optimize reimbursement processes.
                    As a trusted partner to healthcare providers, we go beyond conventional billing services, offering strategic insights to improve overall revenue performance. Our client-centric approach focuses on building long-term relationships, and our commitment to excellence has established Sign Infosoft as a reliable authority in the realm of Medical Billing Services.`,
        One_liner:"Leverage advanced billing tools and software to minimize billing time and enhance billing accuracy with our proficient medical billing services.",
        icon:RiBillLine,
        row:"row",
        img:require("../Images/Services/Healthcare/medical-prescription-concept-illustration_114360-6595.png")
    },
    {
        service: "Medical Coding Services",
        content: `Sign Infosoft is a distinguished software company that stands at the forefront of excellence, offering unparalleled Medical Coding Services. With a commitment to precision and efficiency, we bring a wealth of experience to the healthcare sector. Our expert team of professionals is dedicated to ensuring the accurate transformation of complex medical documentation into standardized codes, adhering to industry regulations and compliance standards.
                        At Sign Infosoft, we understand the critical role that medical coding plays in the healthcare ecosystem. We streamline the coding process, optimizing it for accuracy and reliability. Through our services, healthcare providers experience enhanced documentation, simplified billing, and improved revenue cycles.
                        We leverage cutting-edge technologies and industry best practices to deliver solutions that align seamlessly with the evolving landscape of healthcare. Our focus on quality extends beyond coding itself; it encompasses comprehensive support services, ensuring our clients experience a holistic and dependable partnership.
                        By choosing Sign Infosoft for Medical Coding Services, clients benefit not only from our technical proficiency but also from a commitment to confidentiality and data security. We empower healthcare organizations to navigate the complexities of coding with confidence, contributing to improved patient care and operational excellence. Sign Infosoft emerges as a trusted ally, delivering transformative solutions that elevate the standards of medical coding in the healthcare industry.`,
        One_liner: "Accelerate claims processing, minimize claims denials, and increase reimbursements with our quick, accurate, and compliant medical coding services.",
        icon: LiaFileCode,
        row: "row-reverse",
        img: require("../Images/Services/Healthcare/online-doctor-concept-illustration_114360-1831.png")
    },
    {
        service: "Insurance Eligibility Verification Services",
        content: `Sign Infosoft, a distinguished software company, excels in offering Insurance Eligibility Verification Services. With a steadfast commitment to optimizing healthcare operations, our services streamline the intricate process of verifying insurance eligibility. We leverage advanced technologies and a team of skilled professionals to ensure accurate and timely verification, alleviating the administrative burden for healthcare providers.
                    Our comprehensive approach encompasses a thorough examination of insurance coverage details, confirming patient eligibility, policy status, and coverage benefits. By employing sophisticated software solutions, we enable healthcare facilities to enhance efficiency, reduce errors, and minimize claim denials. This, in turn, contributes to improved revenue cycles and overall operational excellence.
                    Sign Infosoft understands the critical role that insurance eligibility verification plays in the healthcare ecosystem. Our services not only enhance the financial health of healthcare providers but also contribute to an elevated standard of patient care. With a focus on precision and adherence to industry standards, we provide reliable and scalable eligibility verification solutions that cater to the unique needs of healthcare organizations. Partnering with Sign Infosoft ensures a seamless and reliable insurance verification process, empowering healthcare providers to focus on delivering optimal patient outcomes.`,
        One_liner: "Ensure mortgage transactions are secure and compliant with our accurate Insurance Eligibility Verification Services.",
        icon: MdVerifiedUser,
        row: "row",
        img: require("../Images/Services/Healthcare/insurance-concept-illustration_114360-2223.png")
    },
    {
        service: "Medical Transcription Services",
        content: `Sign Infosoft, a leading software company, excels in providing unparalleled Medical Transcription Services. Our commitment to accuracy and confidentiality sets us apart in the healthcare industry. With a dedicated team of skilled professionals, we transcribe medical records, dictations, and other critical documents with precision.
                    At Sign Infosoft, we understand the importance of delivering timely and error-free transcriptions in the healthcare sector. Our services cater to a diverse range of medical specialties, ensuring that every transcription meets the highest standards of quality. We leverage advanced technologies and industry best practices to streamline the transcription process, contributing to efficient healthcare documentation.
                    As a trusted partner, Sign Infosoft prioritizes compliance with healthcare regulations and standards. Our team undergoes rigorous training to stay updated on medical terminologies and maintain the confidentiality of sensitive patient information. Clients can rely on us for accurate, secure, and timely medical transcriptions, facilitating seamless communication and record-keeping within the healthcare ecosystem.
                    With a customer-centric approach, Sign Infosoft is dedicated to providing cost-effective and reliable Medical Transcription Services. Our goal is to empower healthcare professionals with precise documentation, allowing them to focus on delivering high-quality patient care without the burden of administrative complexities.`,
        One_liner: "Transcribe patient records and other healthcare documents accurately to enhance collaboration and improve care with our medical transcription services.",
        icon: LuFileAudio2,
        row: "row-reverse",
        img: require("../Images/Services/Healthcare/online-doctor-concept-illustration_114360-1783.png")
    },
    {
        service: "Medical Accounts Receivable Services",
        content: `Sign Infosoft, a distinguished software company, excels in providing Medical Accounts Receivable Services that redefine financial management in the healthcare sector. Our comprehensive suite of services is meticulously designed to streamline and optimize the revenue cycle, ensuring healthcare organizations achieve peak financial performance.
                    Navigating the intricacies of medical billing and accounts receivable, Sign Infosoft offers a strategic approach to accelerate cash flow and minimize revenue leakage. Our seasoned team of professionals leverages industry insights and cutting-edge technology to facilitate accurate billing, prompt reimbursement, and efficient claims processing.
                    We understand the critical importance of maintaining financial health for healthcare providers. With a commitment to excellence, Sign Infosoft ensures adherence to industry standards, compliance with regulations, and the highest levels of data security. Our tailored solutions empower healthcare organizations to focus on patient care while entrusting us with the complexities of revenue management.
                    At Sign Infosoft, we pride ourselves on fostering lasting partnerships with healthcare entities, providing not just a service but a strategic ally in their financial success. With our Medical Accounts Receivable Services, we pave the way for healthcare providers to thrive in a financially sustainable and patient-centric environment.`,
        One_liner: "Ensures efficient claims processing, accurate billing, and swift follow-up, resulting in maximized reimbursements.",
        icon: MdAccountBalanceWallet,
        row: "row",
        img: require("../Images/Services/Healthcare/online-tax-concept-illustration_114360-16043.png")
    },
    {
        service: "Medical Data Entry Services",
        content: `Sign Infosoft, a leading software company, is at the forefront of delivering high-quality Medical Data Entry Services. Our dedicated team ensures meticulous and accurate handling of medical data, supporting healthcare professionals in their critical operations. With a commitment to precision, we undertake the responsibility of entering vast volumes of medical information, ranging from patient records to diagnostic reports.
                    In the dynamic healthcare landscape, our services play a pivotal role in maintaining an organized and accessible database, facilitating seamless workflows for medical practitioners and institutions. We understand the sensitivity of medical data and adhere to strict security protocols, ensuring confidentiality and compliance with industry regulations.
                    Our comprehensive Medical Data Entry Services cover a spectrum of tasks, including patient demographics, treatment histories, and billing information. By leveraging cutting-edge technologies and robust quality control measures, we strive to exceed client expectations in accuracy and turnaround time.
                    At Sign Infosoft, we recognize the importance of streamlined data entry in enhancing healthcare delivery. Our solutions contribute to reduced administrative burdens, allowing medical professionals to focus on providing optimal patient care. With a client-centric approach, we tailor our services to meet the unique needs of healthcare providers, fostering a partnership built on reliability, efficiency, and data integrity.`,
        One_liner: "Our expert team ensures meticulous entry and organization of patient records while maintaining data integrity.",
        icon: LuFileType2,
        row: "row-reverse",
        img: require("../Images/Services/Healthcare/medicine-concept-illustration_114360-4119.png")
    }
];
function Healthcare() {
    const Service = (values) => {
        // eslint-disable-next-line no-unused-vars
        const [data, SetData] = useState({
            service: values.service,
            content:values.content
        });
        return (
            <div className="box" style={{ alignItems: `center`, justifyContent: `space-around`, flexDirection: values.row }}>
                <div>
                    <img src={values.img} alt="img" height="300px" width="auto" />
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
            <div style={{}}>
                <h2 className="Top" style={{ textAlign: `center` }}>Healthcare BPO</h2>
                <p style={{ margin: `30px 15px` }}>
                    Sign Infosoft excels in Healthcare BPO, offering comprehensive services to streamline and enhance healthcare operations. Their specialized solutions cover medical billing, coding, claims processing, and revenue cycle management. With a dedicated team well-versed in healthcare regulations and industry standards, Sign Infosoft ensures accuracy and compliance in every aspect of BPO services. They prioritize data security, leveraging advanced technologies to safeguard sensitive healthcare information. Through efficient process management, Sign Infosoft contributes to cost reduction and improved revenue realization for healthcare providers. Whether managing administrative tasks or optimizing back-office functions, Sign Infosoft's Healthcare BPO services aim to elevate operational efficiency, allowing healthcare professionals to focus on delivering quality patient care. With a commitment to excellence, Sign Infosoft stands as a trusted partner in the evolving landscape of healthcare outsourcing.
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
export default Healthcare;