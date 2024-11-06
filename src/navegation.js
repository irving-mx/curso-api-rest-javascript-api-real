window.addEventListener('DOMContentLoaded',navigator,false);
window.addEventListener('hashchange',navigator,false);


    // searchIcon.forEach(search =>{
    //     search.addEventListener('click',()=>{
    //         location.hash=" ";
    //         location.hash = '#search=' + searchInput[0].value;
    //         console.log("Otro Search");
    //     })
    // })


    searchIcon.addEventListener('click',()=>{
        location.hash = '#search=' + searchInput.value;
        console.log("Busqueda Nueva")
    })


    
    returnHome.forEach(icon =>{
    icon.addEventListener('click',()=>{
        // location.hash = '#home';
        history.back();
        console.log("Click return")
    })
})

// returnHistory.addEventListener('click', ()=>{
//     console.log("entre a return history");
//     console.log("ultimo elemento es: "+ moviesHistory[moviesHistory.length - 1 ]);
//     console.log("")
//     if(moviesHistory.length==1){
//         location.hash = '#home';
//     }if(moviesHistory.length>1){
//         moviesHistory.pop()
//         // location.hash = '#search=' + moviesHistory[moviesHistory.length - 1 ];
//         getByMoviesByQuery(moviesHistory[moviesHistory.length - 1 ]);
//         searchInput.value= moviesHistory[moviesHistory.length - 1 ];

//     }
// })

let moviesHistory = []

function navigator(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    console.log({ location });
    if(location.hash.startsWith('#trends')){
        trendsPage();
    }else if(location.hash.startsWith('#category=')){
        categoriesPage();
    }else if(location.hash.startsWith('#search=')){
        searchMovie();
    }else if(location.hash.startsWith('#informationMovie=')){
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
    sectionSearchMovieMain.classList.remove('inactive');
    sectionUpcoming.classList.add('inactive');
    //[#search, vengadores] = location.hash.split("=")
    const [_,query] = location.hash.split("=")
    getByMoviesByQuery(query);
    moviesHistory.push(query);
    console.log("el arreglo de busquedas: "+ moviesHistory + " tiene posicion:"+ moviesHistory.length)
    console.log(query)
    // if(query.length== 0 || query == null){
    //     console.log("vacio")
    // }else{
    // movieInputName.placeholder = query;
    // }
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
    sectionSearchMovieMain.classList.add('inactive');
    sectionUpcoming.classList.add('inactive');
    // [sinImportancia,id]
    const [_,id] = location.hash.split("=")
    getByMovieByID(id);
    console.log("el id es : "+ id)
}
function categoriesPage(){

    console.log("Categories !!");
    sectionCategoryCollection.classList.remove('inactive');
    header.classList.add('inactive');
    sectionPosterMovie.classList.add('inactive');
    sectionBestMovie.classList.add('inactive');
    sectionMoviesCategories.classList.add('inactive');
    sectionSearchMovie.classList.add('inactive');
    sectionInformationMovie.classList.add('inactive');
    sectionSearchMovieMain.classList.add('inactive');
    sectionUpcoming.classList.add('inactive');

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
    sectionSearchMovieMain.classList.remove('inactive');
    sectionBestMovie.classList.remove('inactive');
    sectionMoviesCategories.classList.remove('inactive');
    sectionCategoryCollection.classList.add('inactive');
    sectionUpcoming.classList.remove('inactive');
    getTrendingMoviesPreview();
    getCategoriesMovies();
    getUpcomingMovies();
    // moviesHistory=[];
}

