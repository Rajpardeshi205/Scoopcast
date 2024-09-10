import Styles from "./Gameplay.module.css";
import Page1 from "./Page1";
import PointsCalculator from "./PointsCalculator";
const Gameplay = () => {
  return (
    <div className={Styles.round1}>
      <div className={Styles.topframe}>
        <h1>Round 1</h1>
        <h3>Guess The Frame</h3>
        <img src="./Images/dn.jpg" alt="DesiNerd Logo" />
        <h3>Round 1 Referee</h3>
        <div className={Styles.arrow}>
          <img src="./Images/arrow.png" alt="Arrow" />
        </div>
      </div>

      <div className={Styles.Frameimg}>
        <Page1 />
      </div>
      <PointsCalculator />
    </div>
  );
};

export default Gameplay;
