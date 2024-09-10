import Styles from "./Gameplay3.module.css";

const Gameplay3 = () => {
  return (
    <div className={Styles.round3}>
      <div className={Styles.topframe}>
        <h1>Round 3</h1>
        <h3>Guess The Actor</h3>
        <img src="./Images/ss.jpg" alt="Super Super" />
        <h3>Round 3 Referee</h3>
        <div className={Styles.arrow}>
          <img src="./Images/arrow.png" alt="Arrow Round" />
        </div>
      </div>
      <div className={Styles.Frameimg}></div>
    </div>
  );
};

export default Gameplay3;
