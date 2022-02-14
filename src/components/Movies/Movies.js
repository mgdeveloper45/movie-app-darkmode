import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import searchMovie from "../../routes/api_routes";
import { setMovie } from "../../actions";
import { Content, Img, Info, Key, MovieContainer, Title } from "./MovieStyles";

const Movies = () => {
  const movie = useSelector((state) => state.movie);
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    searchMovie()
      .then((res) => {
        dispatch(setMovie(res));
      })
      .catch((err) => console.log(err));
  }, [dispatch]);

  return (
    <MovieContainer>
      {movie.map((item) => (
        <Key>
          <Title theme={theme}>{item.title}</Title>
          <Img src={item.poster} />
          <Content>
            <Info theme={theme}>Type: {item.type}</Info>
            <Info theme={theme}>Year: {item.year}</Info>
          </Content>
        </Key>
      ))}
    </MovieContainer>
  );
};

export default Movies;
