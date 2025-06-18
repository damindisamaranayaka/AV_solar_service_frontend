import Layout from "../components/layout.jsx";
import "./projectDetails.css";
import EditIcon from '@mui/icons-material/Edit';
import InfoIcon from '@mui/icons-material/Info';
import PrintIcon from '@mui/icons-material/Print';
import SolarPanelModal from "../components/solarPanelDetail.jsx";
import ScheduleService from "../components/shedule_service.jsx";
import { useState } from "react";

const ProjectDetails = () => {
  const [showModal, setShowModal] = useState(false);
  const [schedule, setSchedule] = useState(false);
  return (
    <Layout>
    <div className="project-wrapper">
      <h2 className="project-title">Project No. 360 (on-grid)</h2>

      <div className="project-sections">
        <div className="customer_service">
        <div className="customer-details">
          <div className="card-header">
            <h3>Customer Details</h3>
            <EditIcon className="icon" />
          </div>
          <div className="card-content">
            <label>Name</label>
            <input disabled value="Divisional Secretary Yakkalamulla" />

            <label>Tel. No</label>
            <input disabled value="0723457890" />

            <label>Address</label>
            <input disabled value="Divisional secretary office, yakkalamulla" />

            <label>Email</label>
            <input disabled value="dso@gmail.com" />
          </div>
        </div>


        <div className="service-summery">
          <div className="card-header">
            <h3>Services Summary</h3>
            <PrintIcon className="icon1" onClick= {() => setSchedule(true)} />
              <ScheduleService show={schedule} onClose={() => setSchedule(false)} />  
          </div>
          <div className="service-rounds">
            <div className="service-box">
              <p>1st service round</p>
              <span>2025-01-22</span>
            </div>
            <div className="service-box">
              <p>2nd service round</p>
              <span>2025-02-22</span>
            </div>
          </div>
        </div>
        </div>

        <div className="project-details">
          <div className="card-header">
            <h3>Project Details</h3>
            <InfoIcon className="icon" />
          </div>
          <div className="card-content">
            <label>Electricity bill name</label>
            <input disabled value="Divisional Secretary Yakkalamulla" />

            <label>Site address</label>
            <input disabled value="Divisional secretary office, yakkalamulla" />

            <div className= "grp">
              <div className="grp11">
            <label>Nearest town</label>
            <input disabled value="Galle"/>
            </div>
            <div className="grp11">
            <label>No. of panels</label>
            <input disabled value="20"/>
            </div>
            </div>
            <div className= "grp">
            <div className="grp11">
            <label>Project installation on</label>
            <input disabled value="2024-12-10"  />
            </div>
            <div className="grp11">
            <label>System on</label>
            <input disabled value="2024-12-10" />
            </div>
            </div>
            <label>Special Note</label>
            <input disabled value="AC 4P SPD Phoenix replaced by Thimanka on 30/08/2024" />


            <div className= "grp">
            <div className="grp11">
            <label>Longitude</label>
            <input disabled value="6.276992"/>
            </div>
            <div className="grp11">
            <label>Latitude</label>
            <input disabled value="80.855238"/>
            </div>
            </div>
            <div className="button-group">
              <button className="btn" onClick= {() => setShowModal(true)}>Solar Panel Details</button>
              <SolarPanelModal show={showModal} onClose={() => setShowModal(false)} />
              <button className="btn">Invertor Details</button>
              <button className="btn">Wifi Details</button>
            </div>
          </div>
        </div>


      </div>
    </div>
    </Layout>
  );
};


export default ProjectDetails;



