import { Children } from "react";
import cross from "../../assets/cross.svg";
import "./MainModal.css";

const MainModal = ({ onClose, isModalOpen, children }) => {
  return (
    <div
      className={`modalBackground ${isModalOpen ? "active" : ""}`}
      onClick={onClose}
    >
      <div className="modalActive" onClick={(e) => e.stopPropagation()}>
        <div className="modalClose" onClick={onClose}>
          <img src={cross} alt="cross" />
        </div>

        <div className="modalWindow">{children}</div>
      </div>
    </div>
  );
};

export default MainModal;
