import axios from 'axios';
import { movieByLanguageWithScifiUrl } from '../../../util/api_Url';

export const LanguageScifiAction = (id) => async (dispatch) => {
    const languagescifidata = await axios.get(movieByLanguageWithScifiUrl(id));

    dispatch({
        type: 'LANGUAGE_SCIFI_DATA',
        payload: {
            langScifiData: languagescifidata.data.results
        }
    });
};
