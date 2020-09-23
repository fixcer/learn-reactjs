import React from 'react';
// import Accordion from './components/Accordion';
import Search from './components/Search';

// const items = [
//   {
//     title: 'What is React?',
//     content: 'React is a frontend javascript framework',
//   },
//   {
//     title: 'Why use React?',
//     content: 'React is a favorite JS library among engineers',
//   },
//   {
//     title: 'How do you React?',
//     content: 'You use React by creating components',
//   },
// ];

const App = () => {
  return (
    <div className='ui container'>
      <br />
      {/* <Accordion items={items} /> */}
      <Search />
    </div>
  );
};

export default App;
