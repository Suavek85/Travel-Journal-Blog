import React, { useState, createContext } from 'react';

export const myContext = createContext();

const Provider = props => {

  const DEFAULT_STATE = ( <h1 style={{ textAlign: 'center' }}>Driving around<br></br>Andalucia</h1> )

  const [ expanded, setExpanded ] = useState(DEFAULT_STATE);
  const [ toggle, setToggle ] = useState(false);

  return (
    <myContext.Provider value={{
      expanded,
      toggle,
      changeExpanded: (el) => {
          setToggle(!toggle);
          setExpanded(el);
          console.log(el)
      }
    }}>
      {props.children}
    </myContext.Provider>
  )
};


export default ({ element }) => (
    <Provider>
      {element}
    </Provider>
  );