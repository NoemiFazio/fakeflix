const BASE_URL =
  "https://api.themoviedb.org/3/discover/tv?api_key=7a90f646e8bc9debee71e38dca588197&sort_by=popularity.desc";
//;
// esempio https://api.themoviedb.org/3/tv/111?api_key=b9d6f32d855fdb9b296cc4a18dc951e7
const imgFirstLinkPart = "https://image.tmdb.org/t/p/w500";

const seriesCard = document.createElement("div");
seriesCard.classList.add("series-card");

const serieWrapper = document.querySelector(".popular-series-wrapper");
serieWrapper.appendChild(seriesCard);
let series = [];

const loadingEl = document.querySelector(".loading");

fetch(BASE_URL)
  .then((res) => res.json())
  .then((data) => {
    series = data.results;
    // console.log(data.results);

    const locandina = series
      .map((el) => {
        console.log(el);
        return `<a class="card" href="http://127.0.0.1:5500/tv-series.html?id=${el.id}"  >
        <img id"${el.id}" src="${imgFirstLinkPart}${el.poster_path}">
        <h5 class"name"  >${el.name}</h5>
         
        </a>`;
      })
      .join("");
    seriesCard.innerHTML = `${locandina}`;
  })
  .then(() => (loadingEl.style.display = "none"));

//   style="visibility: hidden;"

// seriesCard.addEventListener("click", function (event) {
//   console.log("click su seriesCard");
//   if (event.target.tagName === "IMG") {
//     console.log("stai cliccando sulla img");
//   }
// });
fetch(
  "https://api.themoviedb.org/3/discover/tv?api_key=7a90f646e8bc9debee71e38dca588197&sort_by=popularity.desc"
);
