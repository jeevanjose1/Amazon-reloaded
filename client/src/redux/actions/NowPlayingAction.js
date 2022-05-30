import axios from 'axios';
import { nowPlayingUrl } from '../../util/api_Url';

export const nowPlayingAction = () => async (dispatch) => {
    const NowPlayingdata = await axios.get(nowPlayingUrl);

    dispatch({
        type: 'NOWPLAYING_MOVIE',
        payload: {
            nowplayingdata: NowPlayingdata.data.results
        }
    });
};
