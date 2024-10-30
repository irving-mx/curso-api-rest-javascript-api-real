const api = axios.create({
    baseURL : 'https://api.themoviedb.org/3/',
    headers: 'Content-Type:application/json;charset=utf-8',
    params:{
        'api_key': API_KEY,
    },
});

async function getTrendingMoviesPreview(){
    const { data } = await api('trending/movie/day');
    const movies = data.results;
    console.log(data.results)
    
    const moviesSection = document.querySelector('.best__movies--slider');
    moviesSection.innerHTML=" ";
    movies.forEach((movie)=>{
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
    const moviesCategoriesContainer = document.querySelector('.movies-categories--container');
    moviesCategoriesContainer.innerHTML= " ";
    categories.forEach((category)=>{
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
