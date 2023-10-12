class HeroImage extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  async fetchMovieData() {
    const apiKey = "2a24430c909872a1a4c9f0d998c16d61";
    const baseUrl = "https://api.themoviedb.org/3";
    const response = await fetch(`${baseUrl}/movie/popular?api_key=${apiKey}`);
    const data = await response.json();
    return data.results;
  }

  async render() {
    const movieData = await this.fetchMovieData();
    const randomIndex = Math.floor(Math.random() * movieData.length);
    const randomMovie = movieData[randomIndex];
    const baseImgUrl = "https://image.tmdb.org/t/p/w500";

    this.innerHTML = `
    <div id="carouselExampleFade" class="carousel mb-5 slide carousel-fade">
    <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="${baseImgUrl}${randomMovie.poster_path}" class="d-block w-100 rounded-3 opacity-25  " height="500" alt="...">
      <div class="carousel-caption d-none d-md-block">
      <h5>${randomMovie.title}</h5>
      <p>${randomMovie.overview}</p>
    </div>

      </div>
    
  </div>
  
  
</div>
       `;
  }
}

customElements.define("hero-image", HeroImage);
