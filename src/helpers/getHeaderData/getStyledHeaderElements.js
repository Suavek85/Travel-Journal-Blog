
import React from'react';

export default function(set) {
    const arr = Array.from(set);
    const getStyle = (color, fontSize, fontWeight) => { 
      return { color, fontSize, fontWeight, paddingRight: '10px' }
    }
    const styleOne = getStyle('pink', '21px')
    const styleTwo = getStyle('#fdfd96', '18px', 'bold')
    const isOdd = num => (num % 2) == 1
    const getEl = (arg, el) => <span style={{...arg}} > { el } </span>
    const newarr = arr.map((el, i) => isOdd(i) ? getEl(styleOne, el) : getEl(styleTwo, el) )
  
    return newarr
}