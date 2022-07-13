const movieId = window.location.search.substr(1).slice(3);
console.log(movieId);

const imgFirstLinkPart = "https://image.tmdb.org/t/p/w500";

const description = document.querySelector(".description");
//esempio per video https://api.themoviedb.org/3/tv/63174/videos?api_key=b9d6f32d855fdb9b296cc4a18dc951e7
fetch(
  `https://api.themoviedb.org/3/tv/${movieId}?api_key=b9d6f32d855fdb9b296cc4a18dc951e7`
)
  .then((res) => res.json())
  .then((res) => {
    // console.log(res);

    let seriesDescription = `<div class="description-img">
    <img src="${imgFirstLinkPart}${res.poster_path}">
    </div>
    <div class="description-p">
    <p>${res.overview}</p>
    <h6 class"tv-series-rating" ">Rating: ${res.vote_average}/10</h6>
    </div>
    
    `;

    description.innerHTML = seriesDescription;
  });
