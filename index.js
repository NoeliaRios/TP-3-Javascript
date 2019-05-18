const apiKey = 'd1baa5f45cdb7ee2c85290a0dfdcbfb8';
const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;



const input = document.querySelector('#search');
const list = document.querySelector('popular-wrapper');
const image = document.querySelector('.popular-wrapper .list img');
const title = document.querySelector('.popular-wrapper .list title');


// const rated = document.querySelector('#rated');
// const year = document.querySelector('#year');
// const genre = document.querySelector('#genre');
// const description = document.querySelector('.movie-info .description');
// const writtenBy = document.querySelector('.movie-info .written-by span');
// const directedBy = document.querySelector('.movie-info .directed-by span');
// const starring = document.querySelector('.movie-info .starring span');
// const imageBlur = document.querySelector('.poster-blur img');

// input.addEventListener('keypress', function(e){
//     if (e.keyCode ===13){
//         const movieName = input.value;
//         const url = `https://www.omdbapi.com/?apikey=2fb7569a&t=${movieName}`;

//         fetch(url)
//             .then(res => res.json())
//             .then(data =>{
//                 const movie = data.results;
//                 const modal = '';


//             })
//     }
// })


fetch(url)
    .then(res => res.json())
    .then(data =>{
        const movie = data.results;
        
        
        image.src = movie.poster_path;
        title.innerText = movie.title;
    })