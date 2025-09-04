async function searchMovies()
{
    const query = document.getElementById("search").value;

    const res = await fetch(`https://www.omdbapi.com/?apikey=thewdb&s=${query}`)

    const data = await res.json()

    const moviesDiv = document.getElementById("movies")

    moviesDiv.innerHTML = "";

    if(data.search)
    {
        data.search.forEach((movie) => {
            moviesDiv.innerHTML += `
             <img src="${movie.poster}" alt="Poster">

              <h3>${movie.Title}</h3>

             <p>${movie.Year}</p>`
        })
    } else {
        moviesDiv.innerHTML = "<p>No movies</p>"
    }
}