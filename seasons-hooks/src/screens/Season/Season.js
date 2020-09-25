import React from 'react';
import './Season.css';

const seasonConfig = {
  summer: {
    text: "Let's hit the beach!",
    icon: 'sun icon massive',
  },
  winter: {
    text: 'Burr, it is chilly!',
    icon: 'snowflake icon massive',
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
};

const Season = ({ lat }) => {
  const season = getSeason(lat, new Date().getMonth());
  const { text, icon } = seasonConfig[season];

  return (
    <div className={`${season} season-display`}>
      <i className={`${icon} icon-left`} />
      <h1>{text}</h1>
      <i className={`${icon} icon-right`} />
    </div>
  );
};

export default Season;
