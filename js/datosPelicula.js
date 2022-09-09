

const datosPelicula = () => {
    const pelicula1 = window.location.href;
    // const pelicula = getUrlParams(pelicula1);
    // const titulo = pelicula.title;
    // const fecha_lanzamiento = pelicula.release_date;
    // const img = pelicula.poster_path;
    // const valoracion = pelicula.vote_average;
    // const datosPelicula_div = document.getElementById("datos-pelicula");
    // console.log(pelicula1);
    // a = document.createElement("img")
    // a.href = img
    // datosPelicula_div.appendChild(a)
    
    paramString = new RegExp('(.*)[?](.*)').exec(pelicula1);
    console.log(paramString)
    // fin de función si no existe
    if (paramString === null) {
        return false;
    }

    if (paramString[2].includes("&amp;")) {
        var paramList = paramString[2].split("&amp;");
    } else {
        var paramList = paramString[2].split("&");
    }

    paramList = paramList.map( param => {
        param = param.split("=");
        return {
            param: param[0],
            valor: param[1]
        }
    })
    
    const searchTerm = paramList[0].valor;
    showMovies(SEARCHAPI + searchTerm);


}
datosPelicula();