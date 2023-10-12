import "./component/hero-image";

const apiKey = "2a24430c909872a1a4c9f0d998c16d61";
const baseUrl = "https://api.themoviedb.org/3";
const baseImgUrl = "https://image.tmdb.org/t/p/w500";

const getMovie = async () => {
  try {
    const response = await fetch(`${baseUrl}/movie/popular?api_key=${apiKey}`);
    const data = await response.json();
    renderAllMovie(data.results);
  } catch (error) {
    console.error("Error mengambil data movie:", error);
  }
};

const renderAllMovie = (movies) => {
  const listMovieElement = document.querySelector("#listMovie");
  listMovieElement.innerHTML = "";

  movies.forEach((movie) => {
    listMovieElement.innerHTML += `
      <div class="col-lg-4 col-md-6 col-sm-12 mb-3">
        <div class="card border-0 shadow rounded-3 ">
          <img src="${baseImgUrl}/${movie.poster_path}" class="card-img-top" height="300" alt="${movie.poster_path}">
          <div class="card-body">
            <h5 class="card-title">${movie.title}</h5>
            <p class="card-subtitle">${movie.overview}</p>
            <div class="d-flex justify-content-between">
              <a class="card-link text-decoration-none text-muted ">${movie.release_date}</a>
              <a class="card-link text-decoration-none text-muted ">Rate : <span class="fw-semibold text-danger">${movie.vote_average}</span></a>
            </div>
          </div>
        </div>
      </div>
    `;
  });
};

document.addEventListener("DOMContentLoaded", () => {
  getMovie();
});

export default main;
