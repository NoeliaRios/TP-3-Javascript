const apiKey = 'd1baa5f45cdb7ee2c85290a0dfdcbfb8';
const urlPopular = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;
const urlTopRated = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`;
const urlUpcoming = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`;
const urlNowPlaying = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`;

const input = document.querySelector('#search');
const divResults = document.querySelector('#search_page');
const ulSearch = document.querySelector('.results_list');
const photoHome = document.querySelector('.container #photo-home');
const movieDivs = document.querySelectorAll('.container #movies');
const movieList = document.querySelector('#movies .movies_list');
const listTopRated = document.querySelector('#movies .movies_list_toprated');
const listUpcoming = document.querySelector('#movies .movies_list_upcoming');
const listNowPlaying = document.querySelector('#movies .movies_list_nowplaying');


input.addEventListener('keypress', function(e){
    if (e.keyCode === 13) {  
     const q = input.value;

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=a70dbfe19b800809dfdd3e89e8532c9e&query=${q}`)
        .then(res=> res.json())
        .then(data=> {
            const movies = data.results;
            
            ulSearch.innerHTML = movies.map(movie => `<li class="movies_item" id="${movie.id}"><a href=""><div class="movies_poster"><img src="https://image.tmdb.org/t/p/original${movie.poster_path}"/></div><div class="movies_content"><p class="movies_title">${movie.title}</p></div></a></li>`).join('');
            divResults.classList.remove('displayNone');
            movieDivs.classList.add('displayNone');
            photoHome.classList.add('displayNone');




            
            
           
        })
    }    
})


fetch(urlPopular)
    .then(res => res.json())
    .then(data => {
        const primerasPelis = data.results.slice(0, 5);
        
        movieList.innerHTML = primerasPelis.map(movie => `<li class="movies_item" id="${movie.id}"><a href=""><div class="movies_poster"><img src="https://image.tmdb.org/t/p/original${movie.poster_path}"/></div><div class="movies_content"><p class="movies_title">${movie.title}</p></div></a></li>`).join('');

    })

fetch(urlTopRated)
    .then(res => res.json())
    .then(data => {
        const primerasPelis = data.results.slice(0, 5);
        
        listTopRated.innerHTML = primerasPelis.map(movie => `<li class="movies_item" id="${movie.id}"><a href=""><div class="movies_poster"><img src="https://image.tmdb.org/t/p/original${movie.poster_path}"/></div><div class="movies_content"><p class="movies_title">${movie.title}</p></div></a></li>`).join('');

    })

fetch(urlUpcoming)
    .then(res => res.json())
    .then(data => {
        const primerasPelis = data.results.slice(0, 5);
        
        listUpcoming.innerHTML = primerasPelis.map(movie => `<li class="movies_item" id="${movie.id}"><a href=""><div class="movies_poster"><img src="https://image.tmdb.org/t/p/original${movie.poster_path}"/></div><div class="movies_content"><p class="movies_title">${movie.title}</p></div></a></li>`).join('');

    })

fetch(urlNowPlaying)
    .then(res => res.json())
    .then(data => {
        const primerasPelis = data.results.slice(0, 5);
        
        listNowPlaying.innerHTML = primerasPelis.map(movie => `<li class="movies_item" id="${movie.id}"><a href=""><div class="movies_poster"><img src="https://image.tmdb.org/t/p/original${movie.poster_path}"/></div><div class="movies_content"><p class="movies_title">${movie.title}</p></div></a></li>`).join('');

    })





