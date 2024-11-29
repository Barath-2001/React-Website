import { Link } from "react-router-dom"
import { useState } from "react"
import { FaPortrait } from "react-icons/fa";
import { TbPhotoStar } from "react-icons/tb";
import { TbShoppingCartDollar } from "react-icons/tb";
import { IoShirt } from "react-icons/io5";
import { FaRegImage } from "react-icons/fa6";
import { MdRealEstateAgent } from "react-icons/md";
let data1 = [
    {
        service: "Portrait Retouching Services",
        content:`Sign Infosoft, a distinguished software company, takes pride in offering unparalleled Portrait Retouching Services. Our team of skilled professionals, equipped with artistic flair and technical precision, transforms ordinary portraits into captivating masterpieces. With a keen eye for detail, we enhance facial features, correct imperfections, and ensure a natural yet polished appearance.
                    Our Portrait Retouching Services cater to diverse needs, from individual portraits to group photographs, ensuring each subject shines with authenticity. We meticulously balance color tones, adjust lighting, and refine backgrounds to achieve a harmonious visual narrative. Whether it's for professional profiles, family albums, or social media platforms, our retouching services elevate the overall aesthetic, leaving a lasting impression.
                    At Sign Infosoft, client satisfaction is paramount. We collaborate closely with our clients, understanding their vision and preferences, to deliver personalized and flawless results. Our commitment to excellence is reflected in our dedication to maintaining the integrity of the original photo while enhancing its visual appeal.
                    With a focus on innovation and a commitment to quality, Sign Infosoft remains at the forefront of Portrait Retouching Services, continually exceeding expectations and providing clients with images that evoke emotion and tell compelling stories. Choose Sign Infosoft for transformative and bespoke portrait retouching that brings out the true essence of every photograph.`,
        One_liner:"Enhance natural beauty, ensuring flawless skin tones, balanced lighting, and overall perfection with our services.",
        icon: FaPortrait,
        row:"row",
        img:require("../Images/Services/PhotoEditing/edit-photo-concept-illustration_114360-4101.png")
    },
    {
        service: "Photo Retouching Services",
        content: `Sign Infosoft, a distinguished software company, takes pride in offering professional Photo Retouching Services that redefine visual aesthetics. Our dedicated team of skilled artists and designers meticulously enhances and refines images, bringing out the true essence and beauty in every photograph.
                    With an unwavering commitment to excellence, we understand the importance of creating visually stunning images that captivate and leave a lasting impression. Our Photo Retouching Services cover a wide spectrum, including skin retouching, color correction, background removal, and overall enhancement. Whether it's for e-commerce, advertising, fashion, or personal portfolios, we transform images into polished masterpieces that meet the highest standards of quality.
                    At Sign Infosoft, we leverage advanced retouching techniques and industry-leading software to ensure precision and perfection in every project. Our skilled professionals pay meticulous attention to detail, carefully balancing enhancements to achieve natural-looking results. We pride ourselves on delivering projects promptly, with a keen focus on client satisfaction.
                    Partnering with Sign Infosoft for Photo Retouching Services guarantees not just image enhancement but a transformative experience. We bring out the best in every photograph, enhancing its visual appeal and contributing to a memorable visual narrative. Trust us to elevate your images and make a lasting impact across various platforms and industries.`,
        One_liner: "We employ skilled and experienced photo editors who are experts in their field. We offer diverse services, including skin retouching, background clean-up, color correction, object",
        icon: TbPhotoStar,
        row: "row-reverse",
        img: require("../Images/Services/PhotoEditing/acne-treatment-concept-illustration_114360-9177.png")
    },
    {
        service: "eCommerce Photo Editing Services",
        content: `Sign Infosoft stands as a premier software company, distinguished for its unparalleled expertise in offering eCommerce Photo Editing Services. With a keen eye for detail and a commitment to visual excellence, we cater to the dynamic needs of eCommerce businesses globally. Our dedicated team of skilled professionals brings forth a wealth of experience, ensuring that each image is meticulously edited to enhance its visual appeal and optimize product presentation.
                    In the realm of eCommerce, where visuals play a pivotal role, our services go beyond mere photo editing – we craft compelling and visually engaging narratives for products, elevating the overall shopping experience for customers. From background removal and color correction to image retouching and enhancement, our comprehensive suite of editing services caters to diverse product categories.
                    We understand the importance of creating a seamless and visually cohesive online storefront. Therefore, our eCommerce Photo Editing Services are designed to not only meet but exceed the expectations of our clients. Through a meticulous process and a keen understanding of industry trends, we ensure that each image tells a compelling story, contributing to increased customer engagement, trust, and ultimately, higher conversion rates. Sign Infosoft, a trusted name in the industry, stands ready to transform your eCommerce visuals and elevate your brand to new heights.`,
        One_liner: "Optimize product images, ensure consistency, and enhance details to create visually appealing visuals that drive conversions.",
        icon: TbShoppingCartDollar,
        row: "row",
        img: require("../Images/Services/PhotoEditing/portfolio-update-concept-illustration_114360-136.png")
    },
    {
        service: "Fashion Photo Editing Services",
        content: `Sign Infosoft, a distinguished software company, pioneers in the realm of Fashion Photo Editing Services, elevating visual content to new heights. With an unwavering commitment to precision and creativity, our team of skilled professionals meticulously transforms fashion images, infusing them with glamour and sophistication.
                    Our specialized services cater to the nuanced requirements of the fashion industry, ensuring that every image tells a compelling story. From color correction and background enhancement to retouching and model enhancement, Sign Infosoft crafts visually stunning images that resonate with the essence of the brand.
                    In the dynamic world of fashion, where aesthetics play a pivotal role, our Fashion Photo Editing Services act as the creative catalyst. We understand the importance of maintaining brand integrity and ensure that each image aligns seamlessly with the client's vision. Whether it's catalog photos, e-commerce visuals, or promotional material, our expertise transforms ordinary images into captivating visual narratives.
                    Sign Infosoft's Fashion Photo Editing Services not only enhance the overall appeal of fashion imagery but also contribute to the success of brands by establishing a distinctive and compelling visual identity. In a competitive landscape, our commitment to excellence positions us as a trusted partner for fashion businesses seeking to make a lasting impression through captivating visuals.`,
        One_liner: "Get experienced editors to enhance colors, textures, and details, ensuring your fashion photography stands out.",
        icon: IoShirt,
        row: "row-reverse",
        img: require("../Images/Services/PhotoEditing/fashion-photoshoot-concept-illustration_114360-4095.png")
    },
    {
        service: "Real Estate Photo Editing Services",
        content: `Sign Infosoft, a distinguished software company, extends its expertise to offer unparalleled Real Estate Photo Editing Services. With a commitment to visual excellence, our dedicated team employs advanced editing techniques to enhance the appeal of real estate images. From color correction to virtual staging, we meticulously transform photos to captivate potential buyers and leave a lasting impression.
                    Our skilled professionals leverage their artistic flair and technical proficiency to highlight the unique features of each property. Whether it's enhancing lighting, removing imperfections, or creating virtual renovations, our Real Estate Photo Editing Services elevate property visuals to meet the highest industry standards.
                    Sign Infosoft understands the critical role visuals play in the real estate market. Our services cater to real estate agents, property developers, and marketing professionals seeking to showcase properties in the best possible light. By partnering with us, clients benefit from a seamless and efficient editing process, resulting in visually stunning images that effectively market properties and drive engagement.
                    In a competitive real estate landscape, Sign Infosoft stands out as a reliable ally, ensuring that each property's visual representation aligns with the client's branding and marketing objectives. Elevate your real estate marketing strategy with our top-notch Real Estate Photo Editing Services.`,
        One_liner: "Edit your property images to transform them into exquisite photos that precisely showcase your property with our professional services.",
        icon: MdRealEstateAgent,
        row: "row",
        img: require("../Images/Services/PhotoEditing/house-restyling-concept-illustration_114360-2877.png")
    },
    {
        service: "Background Removal Services",
        content: `Sign Infosoft is a dynamic software company that specializes in delivering impeccable Background Removal Services. With a keen eye for detail and a commitment to quality, our dedicated team employs advanced techniques to seamlessly eliminate backgrounds from images, ensuring a professional and polished aesthetic. Our services cater to a diverse range of industries, including e-commerce, photography, and digital marketing, where visual appeal is paramount.
                    At Sign Infosoft, we understand the significance of captivating visuals in making a lasting impression. By skillfully removing backgrounds, we enable businesses to showcase their products or services with clarity and focus. Our innovative approach leverages cutting-edge technology and a skilled workforce to handle projects of varying complexities.
                    Whether it's enhancing product images for an online store, refining photographs for marketing collateral, or creating visually stunning content for digital platforms, our Background Removal Services empower businesses to stand out in today's visually-driven landscape. We take pride in our efficiency, attention to detail, and ability to transform images, providing clients with a competitive edge and elevating their visual branding. Choose Sign Infosoft for unparalleled background removal solutions that bring your visual content to the forefront with precision and professionalism.`,
        One_liner: "Replace dull backgrounds with vibrant ones and get rid of unwanted elements with our background removal services.",
        icon: FaRegImage,
        row: "row-reverse",
        img: require("../Images/Services/PhotoEditing/image-upload-illustration-concept_114360-766.png")
    },
]
function PhotoEditing() {
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
                <h2 className="Top" style={{ textAlign: `center` }}>Photo Editing</h2>
                <p style={{ margin: `30px 15px` }}>
                    Sign Infosoft excels in professional photo editing services, harnessing creativity and technical expertise to transform images into captivating visual assets. With a focus on precision and attention to detail, their skilled team enhances photographs for diverse purposes, including marketing, e-commerce, and personal use. From color correction and retouching to background removal and image manipulation, Sign Infosoft employs advanced tools and techniques to ensure flawless results. Their commitment to client satisfaction is reflected in delivering high-quality, visually appealing images that leave a lasting impact. Whether it's product photos, portraits, or event snapshots, Sign Infosoft's photo editing services elevate the visual appeal, providing clients with polished and engaging images that align with their specific requirements and objectives.
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
export default PhotoEditing;