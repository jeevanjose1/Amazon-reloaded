import axios from 'axios';
import { recomended } from '../../util/api_Url';

export const recAction = (movieid) => async (dispatch) => {
    const recdata = await axios.get(recomended(movieid));

    dispatch({
        type: 'RECOMENDED',
        payload: {
            recData: recdata.data.results
        }
    });
};
