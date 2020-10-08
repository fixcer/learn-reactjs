import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { language: 'english' };
  }

  onLanguageChange = (language) => {
    this.setState({ language });
  };

  render() {
    const text =
      this.state.language === 'english'
        ? 'Select a language:'
        : 'Chọn một ngôn ngữ:';

    return (
      <div className='ui container'>
        <div>
          {text}
          <i
            className='flag us'
            onClick={() => this.onLanguageChange('english')}
          />
          <i
            className='flag vn'
            onClick={() => this.onLanguageChange('vietnamese')}
          />
        </div>

        <ColorContext.Provider value='red'>
          <LanguageContext.Provider value={this.state.language}>
            <UserCreate />
          </LanguageContext.Provider>
        </ColorContext.Provider>
      </div>
    );
  }
}
