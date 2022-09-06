// API information.
const apiUrl = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1';
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
// Selecting our Elements.
const main = document.getElementById("main");
// Barra de búsqueda
const searchBarForm = document.getElementById("searchForm");
const searchBarInput = document.getElementById("search");
/* call the showMovies function that requests the movie data from the Api using fetch.
 Then it puts those data in the main HTML tag by creating elments for those data. */
showMovies(apiUrl);
function showMovies(url){
    fetch(url).then(res => res.json())
    .then(function(data){
    data.results.forEach(element => {
      // Creating elements for our data inside the main tag. 
        console.log(element);
        const el = document.createElement('div');
        const a = document.createElement('a');
        const image = document.createElement('img');
        const text = document.createElement('h2');

        text.innerHTML = `${element.title}`;
        image.src = IMGPATH + element.poster_path;
        el.classList.add('pelicula-div');

        // a.setAttribute('href', './DatosReservacion.html'+{});
        
        el.appendChild(a)
        a.appendChild(image);
        a.appendChild(text);
        main.appendChild(el);
    });
});
}

const datosPelicula = (url) => {

}

// Prevent the Form from submitting if the search bar is empty.
searchBarForm.addEventListener("submit", (e) => {
    e.preventDefault();
    main.innerHTML = '';
    
    const searchTerm = searchBarInput.value;
 /* Adding the value writen in the search bar to the search Api,
    in order to get the movies we search for. */
    if (searchTerm) {
        showMovies(SEARCHAPI + searchTerm);
        searchBarInput.value = "";
    }
});

main.addEventListener('click', (e) => {
    // console.log(e.target);

    if(e.target){
        e.target.tagName == 'IMG' ? console.log(e.target.src) : null;
        e.target.tagName == 'H2' ? console.log(e.target) : null;
        e.target.tagName == 'A' ? console.log("AA") : null;

        console.log(e.target.src);
    }

})