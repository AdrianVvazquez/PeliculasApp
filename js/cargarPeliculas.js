
/* call the showMovies function that requests the movie data from the Api using fetch.
 Then it puts those data in the main HTML tag by creating elements for those data. */

const {apiUrl} = Api();
const size = false;

showMoviesAll(apiUrl, size);