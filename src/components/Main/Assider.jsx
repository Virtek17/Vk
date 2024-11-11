const Assider = ({ img, minutesSting, seceondsString, isTimerRunning }) => {
  return (
    <div className="asside">
      <div className="asside_item">
        {isTimerRunning && img && (
          <img
            src={img}
            noBorder
            style={{ maxHeight: "50px", maxWidth: "45px" }}
          />
        )}
        <div className="timeBuster">
          {minutesSting}:{seceondsString}
        </div>
      </div>
    </div>
  );
};

export default Assider;
