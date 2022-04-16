import React from 'react';

const BoardContext = React.createContext({
  lists: [],
  items: [],
  addItem: item => {},
  removeItem: id => {},
});

export default BoardContext;
