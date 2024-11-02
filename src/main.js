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
    
    // moviesSection.innerHTML=" ";
    generateMoviesContainer(movies,moviesSection);

    // movies.forEach((movie)=>{
    //     const movieContainer = document.createElement('div');
    //     movieContainer.classList.add('movie-container')
    //     const movieImg = document.createElement('img')
    //     movieImg.setAttribute('src','https://image.tmdb.org/t/p/w185' + movie.poster_path);
    //     movieImg.setAttribute('alt', movie.title)

    //     movieContainer.appendChild(movieImg)
    //     moviesSection.appendChild(movieContainer)
    // })
}

async function getCategoriesMovies(){
    const { data } = await api('genre/movie/list?'+'&language=es');
    const categories = data.genres;
    for (let i = 0; i < data.genres.length; i++) {
        const genre = data.genres[i];
        console.log(`ID: ${genre.id}, Name: ${genre.name}`);
    }
    moviesCategoriesContainer.innerHTML= " ";
    categories.forEach((category)=>{
        const movieCategory = document.createElement('div');
        movieCategory.classList.add('movie-category');
        const categoryTitle = document.createElement('h3');
        categoryTitle.classList.add('category-title');

        categoryTitle.setAttribute('id','id' + category.id)
        const categoryTextTitle = document.createTextNode(category.name)

        categoryTitle.addEventListener('click',()=>{
            location.hash= `#category=${category.id}-${category.name}`
        })
        categoryTitle.appendChild(categoryTextTitle);
        movieCategory.appendChild(categoryTitle);
        moviesCategoriesContainer.appendChild(movieCategory);
    })
}

async function getByMoviesByCategory(id,name){
    console.log("entre aqui y el id es " + id)
    const { data } = await api('discover/movie', {
        params: {
            with_genres: id, 
        },
    });
    const movies = data.results;

    console.log(data.results)
    
    // categoryCollectionContainer.innerHTML=" ";
    titleCategory.textContent=decodeURIComponent(name);
    generateMoviesContainer(movies,categoryCollectionContainer);
    // movies.forEach((movie)=>{
    //     const movieContainer = document.createElement('div');
    //     movieContainer.classList.add('movie-container')
    //     const movieImg = document.createElement('img')
    //     movieImg.setAttribute('src','https://image.tmdb.org/t/p/w185' + movie.poster_path);
    //     movieImg.setAttribute('alt', movie.title)

    //     movieContainer.appendChild(movieImg)
    //     categoryCollectionContainer.appendChild(movieContainer)
    // })
}


function generateMoviesContainer(movies,container){
    container.innerHTML= " ";
    movies.forEach((movie)=>{
        const movieContainer = document.createElement('div');
        movieContainer.classList.add('movie-container')
        const movieImg = document.createElement('img')
        movieImg.setAttribute('src','https://image.tmdb.org/t/p/w185' + movie.poster_path);
        movieImg.setAttribute('alt', movie.title)

        movieContainer.appendChild(movieImg)
        container.appendChild(movieContainer)
    })
}