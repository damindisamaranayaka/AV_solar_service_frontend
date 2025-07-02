import './completedServices.css';
import Layout from "../components/layout.jsx";
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const CompletedServices = () => {
    const { project_id } = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    const [serviceRounds, setServiceRounds] = useState([]);

    // Optional project info passed via navigation
    const projectNo = location.state?.project_no || 'Unknown';
    const customerName = location.state?.customer_name || 'Unknown';
    const town = location.state?.nearest_town || '';

    useEffect(() => {
        const fetchCompletedServices = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/services/completed-by-project-id`, {
                    params: { project_id },
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                });
                setServiceRounds(response.data.data.services);
            } catch (error) {
                console.error("Error fetching completed services:", error);
            }
        };

        if (project_id) fetchCompletedServices();
    }, [project_id]);

    const handleDetailsClick = (round) => {
        // Later you can pass round number, etc.
        navigate('/servicedetails', { state: { round } });
    };

    return (
        <Layout>
            <div className="title">Project No: {projectNo} - Completed Services</div>
            <div className="title2">Customer: {customerName} - {town}</div>

            <div className="details11">
                {serviceRounds.length === 0 ? (
                    <div>No completed service rounds found.</div>
                ) : (
                    serviceRounds.map((service, index) => (
                        <div key={index} className="fr">
                            <span style={{ fontWeight: "bold" }}>
                                {service.service_round} Round Service - {service.service_date}
                            </span>
                            <button className="viewBtn" onClick={() => handleDetailsClick(service)}>View</button>
                        </div>
                    ))
                )}
            </div>
        </Layout>
    );
};

export default CompletedServices;
