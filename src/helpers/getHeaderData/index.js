import React from'react';
import getItemData from './getItemData'
import getSize from './getSize'
import getStyledHeaderElements from './getStyledHeaderElements'
import getPassedDays from './getPassedDays'

export default function getHeaderData(data) {
  const uniquePlaces = getItemData(data, 'place');
  const uniqueLandmarks = getItemData(data, 'landmarks');
  const daysPassed = getPassedDays(data);

  const style = {fontSize: '34px', color: 'yellow'}
  const daysPassedHeader = ( 
    <span style={style}>{ getPassedDays(data) } days since the journey started</span> 
  )

  const itemData = [ 
    {  
      count: uniquePlaces.length,
      size: getSize(uniquePlaces.length),
      name: 'Places',
      header: getStyledHeaderElements(uniquePlaces )
    }, 
    {  
      count: uniqueLandmarks.length, 
      size: getSize(uniqueLandmarks.length),
      name: "Landmarks",
      header: getStyledHeaderElements(uniqueLandmarks)
    }, 
    {  
      count: daysPassed, 
      size: getSize(daysPassed),
      name: "Days passed",
      header: daysPassedHeader
    },
  ];

  return itemData;
}