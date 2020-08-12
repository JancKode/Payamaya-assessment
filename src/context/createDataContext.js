import React, { createContext, useReducer } from 'react';

export default (reducer, actions, initialSate) => {
  const Context = createContext();

  const Provider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialSate);

    const boundActions = {};
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider };
};
