import React, { useEffect, useState } from 'react';
import Season from './screens/Season/Season';
import Spinner from './screens/Spinner/Spinner';

const App = () => {
  const [lat, setLat] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        setLat(position.coords.latitude);
      },
      (err) => {
        setErrorMessage(err.message);
      }
    );
  }, []);

  const renderContent = () => {
    if (errorMessage && !lat) {
      return <div>Error: {errorMessage}</div>;
    }

    if (!errorMessage && lat) {
      return <Season lat={lat} />;
    }

    return <Spinner message='Please accept location request' />;
  };
  return <div className='container'>{renderContent()}</div>;
};

export default App;
