import axios from 'axios';
import { popularMoviesUrl } from '../../util/api_Url';

export const PopularAction = () => async (dispatch) => {
    const Populardata = await axios.get(popularMoviesUrl);

    dispatch({
        type: 'POPULAR_MOVIE',
        payload: {
            popularMovies: Populardata.data.results
        }
    });
};
