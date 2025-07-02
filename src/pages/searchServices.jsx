// import './searchServices.css';
// import SearchIcon from '@mui/icons-material/Search';
// import Layout from '../components/layout.jsx';
// import { useNavigate } from 'react-router-dom';
// import {useState} from 'react';
// const SearchServices =()=>{
//    const [searchTerm, setSearchTerm] = useState('');
//    const navigate= useNavigate();
//     const handleDetailsClick = () => {
//         navigate('/completedservices');
//     };

//     return(
//         <Layout>
//             <div className="completed-services-container">
//             <div className="title">Completed Services</div>
//             <div className="search-container">
//           <div className="search-wrapper">
//          <input
//          type="text"
//          placeholder="Search...  "
//          className="search-input"
//          value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}                             
//         />
//       <div className="search-icon1">
//        <SearchIcon />
//     </div>
//   </div>
//   <div className="all1">
//             <div className="details1">
//             <span>#360</span>
//             <span className="name11">Divisional Secretary Yakkalamulla - Galle</span>
//         </div>
//             <div className="details1" onClick= {handleDetailsClick}>
//             <span>#360</span>
//             <span className="name11">Damayanthi De Silva - Malabe</span>
//         </div>
//             <div className="details1">
//             <span>#360</span>
//             <span className="name11">Aruna Patabadige - matara</span>
//         </div>
//     </div>
// </div>

//             </div>
//         </Layout>
//     );

// }
// export default SearchServices;
import './searchServices.css';
import SearchIcon from '@mui/icons-material/Search';
import Layout from '../components/layout.jsx';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const SearchServices = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [projects, setProjects] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch projects from backend API
        const fetchProjects = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/projects/completed', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`, // if using Sanctum with token
                    }
                });
                setProjects(response.data.data.projects);
            } catch (error) {
                console.error('Error fetching completed services:', error);
            }
        };

        fetchProjects();
    }, []);

    const handleDetailsClick = (project) => {
        navigate(`/completedservices/${project.project_id}`,{
            state: {
                 project_no: project.project_no,
                 customer_name: project.customer_name,
                 nearest_town: project.nearest_town }
        });
    };

    // Filter projects by project_no, customer_name, or nearest_town
    const filteredProjects = projects.filter((project) => {
        const combined = `${project.project_no} ${project.customer_name} ${project.nearest_town}`.toLowerCase();
        return combined.includes(searchTerm.toLowerCase());
    });

    return (
        <Layout>
            <div className="completed-services-container">
                <div className="title">Completed Services</div>
                <div className="search-container">
                    <div className="search-wrapper">
                        <input
                            type="text"
                            placeholder="Search by project no, name, or town..."
                            className="search-input"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <div className="search-icon1">
                            <SearchIcon />
                        </div>
                    </div>

                    <div className="all1">
                        {filteredProjects.length === 0 ? (
                            <div className="details1">No matching projects found.</div>
                        ) : (
                            filteredProjects.map((project, index) => (
                                <div
                                    key={index}
                                    className="details1"
                                    onClick={() => handleDetailsClick(project)}
                                >
                                    <span>#{project.project_no}</span>
                                    <span className="name11">
                                        {project.customer_name} - {project.nearest_town}
                                    </span>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default SearchServices;
