import axios from 'axios';
import { topRatedUrl } from '../../util/api_Url';

export const TopRatedAction = () => async (dispatch) => {
    const topRatedData = await axios.get(topRatedUrl);

    dispatch({
        type: 'TOPRATED_MOVIE',
        payload: {
            topRateddata: topRatedData.data.results
        }
    });
};
