import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

const GoogleAuth = ({ isSignedIn, signIn, signOut }) => {
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
          onAuthChange(window.gapi.auth2.getAuthInstance().isSignedIn.get());
          auth.current.isSignedIn.listen(onAuthChange);
        });
    });

    return () => {};
    // eslint-disable-next-line
  }, []);

  const onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      signIn(auth.current.currentUser.get().getId());
    } else {
      signOut();
    }
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

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn, userId: state.auth.userId };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
