// import React from 'react';
// import LanguageContext from '../contexts/LanguageContext';

// export default class Button extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {};
//   }

//   static contextType = LanguageContext;

//   render() {
//     const text = this.context === 'english' ? 'Submit' : 'Xác nhận';
//     return (
//       <>
//         <button className='ui button primary'>{text}</button>
//       </>
//     );
//   }
// }

import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

export default class Button extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  renderSubmit = (value) => {
    return value === 'english' ? 'Submit' : 'Xác nhận';
  };

  renderButton = (color) => {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {(value) => this.renderSubmit(value)}
        </LanguageContext.Consumer>
      </button>
    );
  };

  render() {
    return (
      <ColorContext.Consumer>
        {(color) => this.renderButton(color)}
      </ColorContext.Consumer>
    );
  }
}
