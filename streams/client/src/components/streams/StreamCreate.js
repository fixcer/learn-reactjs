import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions/index';
import StreamForm from './StreamForm';

const StreamCreate = (props) => {
  const { createStream } = props;

  const onSubmit = (formValues) => {
    createStream(formValues);
  };

  return (
    <>
      <h3>Create a Stream</h3>
      <StreamForm onSubmit={onSubmit} />
    </>
  );
};

export default connect(null, { createStream })(StreamCreate);
