import { useState, useCallback } from "react";
import Styles from "./Framing.module.css";

const Framing = ({ frames }) => {
  const [revealed, setRevealed] = useState({});

  const handleReveal = useCallback((index) => {
    setRevealed((prev) => ({ ...prev, [index]: true }));
  }, []);

  return (
    <div className={Styles.Frameimg}>
      {frames.map((frame, index) => (
        <div
          key={index}
          className={`${Styles.img_container} ${
            revealed[index] ? Styles.revealBtn : ""
          }`}
        >
          {/* Load image immediately and blur it when revealed */}
          <img
            src={frame.imgSrc} // Image is always loaded
            alt={`Frame${index + 1}`}
            className={`${Styles.frame_img} ${
              revealed[index] ? Styles.blurred : ""
            }`} // Apply blur when revealed
            loading="lazy"
          />
          {revealed[index] && (
            <div className={Styles.reveal_text}>{frame.text}</div>
          )}
          <button
            className={Styles.reveal_btn}
            onClick={() => handleReveal(index)}
          >
            Reveal
          </button>
        </div>
      ))}
    </div>
  );
};

export default Framing;
