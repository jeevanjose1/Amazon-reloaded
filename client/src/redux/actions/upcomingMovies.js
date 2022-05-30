import axios from 'axios';
import { upcomingUrl } from '../../util/api_Url';

export const UpcomingAction = () => async (dispatch) => {
    const UpcomingData = await axios.get(upcomingUrl);

    dispatch({
        type: 'UPCOMING_MOVIE',
        payload: {
            upcomingData: UpcomingData.data.results
        }
    });
};
