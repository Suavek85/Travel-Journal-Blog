
import React from'react';

const getItemData = (data, elem) => {
  const { posts } = data.blog;

  const itemsArr = posts && posts.map(el => {
    const item = el.frontmatter[elem];
    if (item && item.includes(',')) return item.split(', ');
    return item;
  });

  return [...new Set(itemsArr.flat())];
}

export const getPassedDays = (data) => {
  const { posts } = data.blog;
  const startDateElemArr = posts.filter(el => el.frontmatter.start !== null );
  const startDate = startDateElemArr[0].frontmatter.start
  const startTime = new Date(startDate).getTime();
  const todaysTime = new Date().getTime();
  const difference = todaysTime - startTime;
  const differenceInDays = Math.ceil(difference / (1000 * 3600 * 24));
  return differenceInDays
}

const getStyledHeaderElements = (set) => {
  const arr = Array.from(set);

  const styleOne = {
    color: 'pink',
    fontSize: '20px',
  }
  const styleTwo = {
    color: 'orange',
    fontSize: '16px',
  }
  
  const isOdd = num => (num % 2) == 1

  const newarr = arr.map((el, i) => {

    if (isOdd(i)) {
      return (<span style={styleOne} >{ el } </span>)
    }

    if (!isOdd(i)) {
      return (<span style={styleTwo} >{ el } </span>)
    }

})

  return newarr
}

const getSize = item => item > 9



export default function getHeaderData(data) {

  const uniquePlaces = getItemData(data, 'place');
  const uniqueLandmarks = getItemData(data, 'landmarks');
  const daysPassed = getPassedDays(data);

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
      header: daysPassed
    },
  ];

  return itemData;
}