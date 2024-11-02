window.addEventListener('DOMContentLoaded',navigator,false);
window.addEventListener('hashchange',navigator,false);

searchIcon.addEventListener('click',()=>{
    location.hash = '#search=';
})

returnHome.forEach(icon =>{
    icon.addEventListener('click',()=>{
        location.hash = '#home';
        console.log("Click return")
    })
})

function navigator(){
    console.log({ location });
    if(location.hash.startsWith('#trends')){
        trendsPage();
    }else if(location.hash.startsWith('#category=')){
        categoriesPage();
    }else if(location.hash.startsWith('#search=')){
        searchMovie();
    }else if(location.hash.startsWith('#informationMovie')){
        informationMovie();
    }else{
        homePage();
    }
}

function trendsPage(){
    console.log("Trends!!!");
}
function searchMovie(){
    console.log("Search Movieeee!!");
    header.classList.add('inactive');
    sectionPosterMovie.classList.add('inactive');
    sectionBestMovie.classList.add('inactive');
    sectionMoviesCategories.classList.add('inactive');
    sectionInformationMovie.classList.add('inactive');
    sectionSearchMovie.classList.remove('inactive');
    sectionCategoryCollection.classList.add('inactive');
}
function informationMovie(){
    console.log('information Movie')
    header.classList.add('inactive');
    sectionPosterMovie.classList.add('inactive');
    sectionBestMovie.classList.add('inactive');
    sectionMoviesCategories.classList.add('inactive');
    sectionSearchMovie.classList.add('inactive');
    sectionInformationMovie.classList.remove('inactive');
    sectionCategoryCollection.classList.add('inactive');
}
function categoriesPage(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    console.log("Categories !!");
    sectionCategoryCollection.classList.remove('inactive');
    header.classList.add('inactive');
    sectionPosterMovie.classList.add('inactive');
    sectionBestMovie.classList.add('inactive');
    sectionMoviesCategories.classList.add('inactive');
    sectionSearchMovie.classList.add('inactive');
    sectionInformationMovie.classList.add('inactive');

    
    const [_,info] = location.hash.split("="); // [#category=,id-name]
    const [categoryId,categoryName]= info.split("-");

    console.log("mandamos el id: "+ categoryId)
    console.log(categoryName)
    getByMoviesByCategory(categoryId,categoryName);
}
function homePage(){
    console.log("HOMEEEEEE")
    sectionInformationMovie.classList.add('inactive');
    sectionSearchMovie.classList.add('inactive');
    header.classList.remove('inactive');
    sectionPosterMovie.classList.remove('inactive');
    sectionBestMovie.classList.remove('inactive');
    sectionMoviesCategories.classList.remove('inactive');
    sectionCategoryCollection.classList.add('inactive');

    getTrendingMoviesPreview();
    getCategoriesMovies();
}

