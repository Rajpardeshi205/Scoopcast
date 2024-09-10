import React, { useState, useRef } from "react";
import Styles from "./PointsCalculator.module.css";

const PointsCalculator = () => {
  const [points, setPoints] = useState([0, 0, 0, 0]);
  const [showGIFs, setShowGIFs] = useState(false);
  const [winnerIndex, setWinnerIndex] = useState(null);
  const [loserIndex, setLoserIndex] = useState(null);
  const audioRef = useRef(new Audio("./sounds/click.mp3"));

  const addPoints = (index) => {
    setPoints((prevPoints) => {
      const newPoints = [...prevPoints];
      newPoints[index] += 10;
      audioRef.current.play();
      return newPoints;
    });
  };

  const subtractPoints = (index) => {
    setPoints((prevPoints) => {
      const newPoints = [...prevPoints];
      newPoints[index] -= 10;
      return newPoints;
    });
  };

  const handleEndGame = () => {
    const maxPoints = Math.max(...points);
    const minPoints = Math.min(...points);

    setWinnerIndex(points.indexOf(maxPoints));
    setLoserIndex(points.indexOf(minPoints));
    setShowGIFs(true);
  };

  const winnerGIF = `./Gifs/person${winnerIndex + 1}_winner.gif`;
  const loserGIF = `./Gifs/person${loserIndex + 1}_loser.gif`;

  return (
    <div className={Styles.container}>
      {points.map((point, index) => (
        <div key={index} className={Styles.person}>
          <div
            className={Styles.bar}
            style={{ height: `${(point / Math.max(...points)) * 100}%` }} // Dynamic height
          />
          <img
            src={`./Images/person${index + 1}.jpg`} // Placeholder for small round logos
            alt={`Person ${index + 1}`}
            className={Styles.logo}
          />
          <div className={Styles.points}>{point} points</div>
          <div className={Styles.buttons}>
            <button onClick={() => addPoints(index)} className={Styles.addBtn}>
              +10
            </button>
            <button
              onClick={() => subtractPoints(index)}
              className={Styles.subtractBtn}
            >
              -10
            </button>
          </div>
        </div>
      ))}
      <button onClick={handleEndGame} className={Styles.endGameBtn}>
        End Game
      </button>
      {showGIFs && (
        <div className={Styles.videosContainer}>
          <div className={Styles.videoWrapper}>
            <h2>Winner</h2>
            <img className={Styles.video} src={winnerGIF} alt="Winner GIF" />
          </div>
          <div className={Styles.videoWrapper}>
            <h2>Loser</h2>
            <img className={Styles.video} src={loserGIF} alt="Loser GIF" />
          </div>
        </div>
      )}
    </div>
  );
};

export default PointsCalculator;
