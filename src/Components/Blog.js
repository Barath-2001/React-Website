import styled from 'styled-components';
import { Slide } from "react-awesome-reveal";
let data=[
    {
        title:"Why us?",
        description:" Our commitment to excellence sets us apart. We distinguish ourselves by delivering top-notch software services tailored to meet diverse client needs. With a focus on innovation, reliability, and customer satisfaction, we consistently strive to exceed expectations, making Sign Infosoft the preferred choice for comprehensive and reliable software solutions. ",
        direction: "left"
    },
    {
        title: "Our Goal",
        description: "At Sign Infosoft, our goal is to empower businesses through innovative software solutions. We strive to deliver excellence by providing a diverse range of services tailored to meet the unique needs of our clients. With a commitment to quality, efficiency, and client satisfaction, we aim to be a trusted partner in driving digital transformation and success in the rapidly evolving technological landscape.",
        direction:"right"
    }
]


function Blog(props){
    const card = (values) => {

        return (
            <Slide direction={values.direction}>
            <Container>
                <h1 className="card-title" style={{ color:`#02066f`,fontSize:`2.5rem`}}>{values.title}</h1>
                <p style={{ color: `black`,fontSize:`1rem`,textAlign:`justify` }}>{values.description}</p>
            </Container>
            </Slide>
        )
    }
    return(
        <>
            <div id="blog" style={{display:`flex`,paddingTop:`80px`}}>
            <Container1 id="service">
                <Cards>
                        {data.map(card)}
                </Cards>
            </Container1>
            </div>
        </>
    );
}
export default Blog;

const Container = styled.div`
    width: 100%;
    background: white;
    padding: 1rem;
    text-align: center;
    height:100%;
    margin:0px 10p;
    span{
        font-size: 4rem;
    }
    
    h1{
        font-size: 1.2rem;
        padding-bottom: 1rem;
    }

    p{
        font-size: 0.8rem;
    }
`
const Container1 = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0rem 0;
  
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;