const header = document.querySelector("header")
const sectionPosterMovie = document.querySelector(".poster-movie");
const sectionFavoriteMovie = document.querySelector(".favorite__movies");
const sectionBestMovie = document.querySelector(".best__movies");
const sectionInformationMovie = document.querySelector(".information-movie");
const sectionSearchMovie = document.querySelector(".search-movie")
const returnInformationMovie = document.querySelector(".return__icon--information-movie");
const returnSearchMovie = document.querySelector(".return__icon--search-movie");


returnInformationMovie.addEventListener("click",()=>{
    sectionPosterMovie.classList.toggle('inactive');
    sectionFavoriteMovie.classList.toggle('inactive');
    sectionBestMovie.classList.toggle('inactive');
    sectionInformationMovie.classList.toggle('inactive');
})


returnSearchMovie.addEventListener("click",()=>{
    
    sectionPosterMovie.classList.toggle('inactive');
    sectionFavoriteMovie.classList.toggle('inactive');
    sectionBestMovie.classList.toggle('inactive');
    sectionSearchMovie.classList.toggle('inactive');
    header.classList.toggle('inactive')
})

async function getTrendingMoviesPreview(){
    const res = await fetch('https://api.themoviedb.org/3/trending/movie/day?api_key='+ API_KEY);
    const data = await res.json();
    const movies = data.results;
    console.log(data.results)
    movies.forEach((movie)=>{
        const moviesSection = document.querySelector('.best__movies--slider');
        const movieContainer = document.createElement('div');
        movieContainer.classList.add('movie-container')
        const movieImg = document.createElement('img')
        movieImg.setAttribute('src','https://image.tmdb.org/t/p/w185' + movie.poster_path);
        movieImg.setAttribute('alt', movie.title)

        movieContainer.appendChild(movieImg)
        moviesSection.appendChild(movieContainer)
    })

}
getTrendingMoviesPreview()