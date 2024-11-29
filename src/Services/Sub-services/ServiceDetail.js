import { useLocation } from "react-router-dom";
function ServiceDetail(props){
    const location = useLocation();
    const data = location.state?.data;
    return(
        <>
            <h1 className="Top">{data.service}</h1>
            <p>{data.content}</p>
        </>
    );
}
export default ServiceDetail;