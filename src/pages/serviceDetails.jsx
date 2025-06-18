import './serviceDetails.css';
import Layout from "../components/layout.jsx";
import ImageIcon from '@mui/icons-material/Image';
import {useNavigate} from 'react-router-dom';

const ServiceDetail =() =>{
  const navigate= useNavigate();
  const handleDetailsClick = () => {
        navigate('/serviceDetails2');
    };

    return(
        <Layout>
        <div className= "pageContent">
        <div className= "title">Project No: 361 Completed services</div>       
         <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" }}> 
        <div className= "title3">Customer: Damayanthi De Silva - Malabe (1st Service Round) </div>
        <div className= "imageIcon1" >
          <ImageIcon fontSize="large"/>
        </div>
        </div>
        <div className= "ServiceDetailContainer">
        <p className= "timestamp">2024-01-10 2.00 PM By Rashmika & Pubudu</p>
    <div className= "systemPlusInvertor">   
       <div className="system-info">
        <div className="info">
          <p>System Capacity</p>
          <div className="info-box">20.3 kW</div>
        </div>
         <div className="info">
          <p>Invertor Capacity</p>
          <div className="info-box">10 kW</div>
        </div>
          <div className="info">
          <p>Power</p>
          <div className="info-box">8007 kW</div>
        </div>
          <div className="info">
          <p>Time</p>
          <div className="info-box">03:00</div>
        </div>
      </div>

      <div className="inverterDetails">
        <div className="firstR">
          <div className="info1">
          <p>Inverter Serial No.</p>
          <div className="info-box1">0902KDI7932750D</div>
        </div>
        <div className="info1">
          <p>Invertor C/C</p>
          <div className="info-box1">065289</div>
        </div>
        </div>
        <div className="secondR">
          <div className="info11">
          <p>Longitude</p>
          <div className="info-box1">523698.123</div>
        </div>
        <div className="info11">
          <p>Lattitide</p>
          <div className="info-box1">523698.123</div>
        </div>
        </div>
      </div>
</div> 
      <table className="dc-table">
        <thead>
          <tr>
            <th>DC</th>
            {[...Array(8)].map((_, i) => (
              <th key={i}>String {i + 1}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr><td>O/C Voltage</td>{[...Array(8)].map((_, i) => <td key={i}></td>)}</tr>
          <tr><td>Load Voltage</td>{[...Array(8)].map((_, i) => <td key={i}></td>)}</tr>
          <tr><td>Load Current</td>{[...Array(8)].map((_, i) => <td key={i}></td>)}</tr>
        </tbody>
      </table>

      <table className="ac-table">
        <thead>
          <tr>
            <th>AC</th>
            {["L1-L2", "L2-L3", "L1-L3", "L1-N", "L2-N", "L3-N", "N-E"].map((label, i) => (
              <th key={i}>{label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr><td>O/C Voltage</td>{[...Array(7)].map((_, i) => <td key={i}></td>)}</tr>
          <tr><td>Load Voltage</td>{[...Array(7)].map((_, i) => <td key={i}></td>)}</tr>
          <tr><td>Load Current</td>{[...Array(7)].map((_, i) => <td key={i}></td>)}</tr>
        </tbody>
      </table>
      <button className="btn2" onClick= {handleDetailsClick}>Next</button>
      </div>
    </div>
        </Layout>
    )
}

export default ServiceDetail;