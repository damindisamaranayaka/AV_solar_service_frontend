import React from "react";
import "./solarPanelDetail.css";
import { useState } from "react";
import SelectChanges from "./selectChanges.jsx";

const SolarPanelModal = ({ show, onClose }) => {
  const [showModal, setShowModal] = useState(false);
  if (!show) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <span className="close-btn" onClick={onClose}>&times;</span>
        <h2>Solar Panel Details</h2>
        <table className= "table11">
          <thead>
            <tr>
              <th>Panel model</th>
              <th>Panel model code</th>
              <th>Panel Type</th>
              <th>Wattage of panel</th>
              <th>No of panels</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Trina</td>
              <td>TSM-500DE18M(II)</td>
              <td>Monocrystalline</td>
              <td>580</td>
              <td>18</td>
            </tr>
            <tr>
              <td>Trina</td>
              <td>TSM-235DE18M(II)</td>
              <td>Monocrystalline</td>
              <td>500</td>
              <td>2</td>
            </tr>
          </tbody>
        </table>

        <p className= "capacity">Capacity - 20.5kw</p>
       <div className="button-wrapper">
       <button className="button" onClick={() => setShowModal(true)}>Changes on panels</button>
       </div>
        <SelectChanges show={showModal} onClose={() => setShowModal(false)} />

      </div>
    </div>
  );
};

export default SolarPanelModal;