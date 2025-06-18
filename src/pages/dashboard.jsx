import Layout from '../components/layout.jsx';
import './dashboard.css';

const Dashboard = () => {
    return (
       <Layout>
  <div className="main-content">
    <div className="dashboard">
      <h2 className= "dashboardtitle">Dashboard</h2>
    </div>
    <div className="boxes">
      <div className="box1">
        <p>Total Projects</p>
        <p>1352</p>
      </div>
      <div className="box1">
        <p>First Service Done</p>
        <p>On</p>
        <p>1300</p>
      </div>
      <div className="box1">
        <p>Second Service Done</p>
        <p>On</p>
        <p>52</p>
      </div>
    </div>
  </div>
</Layout>

    );
}

export default Dashboard;
