const header = document.querySelector("header")
const sectionPosterMovie = document.querySelector(".poster-movie");
const sectionFavoriteMovie = document.querySelector(".favorite__movies");
const sectionBestMovie = document.querySelector(".best__movies");
const sectionInformationMovie = document.querySelector(".information-movie");
const sectionSearchMovie = document.querySelector(".search-movie")
const sectionMoviesCategories = document.querySelector(".movies-categories");
const returnInformationMovie = document.querySelector(".return__icon--information-movie");
const returnSearchMovie = document.querySelector(".return__icon--search-movie");

const api = axios.create({
    baseURL : 'https://api.themoviedb.org/3/',
    headers: 'Content-Type:application/json;charset=utf-8',
    params:{
        'api_key': API_KEY,
    },
});



returnInformationMovie.addEventListener("click",()=>{
    sectionPosterMovie.classList.toggle('inactive');
    sectionFavoriteMovie.classList.toggle('inactive');
    sectionBestMovie.classList.toggle('inactive');
    sectionInformationMovie.classList.toggle('inactive');
    sectionMoviesCategories.classList.toggle('inactive');
})


returnSearchMovie.addEventListener("click",()=>{
    
    sectionPosterMovie.classList.toggle('inactive');
    // sectionFavoriteMovie.classList.toggle('inactive');
    sectionBestMovie.classList.toggle('inactive');
    sectionSearchMovie.classList.toggle('inactive');
    header.classList.toggle('inactive')
    sectionMoviesCategories.classList.toggle('inactive');

})

async function getTrendingMoviesPreview(){
    const { data } = await api('trending/movie/day');
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

async function getCategoriesMovies(){
    const { data } = await api('genre/movie/list?'+'&language=es');
    const categories = data.genres;
    categories.forEach((category)=>{
        const moviesCategoriesContainer = document.querySelector('.movies-categories--container');
        const movieCategory = document.createElement('div');
        movieCategory.classList.add('movie-category');
        const categoryTitle = document.createElement('h3');
        categoryTitle.classList.add('category-title');

        categoryTitle.setAttribute('id','id' + category.id)
        const categoryTextTitle = document.createTextNode(category.name)

        categoryTitle.appendChild(categoryTextTitle);
        movieCategory.appendChild(categoryTitle);
        moviesCategoriesContainer.appendChild(movieCategory);

    })
}
// getTrendingMoviesPreview()
// getCategoriesMovies()
