
import axios from "axios";

const searchMovie = () => {

    return new Promise(async (res, rej) => {
        try {
            const request = await axios.get(
                `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&t=Batman` 
            );
            res(request.data);
        } catch (err) {
            rej(err)
        }
    })
} 

export default searchMovie