import React from 'react';
import Button from './Button';
import Field from './Field';

class UserCreate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className='ui form'>
        <Field />
        <Button />
      </div>
    );
  }
}

export default UserCreate;
