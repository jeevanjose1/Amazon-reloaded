import axios from 'axios';
import { movieCredits } from '../../util/api_Url';

export const MvCreditAction = (movieid,clear) => async (dispatch) => {
    const movieCrData = await axios.get(movieCredits(movieid));

    dispatch({
        type: 'MV_CREDIT',
        payload: {
            movieCredits:clear===true? movieCrData.data:null
        }
    });
};
