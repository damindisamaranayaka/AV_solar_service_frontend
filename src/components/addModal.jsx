import "./addModal.css";
import { useNavigate } from "react-router-dom";

const AddModal = ({ show, onClose }) => {
  const navigate = useNavigate();
  const handleDetailsClick = () => {
    navigate("/newprojectcustomerdetail");
  };
  const handleDetailsClick1 = () => {
    navigate("/newprojectcustomerexisting");
  };
  if (!show) return null;

  return (
    <div className="modal-backdrop3" onClick={onClose}>
      <div className="modal-content3" onClick={(e) => e.stopPropagation()}>
        <span className="close-btn3" onClick={onClose}>
          &times;
        </span>
        <div className="combined">
          <p className="new" onClick={handleDetailsClick}>
            New Customer
          </p>
          <hr className="line" />
          <p className="exit" onClick={handleDetailsClick1}>
            Existing Customer
          </p>
        </div>
      </div>
    </div>
  );
};

export default AddModal;
