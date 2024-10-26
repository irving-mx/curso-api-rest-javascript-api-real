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