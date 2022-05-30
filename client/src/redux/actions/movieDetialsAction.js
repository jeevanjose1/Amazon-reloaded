import axios from 'axios';
import { DetialUrl } from '../../util/api_Url';

export const detialsAction = (movieid,clear) => async (dispatch) => {
    const DetialsData = await axios.get(DetialUrl(movieid));

    return dispatch({
        type: 'DETIALS',
        payload: {
            detialMovie: {
                movie: clear===true?DetialsData.data:null
            }
        }
    });
};
