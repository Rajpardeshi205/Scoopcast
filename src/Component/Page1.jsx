import React from "react";
import Frameimg from "./Framing";
import Gameplay2 from "./Gameplay2";
import Gameplay3 from "./Gameplay3";
import Gameplay4 from "./Gameplay4";
import PointsCalculator from "./PointsCalculator"; // Import the PointsCalculator component
import Styles from "./Page1.module.css";

const Page1 = () => {
  const frames = [
    { imgSrc: "./Images/frame1.png", text: "Immaculate" },
    { imgSrc: "./Images/frame2.jpg", text: "Agyaat" },
    { imgSrc: "./Images/frame3.png", text: "Mortal Engines" },
    { imgSrc: "./Images/frame4.png", text: "24" },
    { imgSrc: "./Images/frame5.png", text: "Baby Driver" },
    { imgSrc: "./Images/frame6.png", text: "Jeepers Creepers 2" },
    { imgSrc: "./Images/frame7.png", text: "Cocaine Bear" },
  ];

  const frames2 = [
    { imgSrc: "./Images/frame8.png", text: "Toy Story" },
    { imgSrc: "./Images/frame9.png", text: "Pulp Fiction" },
    { imgSrc: "./Images/frame10.png", text: "Forrest Gump" },
    { imgSrc: "./Images/frame11.png", text: "Yaadon Ki Baraat" },
    { imgSrc: "./Images/frame12.png", text: "Kalicharan" },
    { imgSrc: "./Images/frame13.png", text: "Dear Zindagi" },
    { imgSrc: "./Images/frame14.png", text: "Cocaine Bear" },
  ];

  const frames3 = [
    { imgSrc: "./Images/frame15.png", text: "Zac Efron" },
    { imgSrc: "./Images/frame16.png", text: "Robert Downey Jr." },
    { imgSrc: "./Images/frame17.png", text: "Sylvester Stallone" },
    { imgSrc: "./Images/frame18.png", text: "John Krasinski" },
    { imgSrc: "./Images/frame19.png", text: "Ryan Reynolds" },
    { imgSrc: "./Images/frame20.png", text: "Eddie Murphy" },
    { imgSrc: "./Images/frame21.png", text: "Dwayne Johnson" },
  ];

  const frames4 = [
    { imgSrc: "./Images/frame22.jpg", text: "Guillermo del Toro" },
    { imgSrc: "./Images/frame23.jpg", text: "George Miller" },
    { imgSrc: "./Images/frame24.jpg", text: "Stanley Kubrick" },
    { imgSrc: "./Images/frame25.jpg", text: "Sam Mendes" },
    { imgSrc: "./Images/frame26.jpg", text: "Peter Jackson" },
    { imgSrc: "./Images/frame27.jpg", text: "Travis Knight" },
    { imgSrc: "./Images/frame28.jpg", text: "David Yates" },
  ];

  return (
    <div className={Styles.Page1}>
      <Frameimg frames={frames} />
      <Gameplay2 />
      <Frameimg frames={frames2} />
      <Gameplay3 />
      <Frameimg frames={frames3} />
      <Gameplay4 />
      <Frameimg frames={frames4} />
      <PointsCalculator /> {/* Add the PointsCalculator component */}
    </div>
  );
};

export default Page1;
