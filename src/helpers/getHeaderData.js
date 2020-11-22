export default function getHeaderData(data) {

    const { posts } = data.blog

    const placesArr = posts && posts.map(el => {
        const { place } = el.frontmatter;
        if (place && place.includes(',')) return place.split(', ');
        return place;
    });
  
    const uniquePlacesArr = [...new Set(placesArr.flat())];
  
    return [ 
      {  nmbr: uniquePlacesArr.length, name: 'Places' }, 
      {  nmbr: 1, name: "Landmarks" }, 
    ]

}