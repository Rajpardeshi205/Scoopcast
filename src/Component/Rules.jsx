import Styles from "./Rules.module.css";

const Rules = ({ toggle }) => {
  return (
    <div className={Styles.box}>
      <div className={Styles.rules}>
        <h1>Rules</h1>
        <p>
          1. This Game is divided into 4 parts of different Games (Use Desktop)
        </p>
        <p>
          2. Each Game will be played by 3 Players, and the remaining one will
          be, referee.
        </p>
        <p>3. Referee will change in each game.</p>
        <p>
          4. It is job of referee to decide, who called out. the Answer first.
        </p>
        <p>
          6. If everybody fail to answer, and gave up then referee will get
          points.
        </p>
      </div>

      <button className={Styles.start_btn} onClick={toggle}>
        Start Game
      </button>
    </div>
  );
};

export default Rules;
