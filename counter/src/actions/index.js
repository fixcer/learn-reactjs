const NUMBER = 1;

export const increment = (dispatch) => {
  return {
    type: 'INCREMENT',
    payload: NUMBER,
  };
  // dispatch({ type: 'INCREMENT', payload: NUMBER });
};

export const decrement = (dispatch) => {
  return {
    type: 'DECREMENT',
    payload: NUMBER,
  };
  // dispatch({ type: 'DECREMENT', payload: NUMBER });
};
