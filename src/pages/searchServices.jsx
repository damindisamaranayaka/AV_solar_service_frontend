import './searchServices.css';
import SearchIcon from '@mui/icons-material/Search';
import Layout from '../components/layout.jsx';
import { useNavigate } from 'react-router-dom';
import {useState} from 'react';
const SearchServices =()=>{
   const [searchTerm, setSearchTerm] = useState('');
   const navigate= useNavigate();
    const handleDetailsClick = () => {
        navigate('/completedservices');
    };

    return(
        <Layout>
            <div className="completed-services-container">
            <div className="title">Completed Services</div>
            <div className="search-container">
          <div className="search-wrapper">
         <input
         type="text"
         placeholder="Search...  "
         className="search-input"
         value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}                             
        />
      <div className="search-icon1">
       <SearchIcon />
    </div>
  </div>
  <div className="all1">
            <div className="details1">
            <span>#360</span>
            <span className="name11">Divisional Secretary Yakkalamulla - Galle</span>
        </div>
            <div className="details1" onClick= {handleDetailsClick}>
            <span>#360</span>
            <span className="name11">Damayanthi De Silva - Malabe</span>
        </div>
            <div className="details1">
            <span>#360</span>
            <span className="name11">Aruna Patabadige - Kottawa</span>
        </div>
    </div>
</div>

            </div>
        </Layout>
    );

}
export default SearchServices;
