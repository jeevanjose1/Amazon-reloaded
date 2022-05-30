import axios from 'axios';
import { movieByLanguageWithRecentUrl } from '../../../util/api_Url';

export const LanguageRecentAction = (id) => async (dispatch) => {
    const languagerecentdata = await axios.get(
        movieByLanguageWithRecentUrl(id)
    );

    dispatch({
        type: 'LANGUAGE_RECENT_DATA',
        payload: {
            langRecentData: languagerecentdata.data.results
        }
    });
};
