import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { editStream, fetchStream } from '../../actions';
import StreamForm from './StreamForm';

const StreamEdit = (props) => {
  const { editStream, fetchStream, match, stream } = props;

  const onSubmit = (formValues) => {
    editStream(match.params.id, formValues);
  };

  useEffect(() => {
    fetchStream(match.params.id);
    // eslint-disable-next-line
  }, []);

  if (!stream) {
    return <div>Loading...</div>;
  }

  const { title, description } = stream;

  return (
    <>
      <h3>Edit a Stream</h3>
      <StreamForm initialValues={{ title, description }} onSubmit={onSubmit} />
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { editStream, fetchStream })(
  StreamEdit
);
