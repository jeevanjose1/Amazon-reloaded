import axios from 'axios';
import { ActionMovieUrl } from '../../util/api_Url';

export const ActionMovie = () => async (dispatch) => {
    const ActionMovieData = await axios.get(ActionMovieUrl);

    dispatch({
        type: 'ACTION_MOVIE',
        payload: {
            ActionMovie: ActionMovieData.data.results
        }
    });
};
