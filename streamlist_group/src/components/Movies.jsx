import { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = "76239030723eebfbef9918ce1534e4f1";
const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(API_URL)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const addToCart = (movie) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItemIndex = cart.findIndex((item) => item.id === movie.id);

    if (existingItemIndex !== -1) {
      cart[existingItemIndex].quantity += 1;
    } else {
      const newItem = {
        id: movie.id,
        name: movie.title,
        quantity: 1,
        price: 9.99,
        image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      };
      cart.push(newItem);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${movie.title} added to cart!`);
  };

  return (
    <div className="movies-container">
      <h1>Popular Movies</h1>
      <div className="movie-grid">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>Price: $9.99</p>
            <button onClick={() => addToCart(movie)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Movies;