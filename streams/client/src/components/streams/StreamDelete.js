import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../Modal';
import history from '../../history';
import { connect } from 'react-redux';
import { fetchStream, deleteStream } from '../../actions';

const StreamDelete = ({ match, fetchStream, stream, deleteStream }) => {
  useEffect(() => {
    fetchStream(match.params.id);
    return () => {};
    // eslint-disable-next-line
  }, []);

  const handleDelete = () => {
    deleteStream(match.params.id);
  };

  const renderActions = () => {
    return (
      <>
        <button className='ui negative button' onClick={handleDelete}>
          Delete
        </button>
        <Link to='/' className='ui button'>
          Cancel
        </Link>
      </>
    );
  };

  const renderContent = () => {
    if (!stream) {
      return `Are you sure you want to delete this stream?`;
    }

    return `Are you sure you want to delete the stream with title: "${stream.title}"?`;
  };

  return (
    <div>
      StreamDelete
      <Modal
        title='Delete Stream'
        content={renderContent()}
        actions={renderActions()}
        onDismiss={() => history.push('/')}
      />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
