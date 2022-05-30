import axios from 'axios';
import { tvRecomended } from '../../util/api_Url';

export const TvRecAction = (movieid) => async (dispatch) => {
    const tvrecdata = await axios.get(tvRecomended(movieid));

    dispatch({
        type: 'TV_RECOMENDED',
        payload: {
            tvRecData: tvrecdata.data.results
        }
    });
};
