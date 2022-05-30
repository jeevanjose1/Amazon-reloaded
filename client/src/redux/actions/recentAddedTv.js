import axios from 'axios';
import { RecentTvUrl } from '../../util/api_Url';

export const RecentTv = () => async (dispatch) => {
    const RecentTvdata = await axios.get(RecentTvUrl);
    // const ImageData = await axios.get(imgUrl(movieid));

    dispatch({
        type: 'RECENT_TV',
        payload: {
            RecentAddedTv: RecentTvdata.data.results
        }
    });
};
