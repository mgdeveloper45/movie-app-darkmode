import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import searchMovie from '../../routes/api_routes'
import { setMovie } from '../../actions';


const Movies = () => {
    const movie = useSelector((state) => state.movie);
    const dispatch = useDispatch();

    useEffect(() => {
        searchMovie()
        .then((res) => dispatch(setMovie(res)))
        .catch((err) => console.log(err));
    }, [])

    return (
        <div>
           <h1>{movie.Title}</h1> 
        </div>
    )
}

export default Movies
