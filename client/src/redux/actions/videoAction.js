import axios from 'axios';
import { getVideo } from '../../util/api_Url';

export const VideoAction = (movieid) => async (dispatch) => {
    const videodata = await axios.get(getVideo(movieid));

    dispatch({
        type: 'VIDEO',
        payload: {
            videoData: videodata.data.results[0]
        }
    });
};
