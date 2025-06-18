import './scheduledServices.css';
import Layout from '../components/layout.jsx';
import AssignmentLateOutlinedIcon from '@mui/icons-material/AssignmentLateOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import {useNavigate} from 'react-router-dom';
const ScheduledServices = () => {
    const navigate = useNavigate();
    const handleDetailsClick = () => {
        navigate('/Searchservices');
    };
    return(
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
                        <AssignmentTurnedInOutlinedIcon fontSize="large" onClick= {handleDetailsClick} />                    
                    </div>                   
                </div>
                </div>
                <div className = "servicesBoxes">
                    <div className = "frow">
                    <div className= "servicebox1">
                        <p className="p" ><b>Project No. 360</b></p >
                        <p className="p">Divisional Secretary Yakkalamulla</p>
                        <p className="p" >4th service round</p>
                        <p className="p">4th service round</p>
                        <p className="p">2025-03-26  2.00 PM</p>
                        <p className="p">Assigners:-</p>
                        <p className="p1">Rashmika</p>
                        <p className="p1">Pubudu</p>
                    </div>

                     <div className= "servicebox1">
                        <p className="p" ><b>Project No. 269</b></p >
                       <p className="p">Divisional Secretary Yakkalamulla</p>
                        <p className="p" >4th service round</p>
                        <p className="p">4th service round</p>
                        <p className="p">2025-03-26  2.00 PM</p>
                        <p className="p">Assigners:-</p>
                        <p className="p1">Rashmika</p>
                        <p className="p1">Pubudu</p>
                    </div>

                     <div className= "servicebox1">
                        <p className="p" ><b>Project No. 1456</b></p >
                        <p className="p">Divisional Secretary Yakkalamulla</p>
                        <p className="p" >4th service round</p>
                        <p className="p">4th service round</p>
                        <p className="p">2025-03-26  2.00 PM</p>
                        <p className="p">Assigners:-</p>
                        <p className="p1">Rashmika</p>
                        <p className="p1">Pubudu</p>
                    </div>
                    </div>

                    <div className = "srow">
                    <div className= "servicebox1">
                        <p className="p" ><b>Project No. 587</b></p >
                       <p className="p">Divisional Secretary Yakkalamulla</p>
                        <p className="p" >4th service round</p>
                        <p className="p">4th service round</p>
                        <p className="p">2025-03-26  2.00 PM</p>
                        <p className="p">Assigners:-</p>
                        <p className="p1">Rashmika</p>
                        <p className="p1">Pubudu</p>
                    </div>

                     <div className= "servicebox1">
                        <p className="p" ><b>Project No. 360</b></p >
                       <p className="p">Divisional Secretary Yakkalamulla</p>
                        <p className="p" >4th service round</p>
                        <p className="p">4th service round</p>
                        <p className="p">2025-03-26  2.00 PM</p>
                        <p className="p">Assigners:-</p>
                        <p className="p1">Rashmika</p>
                        <p className="p1">Pubudu</p>
                    </div>
                    </div>
                </div>
               


            </div>
        </Layout>
    )
}

export default ScheduledServices;