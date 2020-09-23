import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SearchBar = () => {
  // Tao mot bien tmpTerm de moi khi nguoi dung go thi cap nhat bien nay
  // Sau 500ms ma nguoi dung khong go them thi no se thanh term va query
  // Neu trong 500ms co thay doi thi dat lai bo dem
  const [tmpTerm, setTmpTerm] = useState('');
  const [term, setTerm] = useState(tmpTerm);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setTerm(tmpTerm);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [tmpTerm]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: term,
        },
      });
      setResults(data.query.search);
    };

    if (term) {
      search();
    }
  }, [term]);

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className='item'>
        <div className='right floated content'>
          <a
            className='ui button'
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            Go
          </a>
        </div>
        <div className='content'>
          <div className='header'>{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className='ui form'>
        <div className='field'>
          <label>Enter Search Term</label>
          <input
            value={tmpTerm}
            onChange={(e) => setTmpTerm(e.target.value)}
            className='input'
            type='text'
          />
        </div>
      </div>
      <div className='ui celled list'>{renderedResults}</div>
    </div>
  );
};

export default SearchBar;
