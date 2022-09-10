
const [ title ] = getUrlParams();
const { valor : peliculaTitle } = title;

getPeliculaByTitle( peliculaTitle );