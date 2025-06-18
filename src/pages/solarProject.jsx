import Layout from '../components/layout.jsx';
import './solarProject.css';
import SearchIcon from '@mui/icons-material/Search';
import AddBoxIcon from '@mui/icons-material/AddBox';
import PriorityHighOutlinedIcon from '@mui/icons-material/PriorityHighOutlined';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import AddModal from '../components/addModal.jsx';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

const SolarProject = () => {
const navigate = useNavigate();
const [addModal, setAddModal] = useState(false);
const handleDetailsClick = () => {
  navigate('/projectdetails');
};
return(
<Layout>
<div className= "solarProjectWrapper">
<div className="solarProject">

    <h2>Solar Projects</h2>
    <div className="text11">
      <span className="text1">All</span>
      <span className="text2">On-grid</span>
      <span className="text3">Off-grid & Hybrid</span>
  </div>
  

         <div className="searchBox">
        <SearchIcon className="searchIcon" />
        <input type="text1" placeholder="" />
      </div>
       <div className="plusWrapper">
       <div className="plus" onClick={() => setAddModal(true)}>
       <AddBoxIcon fontSize="large" />
       </div>
       <AddModal show={addModal} onClose={() => setAddModal(false)} />
       </div>
        </div>  


        <div className="all">
        <div className="details" onClick= {handleDetailsClick}>
            <span>#360</span>
            <span>Divisional Secretary Yakkalamulla</span>
            <span>Galle</span>
            <span>On-grid</span>
            <span>2024-12-06</span>
             <div className="priorityIcon" fontSize="small">
            <PriorityHighOutlinedIcon />
            </div> 
            
        </div>
            <div className="details" onClick= {handleDetailsClick}>
            <span>#360</span>
            <span>Divisional Secretary Yakkalamulla</span>
            <span>Galle</span>
            <span>On-grid</span>
            <span>2024-12-06</span>
             <div className="priorityIcon" fontSize="small">
            <PriorityHighOutlinedIcon />
            </div> 
        </div>
            <div className="details" onClick= {handleDetailsClick}>
            <span>#360</span>
            <span>Divisional Secretary Yakkalamulla</span>
            <span>Galle</span>
            <span>On-grid</span>
            <span>2024-12-06</span>
             <div className="priorityIcon" fontSize="small">
            <PriorityHighOutlinedIcon />
            </div> 
        </div>
            <div className="details" onClick= {handleDetailsClick}>
            <span>#360</span>
            <span>Divisional Secretary Yakkalamulla</span>
            <span>Galle</span>
            <span>On-grid</span>
            <span>2024-12-06</span>
             <div className="priorityIcon" fontSize="small">
            <PriorityHighOutlinedIcon />
            </div> 
        </div>
            <div className="details" onClick= {handleDetailsClick}>
            <span>#360</span>
            <span>Divisional Secretary Yakkalamulla</span>
            <span>Galle</span>
            <span>On-grid</span>
            <span>2024-12-06</span>
             <div className="priorityIcon" fontSize="small">
            <PriorityHighOutlinedIcon />
            </div> 
        </div>
            <div className="details" onClick= {handleDetailsClick}>
            <span>#360</span>
            <span>Divisional Secretary Yakkalamulla</span>
            <span>Galle</span>
            <span>On-grid</span>
            <span>2024-12-06</span>
             <div className="priorityIcon" fontSize="small">
            <PriorityHighOutlinedIcon />
            </div> 
        </div> 
    </div>
    <div className="arrow">
        <div className="arrow1">
            <ArrowBackIosOutlinedIcon />
            </div>
        <div className="text4">
            <span>2 of 10</span>
            </div>
        <div className="arrow2">
            <ArrowForwardIosOutlinedIcon />
            </div>
        </div>
        </div>
        </Layout>
        
    );
}

export default SolarProject;







