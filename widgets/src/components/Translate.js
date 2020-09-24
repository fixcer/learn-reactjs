import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const LANGUAGES = [
  { label: 'Afrikaans', value: 'af' },
  { label: 'Arabic', value: 'ar' },
  { label: 'French', value: 'fr' },
  { label: 'Hindi', value: 'hi' },
  { label: 'Japanese', value: 'ja' },
  { label: 'Portuguese', value: 'pt' },
  { label: 'Russian', value: 'ru' },
  { label: 'Simplified Chinese', value: 'zh-CN' },
  { label: 'Spanish', value: 'es' },
  { label: 'Swahili', value: 'sw' },
  { label: 'Vietnamese', value: 'vi' },
];

const Translate = () => {
  const [language, setLanguage] = useState(LANGUAGES[10]);
  const [text, setText] = useState('');

  return (
    <div>
      <div className='ui form'>
        <div className='field'>
          <label>Enter Text</label>
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>

      <Dropdown
        label='Select a Language'
        options={LANGUAGES}
        selected={language}
        onSelectedChange={setLanguage}
      />
      <hr />
      <h3 className='ui header'>Output</h3>
      <Convert language={language} text={text} />
    </div>
  );
};

export default Translate;
