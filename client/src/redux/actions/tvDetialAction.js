import axios from 'axios';
import { tvDetialsUrl } from '../../util/api_Url';

export const detialsTvAction = (movieid,clear) => async (dispatch) => {
    const DetialsData = await axios.get(tvDetialsUrl(movieid));

    return dispatch({
        type: 'DETIALS_TV',
        payload: {
            detialTv: {
                tv: clear===true? DetialsData.data:null
            }
        }
    });
};
