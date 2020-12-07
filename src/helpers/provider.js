import React, { useState, createContext } from 'react';

export const myContext = createContext();

const Provider = props => {

  const DEFAULT_STATE = ( <h1 style={{ textAlign: 'center' }}>Driving around<br></br>Andalucia</h1> )

  const [ headertext, setHeadertext ] = useState(DEFAULT_STATE);
  const [ toggle, setToggle ] = useState(false);

  return (
    <myContext.Provider value={{
      headertext,
      toggle,
      handleHeaderText: (el) => {
          setToggle(!toggle);
          setHeadertext(el);
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