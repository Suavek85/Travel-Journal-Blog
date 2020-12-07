export default function(data) {
    const { posts } = data.blog;
    const startDateElemArr = posts.filter(el => el.frontmatter.start !== null );
    const startDate = startDateElemArr[0].frontmatter.start
    const startTime = new Date(startDate).getTime();
    const todaysTime = new Date().getTime();
    const difference = todaysTime - startTime;
    const differenceInDays = Math.ceil(difference / (1000 * 3600 * 24));
  
    return differenceInDays
  }