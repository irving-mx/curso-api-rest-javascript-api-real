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
function categoriesPage(){
    console.log("Categories !!");
}
function searchMovie(){
    console.log("Search Movieeee!!");
    header.classList.add('inactive');
    sectionPosterMovie.classList.add('inactive');
    sectionBestMovie.classList.add('inactive');
    sectionMoviesCategories.classList.add('inactive');
    sectionInformationMovie.classList.add('inactive');
    sectionSearchMovie.classList.remove('inactive');
}
function informationMovie(){
    console.log('information Movie')
    header.classList.add('inactive');
    sectionPosterMovie.classList.add('inactive');
    sectionBestMovie.classList.add('inactive');
    sectionMoviesCategories.classList.add('inactive');
    sectionSearchMovie.classList.add('inactive');
    sectionInformationMovie.classList.remove('inactive');
}
function homePage(){
    console.log("HOMEEEEEE")
    sectionInformationMovie.classList.add('inactive');
    sectionSearchMovie.classList.add('inactive');
    header.classList.remove('inactive');
    sectionPosterMovie.classList.remove('inactive');
    sectionBestMovie.classList.remove('inactive');
    sectionMoviesCategories.classList.remove('inactive');

    getTrendingMoviesPreview();
    getCategoriesMovies();
}

