import axios from "axios";
 
// const getPages = (title) => {
//   return new Promise(async(resolve, reject) => {
//     try{
//       const request = await axios.get(
//         `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${title}&page=${pages}`
//       );
//       const pages = request.data.totalResults
//     }
//   });
// };

const searchMovie = (title = "batman") => {
  return new Promise(async (res, rej) => {
    try {
      const request = await axios.get( 
        `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${title}&plot=full`
      );

      const movieList = request.data.Search.map((list) => ({
        title: list.Title,
        type: list.Type,
        year: list.Year,
        poster: list.Poster,
        plot: list.Plot
      }));
      res(movieList);
    } catch (err) {
      rej(err);
    }
  });
};

export default searchMovie;
