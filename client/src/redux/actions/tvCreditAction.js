import axios from 'axios';
import { tvCredits } from '../../util/api_Url';

export const TvCreditAction = (movieid,clear) => async (dispatch) => {
    const tvCrData = await axios.get(tvCredits(movieid));

    dispatch({
        type: 'TV_CREDIT',
        payload: {
            tvCredits:clear===true? tvCrData.data:null
        }
    });
};
