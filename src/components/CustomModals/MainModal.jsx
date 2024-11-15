import cross from "../../../public/buttons/cross.svg";
import "./MainModal.css";

const MainModal = ({ onClose, isModalOpen, children, headerChildren }) => {
  return (
    <div
      className={`modalBackground ${isModalOpen ? "active" : ""}`}
      onClick={onClose}
    >
      <div className="modalActive" onClick={(e) => e.stopPropagation()}>
        <div className="modalClose" onClick={onClose}>
          <img src={cross} alt="cross" />
        </div>
        <div>{headerChildren}</div>
        <div className="modalWindow">{children}</div>
      </div>
    </div>
  );
};

export default MainModal;
