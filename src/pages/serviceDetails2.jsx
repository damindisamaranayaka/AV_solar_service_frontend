import './serviceDetails2.css';
import Layout from '../components/layout.jsx';
import ImageIcon from '@mui/icons-material/Image';

const ServiceDetails2 =() =>{
    return(
        <Layout>
        <div className= "serviceDetailContainer">
      <div className= "title">Project No: 361 Completed services</div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" }}> 
        <div className= "title3">Customer: Damayanthi De Silva - Malabe (1st Service Round) </div>
        <div className= "imageIcon2" >
          <ImageIcon fontSize="large"/>
        </div>
        </div>
        <div className= "tables">
         <div className="topic-container">
       <span className="topic">Roof work</span>
       </div>
       <table className="table1">
        <thead>
            <tr>
            <th>Activity</th>
            <th>Reading</th>
            <th>Comments</th>
            </tr>
        </thead>
        <tbody>
        <tr>
            <td>Cloudins</td>
            <td>1-10</td>
            <td>3</td>
        </tr>
        <tr>
            <td>Panel Service</td>
            <td>Yes</td>
            <td></td>
        </tr>
         <tr>
            <td>Structure Service</td>
            <td>Yes</td>
            <td></td>
        </tr>
         <tr>
            <td>Condition and tigtness of nuts & bolts</td>
            <td>Yes</td>
            <td></td>
        </tr>
         <tr>
            <td>Panel MC4 Condition</td>
            <td>Yes</td>
            <td></td>
        </tr>
         <tr>
            <td>Took Photos</td>
            <td>Yes</td>
            <td></td>
        </tr>
         <tr>
            <td>Panel Service</td>
            <td>Yes</td>
            <td></td>
        </tr>       
        </tbody>
       </table>

        <div className="topic-container">
       <span className="topic">Outdoor Work</span>
       </div>
       <table className= "table2">
        <thead>
            <tr>
            <th>Activity</th>
            <th>Reading</th>
            <th>Comments</th>
            </tr>
        </thead>
        <tbody>
        <tr>
            <td>CEB Export Reading</td>
            <td>2.8.0</td>
            <td></td>
        </tr>
        <tr>
            <td>CEB Import Reading</td>
            <td>2.8.0</td>
            <td></td>
        </tr>
        <tr>
            <td>Ground Resistence</td>
            <td></td>
            <td></td>
        </tr>
        </tbody>
       </table>
        </div>
        </div>
        </Layout>
    )
}

export default ServiceDetails2;