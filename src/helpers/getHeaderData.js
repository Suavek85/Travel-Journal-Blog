
const getItemData = (data, elem) => {
  const { posts } = data.blog;

  const itemsArr = posts && posts.map(el => {
    const item = el.frontmatter[elem];
    if (item && item.includes(',')) return item.split(', ');
    return item;
  });

  return [...new Set(itemsArr.flat())];
}

export default function getHeaderData(data) {
  const uniquePlaces = getItemData(data, 'place');
  const uniqueLandmarks = getItemData(data, 'landmarks');
  const itemData = [ 
    {  count: uniquePlaces.length, 
       name: 'Places' }, 
    {  count: uniqueLandmarks.length, 
      name: "Landmarks" }, 
    {  count: 111, 
       name: "Days passed" },
  ];

  return itemData;
}