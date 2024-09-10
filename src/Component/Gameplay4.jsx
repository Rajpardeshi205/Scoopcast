import Styles from "./Gameplay4.module.css";

const Gameplay4 = () => {
  return (
    <div className={Styles.round4}>
      <div className={Styles.topframe}>
        <h1>Round 4</h1>
        <h3>Guess The Director</h3>
        <img src="./Images/wv.jpg" alt="W Vish" />
        <h3>Round 4 Referee</h3>
        <div className={Styles.arrow}>
          <img src="./Images/arrow.png" alt="Arrow Round" />
        </div>
      </div>
      <div className={Styles.Frameimg}></div>
    </div>
  );
};

export default Gameplay4;
