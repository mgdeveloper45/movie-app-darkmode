import axios from "axios";

const searchMovie = (title = "") => {
  return new Promise(async (res, rej) => {
    try {
      const request = await axios.get(
        // stretch goal my guy
        // `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${title}&page=${pages}`
        `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${title}`
      );

      const movieList = request.data.Search.map((list) => ({
        title: list.Title,
        type: list.Type,
        year: list.Year,
        poster: list.Poster,
      }));
      res(movieList);
    } catch (err) {
      rej(err);
    }
  });
};

export default searchMovie;
