import { useState } from "react"
import { Link } from "react-router-dom"
import { LuFileInput } from "react-icons/lu";
import { FaBook } from "react-icons/fa6";
import { MdOutlineDocumentScanner } from "react-icons/md";
import { VscServerProcess } from "react-icons/vsc";
import { SiConvertio } from "react-icons/si";
import { LuFileScan } from "react-icons/lu";
import { IoIosFunnel } from "react-icons/io";
import { IoCloudOffline } from "react-icons/io5";

let data1 = [
    {
        service: " Data Entry Services",
        content:`Sign Infosoft is a distinguished software company offering top-notch Data Entry Services to meet the dynamic needs of modern businesses. With a profound commitment to accuracy and efficiency, we excel in providing comprehensive data entry solutions tailored to various industries.
                    Our skilled and experienced team employs advanced data entry techniques to ensure the highest level of precision in handling diverse datasets. Whether it's data from handwritten documents, forms, invoices, or digital sources, our professionals meticulously enter, organize, and manage the information, contributing to seamless business operations.
                    We understand the critical role data plays in decision-making, and our services go beyond mere data input. Sign Infosoft is dedicated to maintaining data integrity, consistency, and security throughout the entire data entry process. By leveraging cutting-edge technologies and adhering to industry best practices, we guarantee our clients receive accurate, timely, and reliable data entry services.
                    Our commitment to excellence extends to personalized client experiences. We collaborate closely with our clients to comprehend their unique requirements and tailor our data entry solutions accordingly. Sign Infosoft stands as a trusted partner for businesses seeking efficient, cost-effective, and scalable data entry services, empowering them to focus on their core operations while we handle their data with utmost proficiency and confidentiality.`,
        One_liner:"Efficient data entry services ensuring accuracy and timely processing for streamlined business operations.",
        icon: LuFileInput,
        row:"row",
        img:require("../Images/Services/DataService/online-document-concept-illustration_114360-5563.png")
    },
    {
        service: "eBooks Conversion Services",
        content: `Sign Infosoft, a leading software company, is dedicated to offering top-notch eBooks Conversion Services. With a strong commitment to excellence, our skilled professionals employ cutting-edge technologies to transform various document formats into versatile and user-friendly eBooks.
                    Our comprehensive service encompasses the conversion of diverse content types, including text documents, images, and multimedia elements, into interactive and visually engaging eBooks. We meticulously handle each project, ensuring the preservation of content integrity, formatting, and graphics. This meticulous approach guarantees that the final eBooks mirror the original documents seamlessly, maintaining the essence of the content.
                    Sign Infosoft stands out in the industry by providing flexible and scalable solutions tailored to the unique requirements of clients across different sectors. Whether it's converting educational materials, corporate documents, or literary works, our team ensures a swift and efficient conversion process.
                    Our dedication to quality extends beyond conversion, encompassing thorough quality checks and validations to deliver error-free and polished eBooks. We understand the importance of accessibility, and our services are designed to make content available on various platforms, contributing to a broader reach for our clients.
                    In essence, Sign Infosoft's eBooks Conversion Services combine technical expertise with a client-centric approach, empowering businesses and individuals to unlock the full potential of their content in the digital landscape.`,
        One_liner: "Convert your content into various eBook formats, enhancing accessibility and enabling broader distribution.",
        icon: FaBook,
        row: "row-reverse",
        img: require("../Images/Services/DataService/ebook-concept-illustration_114360-6612.png")
    },
    {
        service: "Document Digitization Services",
        content: `Sign Infosoft, a leading software company, specializes in Document Digitization Services, offering transformative solutions that usher businesses into the digital era. Our comprehensive services seamlessly convert traditional paper documents into digital formats, streamlining information management processes. With a commitment to efficiency and accuracy, Sign Infosoft employs cutting-edge technologies and industry-best practices in document scanning, image processing, and data extraction.
                    Our Document Digitization Services cater to diverse sectors, including finance, healthcare, legal, and more, facilitating a paperless environment and enabling quicker access to critical information. We prioritize data security, implementing robust measures to safeguard sensitive information throughout the digitization process.
                    Sign Infosoft understands the unique needs of each client and tailors our services accordingly. Whether dealing with historical archives, ongoing paperwork, or large-scale digitization projects, our skilled professionals ensure precision and adherence to project timelines. The transition from paper to digital not only enhances operational efficiency but also reduces the environmental impact associated with traditional document storage.
                    By choosing Sign Infosoft for Document Digitization Services, businesses unlock new possibilities for collaboration, data accessibility, and strategic decision-making. Embrace the future of document management with our reliable, cost-effective, and forward-thinking digitization solutions.`,
        One_liner: "Our advanced scanning and indexing techniques ensure a seamless transition from paper to digital, streamlining access, search, and storage.",
        icon: MdOutlineDocumentScanner,
        row: "row",
        img: require("../Images/Services/DataService/text-files-concept-illustration_114360-4044.png")
    },
    {
        service: "Data Processing Services",
        content: `Sign Infosoft is a distinguished software company offering top-notch Data Processing Services. With a relentless commitment to excellence, we bring unparalleled expertise in managing and transforming data to meet the evolving needs of modern businesses. Our dedicated team of professionals possesses in-depth knowledge and experience in the intricate art of data processing, ensuring accuracy, efficiency, and security throughout every stage of the process.
                    At Sign Infosoft, we understand the critical role that data plays in driving informed decision-making. Our comprehensive suite of data processing services encompasses data cleansing, validation, and enrichment, ensuring that your data remains reliable and up-to-date. Whether it's handling large datasets or managing intricate data structures, we leverage cutting-edge technologies and industry best practices to deliver solutions that exceed client expectations.
                    We take pride in our adaptability and agility, customizing our data processing services to align with the unique requirements of each client. From data entry and digitization to complex data analysis, our end-to-end solutions cater to diverse industries, fostering efficiency and promoting data-driven strategies. Sign Infosoft stands as a trusted partner in the realm of data processing, empowering businesses to harness the full potential of their data for strategic growth and sustainable success.`,
        One_liner: "Data processing is critical if you want to get the most out of your data. We make data processing easy so you can focus on higher-value tasks.",
        icon: VscServerProcess,
        row: "row-reverse",
        img: require("../Images/Services/DataService/data-analysis-concept-illustration_114360-8253.png")
    },
    {
        service: "Data Conversion Services",
        content: `Sign Infosoft, a distinguished software company, stands as a premier provider of comprehensive Data Conversion Services. Our unwavering commitment to excellence is reflected in our meticulous approach towards transforming diverse data formats into meaningful and usable information.
                    With a wealth of experience, we understand the critical role that accurate and accessible data plays in modern business operations. Leveraging cutting-edge technologies and a team of skilled professionals, we offer seamless conversion services tailored to the unique needs of our clients. Our adept team ensures a smooth transition between various data formats, including but not limited to document conversion, image conversion, and database conversion.
                    At Sign Infosoft, we prioritize precision and reliability in every step of the data conversion process. Our services encompass the conversion of data from physical documents, digital files, and legacy systems into standardized and modern formats. We meticulously validate and verify the integrity of the converted data, guaranteeing its accuracy and usability for informed decision-making.
                    Whether it's archiving historical records, upgrading systems, or facilitating interoperability between platforms, our Data Conversion Services empower businesses to unlock the full potential of their data. As a trusted partner, Sign Infosoft is dedicated to delivering solutions that enhance operational efficiency, reduce errors, and pave the way for sustained growth in an ever-evolving digital landscape.`,
        One_liner: "Data processing is critical if you want to get the most out of your data. We make data processing easy so you can focus on higher-value tasks.",
        icon: SiConvertio,
        row: "row",
        img: require("../Images/Services/DataService/data-processing-concept-illustration_114360-4420.png")
    },
    {
        service: "OCR Services",
        content: `Sign Infosoft is a dynamic software company at the forefront of technological innovation, offering exceptional Optical Character Recognition (OCR) services. Our dedicated team harnesses the power of OCR technology to transform printed or handwritten text into machine-readable data, providing businesses with a streamlined and efficient approach to data management.
                    Our OCR services cater to a diverse range of industries, addressing the growing need for automated data extraction and document processing. By leveraging advanced OCR algorithms, we enable organizations to extract valuable information from various sources, including scanned documents, images, and PDFs. This not only enhances data accuracy but also significantly reduces manual efforts and time-consuming data entry tasks.
                    At Sign Infosoft, we prioritize precision and scalability in our OCR solutions, ensuring that our clients receive accurate and scalable results. Whether it's automating invoice processing, extracting data from forms, or enhancing document search capabilities, our OCR services empower businesses to unlock the full potential of their data.
                    Committed to delivering excellence, Sign Infosoft stands as a trusted partner for organizations seeking cutting-edge OCR solutions that propel them toward enhanced productivity, improved data accuracy, and a competitive edge in today's rapidly evolving digital landscape.`,
        One_liner: "Our optical character recognition services are provided by a seasoned team of data processing specialists. Easily convert your data into digital formats.",
        icon: LuFileScan,
        row: "row-reverse",
        img: require("../Images/Services/DataService/editorial-commission-concept-illustration_114360-8930.png")
    },
    {
        service: "Data Extraction Services",
        content: `Sign Infosoft, a leading software company, excels in providing cutting-edge Data Extraction Services. With a commitment to precision and efficiency, our dedicated team employs advanced techniques to extract valuable insights from diverse datasets. Leveraging state-of-the-art technologies, we navigate complex data structures, ensuring a seamless extraction process.
                    Our Data Extraction Services cater to a wide spectrum of industries, facilitating the transformation of raw data into actionable intelligence. Whether it's extracting pertinent information from documents, web pages, or databases, our adept professionals ensure accuracy and reliability throughout the extraction journey.
                    At Sign Infosoft, we understand the critical role data plays in decision-making. Our services encompass the extraction of structured and unstructured data, enabling businesses to harness the power of information for strategic planning and operational optimization. By offering scalable and flexible solutions, we accommodate varying data extraction needs, empowering organizations to stay ahead in today's dynamic business landscape.
                    In addition to our technical prowess, Sign Infosoft prioritizes data security and confidentiality. Our robust measures guarantee the protection of sensitive information, fostering trust and reliability. With a client-centric approach, we collaborate closely with businesses to tailor our Data Extraction Services, aligning with their unique requirements and objectives. Choose Sign Infosoft for unparalleled expertise in transforming data into a valuable asset for your organization.`,
        One_liner: "Extract valuable information from diverse sources to get structured and accurate data at your fingertips.",
        icon: IoIosFunnel,
        row: "row",
        img: require("../Images/Services/DataService/data-extraction-concept-illustration_114360-4876.png")
    },
    {
        service: "Offline Data Entry Services",
        content: `Sign Infosoft is a dynamic software company at the forefront of innovation, offering unparalleled Offline Data Entry Services. We understand the pivotal role data plays in modern businesses, and our dedicated team is committed to delivering seamless, accurate, and efficient data entry solutions.
                    In the realm of offline data entry, Sign Infosoft stands out as a trusted partner, utilizing cutting-edge technologies and methodologies to ensure the highest standards of precision and reliability. Our services encompass a wide array of industries, addressing diverse data entry needs with a focus on confidentiality, integrity, and timeliness.
                    With a customer-centric approach, we tailor our services to meet the unique requirements of each client. Our skilled professionals meticulously handle data from various sources, ensuring that it is accurately transcribed, organized, and stored. This meticulous attention to detail sets us apart, enabling businesses to leverage their data effectively and make informed decisions.
                    At Sign Infosoft, we prioritize the security of sensitive information and implement robust quality control measures to guarantee the utmost accuracy in every data entry task. Our commitment to excellence, coupled with a streamlined workflow, positions us as a reliable and efficient partner for businesses seeking top-notch offline data entry services.`,
        One_liner: "Our experts meticulously input information, ensuring consistency and accuracy, even in environments with limited connectivity.",
        icon: IoCloudOffline,
        row: "row-reverse",
        img: require("../Images/Services/DataService/new-entries-concept-illustration_114360-5419.png")
    }
]
function DataService() {
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
                <div className="" style={{ flexGrow: `0` }}>
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
                <h2 className="Top" style={{ textAlign: `center` }}>Data Service</h2>
                <p style={{ margin: `30px 15px` }}>
                    Sign Infosoft excels in providing comprehensive data services, leveraging advanced technologies to meet diverse business needs. With a focus on data management, analytics, and processing, the company ensures clients harness the power of their data for informed decision-making. Sign Infosoft offers data integration, cleansing, and migration services, streamlining information workflows for optimal efficiency. Their expertise extends to big data analytics, transforming raw data into actionable insights. The company prioritizes data security and compliance, implementing robust measures to safeguard sensitive information. Through a client-centric approach, Sign Infosoft empowers businesses to unlock the full potential of their data assets, fostering growth and competitiveness in today's data-driven landscape.
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
export default DataService;