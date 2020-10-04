import React from 'react';
import { Field, reduxForm } from 'redux-form';

const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    errors.title = 'You must enter a title';
  }

  if (!formValues.description) {
    errors.description = 'You must enter a description';
  }

  return errors;
};

const renderInput = ({ input, label, meta }) => {
  const className = `field ${meta.error && meta.touched ? 'error' : ''}`;

  return (
    <div className={className}>
      <label>{label}</label>
      <input {...input} autoComplete='off' />
      {meta.error && meta.touched ? (
        <div className='ui error message'>
          <div className='header'>{meta.error}</div>
        </div>
      ) : null}
    </div>
  );
};

const StreamCreate = (props) => {
  const onSubmit = (formValues) => {
    console.log(formValues);
  };

  return (
    <form className='ui form error' onSubmit={props.handleSubmit(onSubmit)}>
      <Field name='title' component={renderInput} label='Enter Title' />
      <Field
        name='description'
        component={renderInput}
        label='Enter Description'
      />
      <button className='ui button primary'>Submit</button>
    </form>
  );
};

export default reduxForm({
  form: 'streamCreate',
  validate,
})(StreamCreate);
