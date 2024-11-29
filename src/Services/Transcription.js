import { Link } from "react-router-dom"
import {useState} from "react"
import { MdVoiceChat } from "react-icons/md";
import { MdOutlineVoiceChat } from "react-icons/md";
import { BiSolidBusiness } from "react-icons/bi";

let data1 = [
    {
        service: "Audio Transcription Services",
        content:`Sign Infosoft, a distinguished software company, is at the forefront of revolutionizing the industry with its unparalleled Audio Transcription Services. Committed to excellence, we harness cutting-edge technology and a skilled workforce to convert spoken words into accurate, written text. Our transcription services cater to diverse needs, ensuring precision in every detail.
                    Understanding the importance of clear and comprehensive documentation, we meticulously transcribe audio content from various sources, ranging from interviews and meetings to academic lectures and more. Sign Infosoft's commitment to quality extends beyond mere transcription; we embrace the nuances of different industries and subject matters, tailoring our services to meet the specific requirements of our clients.
                    With a focus on efficiency and confidentiality, our team seamlessly transforms audio files into written records, facilitating accessibility and analysis. Whether you are in the business, academic, or healthcare sector, Sign Infosoft's Audio Transcription Services offer a reliable solution for converting spoken content into valuable, written documentation. Trust us to enhance your workflow, streamline information retrieval, and empower your organization with accurate and professionally transcribed audio content.`,
        One_liner:"Our skilled transcribers ensure accurate conversion, enhancing accessibility, knowledge retention, and searchability for your audio content.",
        icon:MdVoiceChat,
        row: 'row',
        img: require("../Images/Services/Transcription/user-flow-concept-illustration_114360-2748.png")
    },
    {
        service: "Video Transcription Services",
        content: `Sign Infosoft, a leading software company, takes pride in offering top-notch Video Transcription Services. Our dedicated team of professionals is committed to delivering accurate and timely transcriptions for a diverse range of video content. With a keen eye for detail and a deep understanding of language nuances, we ensure that every word spoken in your videos is meticulously transcribed.
                    Our Video Transcription Services cater to various industries, including business, education, entertainment, and more. Whether you have marketing videos, educational content, interviews, or any other video material, we strive to provide clear and precise transcriptions that capture the essence of the spoken words.
                    At Sign Infosoft, we leverage advanced technologies and industry best practices to ensure the highest quality in our transcription services. Our commitment extends beyond mere word-for-word transcriptions; we focus on maintaining the context, tone, and intent of the original content.
                    By choosing Sign Infosoft for Video Transcription Services, you can expect a seamless process, accurate transcriptions, and a reliable partner dedicated to meeting your transcription needs with precision and professionalism. Enhance the accessibility and usability of your video content with our exceptional Video Transcription Services.`,
        One_liner: "Capture spoken words and reach out to broader audiences to improve SEO and enhance viewer engagement.",
        icon: MdOutlineVoiceChat,
        row: 'row-reverse',
        img: require("../Images/Services/Transcription/youtube-tutorial-concept-illustration_114360-2807.png")
    },
    {
        service: "Business Transcription Services",
        content: `Sign Infosoft is a leading software company at the forefront of providing exceptional Business Transcription Services. Our dedicated team combines technological prowess with a commitment to accuracy, delivering unparalleled transcription solutions tailored to meet the unique needs of businesses across diverse industries.
                    With a focus on precision and efficiency, our Business Transcription Services encompass a wide spectrum of sectors, including corporate meetings, conferences, interviews, and more. We understand the critical importance of preserving and documenting business communications, and our services reflect an unwavering dedication to maintaining the integrity of your audio and video content.
                    Employing advanced transcription tools and a team of skilled professionals, we ensure timely and high-quality transcriptions that enable our clients to derive actionable insights from their recorded content. Whether it's capturing crucial decision-making discussions, extracting valuable data, or preserving legal proceedings, Sign Infosoft stands as a reliable partner committed to delivering accurate and reliable transcriptions.
                    Our client-centric approach, coupled with a stringent commitment to confidentiality, makes us the preferred choice for businesses seeking dependable transcription services. By choosing Sign Infosoft, you are selecting a trusted ally in transcription excellence, empowering your organization with the clarity and accessibility essential for informed decision-making and seamless communication.`,
        One_liner: "Our expert transcribers convert important business interactions into accurate text records, facilitating knowledge sharing and decision-making.",
        icon: BiSolidBusiness,
        row: 'row',
        img: require("../Images/Services/Transcription/text-files-concept-illustration_114360-4008.png")
    }
]
function Transcription() {
    
    const Service = (values) => {
        // eslint-disable-next-line no-unused-vars
        const [data, SetData] = useState({
            service: values.service,
            content:values.content
        });
        return (
            <div className="box" style={{ alignItems:`center`, justifyContent: `space-around`, flexDirection: values.row }}>
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
            <div style={{  }}>
                <h2 className="Top" style={{ textAlign: `center` }}>Transcription Services</h2>
                <p style={{ margin: `30px 15px` }}>
                    Sign Infosoft excels in providing top-notch Transcription Services, ensuring accuracy and efficiency for diverse industries. With a dedicated team of skilled transcriptionists, they convert audio and video content into precise and readable text. Their services cater to businesses, academic institutions, legal professionals, and healthcare providers, among others. Utilizing advanced technology and industry expertise, Sign Infosoft delivers timely and cost-effective transcription solutions. Whether it's transcribing interviews, meetings, lectures, or legal proceedings, they maintain a commitment to quality and confidentiality. Clients benefit from accurate documentation, facilitating improved communication and information accessibility. Sign Infosoft's Transcription Services stand out for their reliability, precision, and adherence to client-specific requirements, making them a trusted choice in the transcription domain.
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
export default Transcription;