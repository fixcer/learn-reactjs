import React, { useState, useEffect, useRef } from 'react';

const GoogleAuth = () => {
  const [isSignedIn, setIsSignedIn] = useState(null);
  const auth = useRef(null);

  useEffect(() => {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '801432487187-2k7ipbd45n9k8kt67otncq97rbb4cjht.apps.googleusercontent.com',
          scope: 'email',
        })
        .then(() => {
          auth.current = window.gapi.auth2.getAuthInstance();
          setIsSignedIn(auth.current.isSignedIn.get());
          onAuthChange(window.gapi.auth2.getAuthInstance().isSignedIn.get());
          auth.current.isSignedIn.listen(onAuthChange);
        });
    });

    return () => {};
  }, [isSignedIn]);

  const onAuthChange = () => {
    setIsSignedIn(auth.current.isSignedIn.get());
  };

  const onSignIn = () => {
    auth.current.signIn();
  };

  const onSignOut = () => {
    auth.current.signOut();
  };

  const renderAuthButton = () => {
    if (isSignedIn === null) {
      return null;
    } else if (isSignedIn) {
      return (
        <button onClick={onSignOut} className='ui red google button'>
          <i className='google icon' />
          Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={onSignIn} className='ui red google button'>
          <i className='google icon' />
          Sign In with Google
        </button>
      );
    }
  };
  return <div>{renderAuthButton()}</div>;
};

export default GoogleAuth;
