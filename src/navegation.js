window.addEventListener('DOMContentLoaded',navigator,false);
window.addEventListener('hashchange',navigator,false);

function navigator(){
    console.log({ location });

    if(location.hash.startsWith('#trends')){
        trendsPage();
    }else if(location.hash.startsWith('#category=')){
        categoriesPage();
    }else if(location.hash.startsWith('#search=')){
        searchMovie();
    }else{
        homePage();
    }

}

function trendsPage(){
    console.log("Trends!!!")
}
function categoriesPage(){
    console.log("Categories !!")
}
function searchMovie(){
    console.log("Search Movieeee!!")
}
function homePage(){
    console.log("HOMEEEEEE")
    getTrendingMoviesPreview()
    getCategoriesMovies()

}
