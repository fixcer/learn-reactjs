// import React from 'react';
// import { connect } from 'react-redux';
// import { increment, decrement } from '../actions/index';

// const Counter = ({ counter, increment, decrement }) => {
//   return (
//     <div>
//       <button className='ui secondary button' onClick={decrement}>
//         Decrement
//       </button>
//       <div className='ui label'>{counter}</div>
//       <button className='ui primary button' onClick={increment}>
//         Increment
//       </button>
//     </div>
//   );
// };

// const mapStateToProps = (state) => {
//   return { counter: state.counter };
// };

// export default connect(mapStateToProps, { increment, decrement })(Counter);

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../actions/index';

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <button
        className='ui secondary button'
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
      <div className='ui label'>{counter}</div>
      <button
        className='ui primary button'
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;
