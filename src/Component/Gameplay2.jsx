import Styles from "./Gameplay2.module.css";

const Gameplay2 = () => {
  return (
    <div className={Styles.round2}>
      {" "}
      {/* Adjust the style for round2 */}
      <div className={Styles.topframe}>
        <h1>Round 2</h1>
        <h3>Guess The Dialogue</h3>
        <img src="./Images/mt.jpg" alt="Movies Talk" />
        <h3>Round 2 Referee</h3>
        <div className={Styles.arrow}>
          <img src="./Images/arrow.png" alt="Arrow" />
        </div>
      </div>
      <div className={Styles.Frameimg}></div>
    </div>
  );
};

export default Gameplay2;
