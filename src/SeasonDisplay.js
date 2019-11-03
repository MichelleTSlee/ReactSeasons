import "./SeasonDisplay.css";
import React from "react";

const seasonConfig = {
  //JavaScript objects stored in variable
  summer: {
    text: "It is hot",
    iconName: "sun icon"
  },
  winter: {
    text: "Snowman time",
    iconName: "snowflake icon"
  }
};

const getSeason = (lat, month) => {
  //method - lat, month variables
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = props => {
  //Calls getSeason method, stores result in season
  const season = getSeason(props.lat, new Date().getMonth());

  //Saves season text and iconName vales to text & iconName variables
  const { text, iconName } = seasonConfig[season];

  return (
    //This is what gets displayed. See CSS styling too
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName}`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName}`} />
    </div>
  );
};

export default SeasonDisplay;
