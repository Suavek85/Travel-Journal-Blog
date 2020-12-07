export default function(data, elem) {
    const { posts } = data.blog;
    const itemsArr = posts && posts.map(el => {
      const item = el.frontmatter[elem];
      if (item  && item.includes(',')) return item.split(', ');
      return item;
    });
    const filteredItemsArr = itemsArr.filter(el => el != null);
  
    return [...new Set(filteredItemsArr.flat())];
}