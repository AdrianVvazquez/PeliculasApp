const getApiParams = () => {

    const apiUrl = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1';
    const imgPath = "https://image.tmdb.org/t/p/w1280";
    const searchApi = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
        
    return { apiUrl, imgPath, searchApi };
}

const getUrlParams = () => {

    const urlRef = window.location.href;

    paramString = new RegExp('(.*)[?](.*)').exec(urlRef);
    // fin de función si no existen parámetros en la url
    if (paramString === null) {
        return false;
    }

    if (paramString[2].includes("&")) {
        var paramList = paramString[2].split("&");
    } else {
        var paramList = new Array(paramString[2]);
    }

    paramList = paramList.map( param => {
        param = param.split("=");
        return {
            param: param[0],
            valor: param[1]
        }
    })

    return paramList;
}

const tituloCorto = (title) => {
    
    title.length > 20
    ? title = title.substring( 0, 20 ) + '...'
    : title = title
    // console.log(title)
    return title;
}

const getPeliculas = (url) => {
    
    const { imgPath } = getApiParams();

    fetch(url).then(res => res.json())
        .then(({results}) => results.forEach( (pelicula) => {

            const main = document.getElementById('peliculas-main');
            const div = document.createElement('div');
            const link = document.createElement('a');
            const img = document.createElement('img');
            const titulo = document.createElement('h2');

            const title_text = tituloCorto(pelicula.title);
        
            titulo.innerHTML = `${title_text}`;
            img.src = imgPath + pelicula.poster_path;
        
            div.classList.add('pelicula-div');
            link.setAttribute("href",`PeliculaInfo.html?title=${pelicula.title}`);
            img.setAttribute("alt", pelicula.title);
        
            link.appendChild(img);
            link.appendChild(titulo);
            div.appendChild(link);
            main.appendChild(div);
        }))
}

const getPeliculaByTitle = ( title ) => {

    const { searchApi, imgPath } = getApiParams();
    const url = searchApi + title;

    var list_tmp = new Array();

    fetch(url).then(res => res.json())

        .then( ({results}) => results.forEach( (element) => {
            list_tmp.push(element);
        }) 
        )
        .then( () => {
            const pelicula = list_tmp.find( (element, idx) => idx === 0)
            console.log({pelicula})
            const title_text = pelicula.title;
            const fecha_lanzamiento = pelicula.release_date;
            const imagen = pelicula.poster_path;
            const rate_text = pelicula.vote_average;
            const resumen_text = pelicula.overview;

            const div = document.getElementById('container');
            const div_datos = document.getElementById('datos');
            const img = document.createElement('img');
            const titulo = document.createElement('h2');
            const rate = document.createElement('h3');
            const fecha = document.createElement('h3');
            const resumen = document.createElement('p');
            
            titulo.innerHTML = title_text;
            rate.innerHTML = `Valoración: ${rate_text}`;
            fecha.innerHTML = `Lanzamiento: ${fecha_lanzamiento}`;
            resumen.innerHTML = `Resumen: <br>${resumen_text}`;

            img.src = imgPath + imagen;
            img.setAttribute("alt", title_text);

            div.appendChild(titulo);
            div.appendChild(img);
            div_datos.appendChild(rate);
            div_datos.appendChild(fecha);
            div_datos.appendChild(resumen);
        })

}
