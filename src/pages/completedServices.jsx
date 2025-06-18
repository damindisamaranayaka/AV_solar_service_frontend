import './completedServices.css';
import Layout from "../components/layout.jsx";
import {useNavigate} from 'react-router-dom';
const CompletedServices = ()=>{
    const navigate = useNavigate();
    const handleDetailsClick = () => {
        navigate('/servicedetails');
    };
    return(
        <Layout>
        <div className= "title">Project No: 361 Completed services</div>
        <div className= "title2">Customer: Damayanthi De Silva - Malabe</div>
        <div className= "details11">
            <div className= "fr">
                <span style={{ fontWeight: "bold" }}>1st Round Service - 2024-01-10</span>
                <button className="viewBtn" onClick= {handleDetailsClick}>View</button>
            </div>
            <br></br>
            <div className= "sr">
                <span style={{ fontWeight: "bold" }}>2st Round Service - 2025-01-10</span>
                <button className="viewBtn">View</button>
            </div>
        </div>
        </Layout>
    )
}

export default CompletedServices;
