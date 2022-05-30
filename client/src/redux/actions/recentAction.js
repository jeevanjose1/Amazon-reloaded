import axios from 'axios';
import { RecentUrl } from '../../util/api_Url';

export const recentAction = (movieid) => async (dispatch) => {
    const RecentData = await axios.get(RecentUrl);
    // const ImageData = await axios.get(imgUrl(movieid));

    dispatch({
        type: 'RECENT',
        payload: {
            recentMovies: RecentData.data.results
        }
    });
};
