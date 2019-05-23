const apiKey = 'd1baa5f45cdb7ee2c85290a0dfdcbfb8';
const urlPopular = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;


const input = document.querySelector('#search');
const movieList = document.querySelector('.movies .movies_list');
const imageUrl = 'https://image.tmdb.org/t/p/original' ;

fetch(urlPopular)
    .then(res => res.json())
    .then(data => {
        const primerasPelis = data.results.slice(0, 5);
        console.log(primerasPelis);
        movieList.innerHTML = primerasPelis.map(movie => `<li class="movies_item" id="${movie.id}"><a href=""><div class="movies_poster"><img src="https://image.tmdb.org/t/p/original${movie.poster_path}"/></div><div class="movies_content"><p class="movies_title">${movie.title}</p></div></a></li>`).join('');


        




    })