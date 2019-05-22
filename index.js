const apiKey = 'd1baa5f45cdb7ee2c85290a0dfdcbfb8';
const urlPopular = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;



const input = document.querySelector('#search');
const list = document.querySelector('movies_list');
const image = document.querySelector('.movies_list .movies_poster img');
const title = document.querySelector('.movies_list .movies_content p');



fetch(urlPopular)
    .then(res => res.json())
    .then(data => {
        const movies = data.results;
        const movieHeader = document.querySelector('.movies_header');
        const primerasPelis = data.results.slice(0, 5);

        movieHeader.innerHTML = '';

        for (let i = 0; i < movies.length; i++) {
            const movie = movies[i];

            const ul = document.createElement('ul');
            const lista = document.createElement('li');

            lista.innerHTML = '<li class="movies_item">
                <a href="">
                    <div class="movies_poster">
                        <img src="" />
                    </div>
                    <div class="movies_content">
                        <p class="movies_title"></p>
                    </div>
                </a>
            </li>';

            ul.appendChild(lista);

            



            movieHeader.innerHTML += itemDatos;

        }

        image.src = 'https://image.tmdb.org/t/p/original' + movies.poster_path;
        title.innerText = movies.title;




    })




//             if (splice) {
//                 movieObject.splice(4,15)
//             }

