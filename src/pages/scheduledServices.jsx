import './scheduledServices.css';
import { useAuth } from "../contexts/AuthContext";
import Layout from '../components/layout.jsx';
import AssignmentLateOutlinedIcon from '@mui/icons-material/AssignmentLateOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const ScheduledServices = () => {
    const navigate = useNavigate();
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const handleDetailsClick = () => {
        navigate('/Searchservices');
    };

    const { token } = useAuth(); // get token from context

    useEffect(() => {
        const fetchServices = async () => {
            try {
                // Add your base URL if not set in axios defaults
                const response = await axios.get('http://127.0.0.1:8000/api/services/scheduled',{
                    headers: {
                        Authorization: `Bearer ${token}`,
                        Accept: "application/json"
                    }
                });
                console.log('API Response:', response.data); // Debug log
                
                if (response.data && response.data.data && response.data.data.services) {
                    setServices(response.data.data.services);
                } else {
                    setError('Invalid data format received');
                }
                setLoading(false);
            } catch (err) {
                console.error('API Error:', err); // Debug log
                setError(err.message);
                setLoading(false);
            }
        };

        fetchServices();
    }, [token]);

    if (loading) return <Layout><div className="loading">Loading services...</div></Layout>;
    if (error) return <Layout><div className="error">Error: {error}</div></Layout>;
    if (services.length === 0) return <Layout><div className="empty">No scheduled services found</div></Layout>;

    return (
        <Layout>
            <div className="scheduled-services-container">
                <div className="scheduled-title">Services</div>
                <h2 className="form-title1">Scheduled Services</h2>
                <div className="scheduled-icons-wrapper">
                    <div className="sheduleIcons">
                        <div className="sheduleIcon1">
                            <AssignmentLateOutlinedIcon fontSize="large" />                       
                        </div>
                        <div className="sheduleIcon2">
                            <AssignmentTurnedInOutlinedIcon fontSize="large" onClick={handleDetailsClick} />                    
                        </div>                   
                    </div>
                </div>
                <div className="servicesBoxes">
                    {/* First row - up to 3 services */}
                    <div className="frow">
                        {services.slice(0, 3).map((service, index) => (
                            <ServiceBox key={service.service_id || index} service={service} />
                        ))}
                    </div>
                    
                    {/* Second row - next 2 services */}
                    {services.length > 3 && (
                        <div className="srow">
                            {services.slice(3, 5).map((service, index) => (
                                <ServiceBox key={service.service_id || index + 3} service={service} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </Layout>
    );
};

// Separate component for service box
const ServiceBox = ({ service }) => {
    // Format date and time for display
    const displayDate = service.service_date ? new Date(service.service_date).toLocaleDateString() : 'No date';
    const displayTime = service.service_time ? ` ${service.service_time}` : '';

    const getOrdinalSuffix = (number) => {
        if (!number) return 'Service round not specified';
        const j = number % 10;
        const k = number % 100;
        if (j === 1 && k !== 11) {
            return number + 'st';
        } else if (j === 2 && k !== 12) {
            return number + 'nd';
        } else if (j === 3 && k !== 13) {
            return number + 'rd';
        }
        return number + 'th';
    }

    return (
        <div className="servicebox1">
            <p className="p"><b>Project No. {service.project_no || 'N/A'}</b></p>
            <p className="p">{service.customer_name || 'No customer'}</p>
            <p className="p">{service.service_round ? `${getOrdinalSuffix(service.service_round)} service round` : 'Service round not specified'}</p>
            <p className="p">{displayDate}{displayTime}</p>
            <p className="p">Assigners:</p>
            {service.supervisors && service.supervisors.length > 0 ? (
                service.supervisors.map((supervisor, supervisorIndex) => (
                    <p className="p1" key={supervisorIndex}>{supervisor}</p>
                ))
            ) : (
                <p className="p1">No supervisors assigned</p>
            )}
        </div>
    );
};

export default ScheduledServices;