
// API information.
const apiUrl = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1';
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
// Selecting our Elements.
const main = document.getElementById("main");
const peliculasMain = document.getElementById("peliculas-main");
// Barra de búsqueda
const searchBarForm = document.getElementById("searchForm");
const searchBarInput = document.getElementById("search");

const showMovies = (url) => {
    fetch(url).then(res => res.json())
        .then(function(data){
            data.results.forEach(element => {
            // Creating elements for our data inside the main tag. 
                // console.log(elementt);
                const el = document.createElement('div');
                const a = document.createElement('a');
                const image = document.createElement('img');
                const text = document.createElement('h2');
                
                let nuevoTitulo;
                const cortarTitulo = (title) => title.length > 20 
                ? nuevoTitulo = title.substring(0,20)+'...'
                : nuevoTitulo = title

                text.innerHTML = `${cortarTitulo(element.title)}`;
                image.src = IMGPATH + element.poster_path;
                
                a.setAttribute("href",`PeliculaInfo.html?title=${element.title}`);
                el.classList.add('pelicula-div');
                // el.addEventListener('click', () => {
                //     window.location.href=`PeliculaInfo.html?title=${element.title}&n=123`;
                // })

                // a.setAttribute('href', './DatosReservacion.html'+{});
                
                el.appendChild(a);
                image.setAttribute("alt", element.title);
                a.appendChild(image);
                a.appendChild(text);
                main.appendChild(el);
                peliculasMain.appendChild(el);
            })
        })
}

const getUrlParams = () => {
    
}