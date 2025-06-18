import './changingPanelModel.css'
const ChangingPanelsModal = ({ onClose }) => {
  return (
    <div className="modal-backdrop1" onClick={onClose}>
            <div className="modal-content1" onClick={e => e.stopPropagation()}>
                <span className="close-btn1" onClick={onClose}>&times;</span>
    <div className="nested-modal">
      <h3>Changing Existing Panels</h3>
      <div className="panel-details">
        <div className= "first-row">
           <input type= "text" placeholder= "No of Panel"/>
            </div>
        <div className= "second-row">
            <div className="box11">
              <input type= "text" placeholder= "Panel mode code"/>
                </div>
            <div className="box11">
              <input type="text" placeholder="No of Panels"/>
                </div>
            <div className="box11">
              <input type="text" placeholder= "watage of panels"/>
                </div>
        </div>
        </div>
      <button className="button1" onClick={onClose}>Done</button>
    </div>
    </div>
    </div>
  );
};

export default ChangingPanelsModal;
