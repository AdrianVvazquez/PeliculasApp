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

// main.addEventListener('click', (e) => {
//     // console.log(e.target);

//     if(e.target){
//         e.target.tagName == 'IMG' ? console.log(e.target.src) : null;
//         e.target.tagName == 'H2' ? console.log(e.target) : null;
//         e.target.tagName == 'A' ? console.log("AA") : null;

//         // console.log(e.target.src);
//     }

// })

// el.addEventListener('click', (e) => {
//     // const pelicula = document.getElementById('pelicula-div');
//     datosPelicula(e);
// })