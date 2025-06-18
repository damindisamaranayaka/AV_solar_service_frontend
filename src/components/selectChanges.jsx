import './selectChanges.css';
import {useState} from 'react';
import ChangingPanelsModal from './changingPanelModal.jsx';
import ExpandingPanelsModal from './expandingPanelModal.jsx';
const selectChanges= ({show, onClose})=> {
    const [selectedOption, setSelectedOption] = useState("");   
    if (!show) return null;

    const handleChange = (e) => {
        setSelectedOption(e.target.value);
    };


    return (
        <div className="modal-backdrop1" onClick={onClose}>
            <div className="modal-content1" onClick={e => e.stopPropagation()}>
                <span className="close-btn1" onClick={onClose}>&times;</span>
                <div className="select-container">
                <select className="select" value={selectedOption} onChange={handleChange}>
                    <option value="">Select Changes</option>
                    <option value="changing">Changing Exit Panels</option>
                    <option value="expanding">Expanding the Panels</option>
                    </select>
                </div>
        {selectedOption === "changing" && <ChangingPanelsModal onClose={() => setSelectedOption("")} />}
        {selectedOption === "expanding" && <ExpandingPanelsModal onClose={() => setSelectedOption("")} />}
            </div>
        </div>
    );

}

export default selectChanges;








// import { useState } from 'react';
// import './selectChanges.css';
// import ChangingPanelsModal from './ChangingPanelsModal';
// import ExpandingPanelsModal from './ExpandingPanelsModal';

// const SelectChanges = ({ show, onClose }) => {
//   const [selectedOption, setSelectedOption] = useState("");

//   if (!show) return null;

//   const handleChange = (e) => {
//     setSelectedOption(e.target.value);
//   };

//   return (
//     <div className="modal-backdrop1" onClick={onClose}>
//       <div className="modal-content1" onClick={e => e.stopPropagation()}>
//         <span className="close-btn1" onClick={onClose}>&times;</span>

//         <div className="select-container">
//           <select className="select" value={selectedOption} onChange={handleChange}>
//             <option value="">Select Changes</option>
//             <option value="changing">Changing Existing Panels</option>
//             <option value="expanding">Expanding the Panels</option>
//           </select>
//         </div>

//         {/* Conditional rendering of modals based on selected option */}
//         {selectedOption === "changing" && <ChangingPanelsModal onClose={() => setSelectedOption("")} />}
//         {selectedOption === "expanding" && <ExpandingPanelsModal onClose={() => setSelectedOption("")} />}
//       </div>
//     </div>
//   );
// };

// export default SelectChanges;
