import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import flv from 'flv.js';
import { fetchStream } from '../../actions';

const StreamShow = ({ match, fetchStream, stream }) => {
  const videoRef = useRef();
  const player = useRef(null);

  const buildPlayer = () => {
    const { id } = match.params;

    if (player.current || !stream) {
      return;
    }

    if (stream && flv.isSupported()) {
      player.current = flv.createPlayer({
        type: 'flv',
        url: `http://localhost:8000/live/${id}.flv`,
      });
      player.current.attachMediaElement(videoRef.current);
      player.current.load();
    }
  };

  useEffect(() => {
    const { id } = match.params;
    fetchStream(id);
    buildPlayer();

    // eslint-disable-next-line
  }, [match]);

  useEffect(() => {
    buildPlayer();

    return function cleanUp() {
      if (player.current) {
        player.current.destroy();
      }
    };

    // eslint-disable-next-line
  }, [match, stream]);

  if (!stream) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <video ref={videoRef} style={{ width: '100%' }} controls></video>
      <h1>{stream.title}</h1>
      <h5>{stream.description}</h5>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);
