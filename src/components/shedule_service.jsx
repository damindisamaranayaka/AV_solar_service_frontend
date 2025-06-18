import './scheduleService.css';
import PrintIcon from '@mui/icons-material/Print';

const ScheduleService = ({show, onClose}) => {
     if (!show) return null;
return(
    <div className="modal-backdrop2" onClick={onClose}>
      <div className="modal-content2" onClick={e => e.stopPropagation()}>
        <span className="close-btn2" onClick={onClose}>&times;</span>
        <div className="topic1">
        <div className="print">
            <PrintIcon />
        </div>
        <h3>Schedule Next Service</h3>
        </div>
        <div className="group">
        <div className= "round">
            <span>Service round</span>
            <input type="text11" placeholder="3rd round"/>
            </div>
        <div className= "assigner">
            <span>Assigner</span>
            <input type="text11" placeholder="assigner"/>
            </div>
        <div className= "date">
            <span>Date</span>
            <input type="text11" placeholder="yyyy-mm-dd"/>
            </div>
            </div>
        <button className="button2" onClick={onClose}>Schedule</button>
    </div>
    </div>

)
};

export default ScheduleService;