const main = document.getElementById("main");
const peliculasMain = document.getElementById("peliculas-main");

const searchBarForm = document.getElementById("searchForm");
const searchBarInput = document.getElementById("search");

const { apiUrl, searchApi } = getApiParams();

getPeliculas(apiUrl);

searchBarForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const searchTerm = searchBarInput.value;

    main.innerHTML = '';
    main_div = document.createElement('div');
    main_div.setAttribute("id","peliculas-main");
    main.appendChild(main_div);
    
 /* Adding the value writen in the search bar to the search Api,
    in order to get the movies we search for. */
    if (searchTerm) {
        var url = searchApi + searchTerm;

        getPeliculas(url);

        searchBarInput.value = "";
    }
});