import axios from 'axios';
import { popularMoviesUrl, FamilyUrl } from '../../util/api_Url';

export const movieAction = () => async (dispatch) => {
    const Populardata = await axios.get(popularMoviesUrl);
    const Familydata = await axios.get(FamilyUrl);
    dispatch({
        type: 'FETCH_DATA',
        payload: {
            popularMovies: Populardata.data.results,
            familymovies: Familydata.data.results
        }
    });
};
