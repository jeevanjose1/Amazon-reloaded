import axios from 'axios';
import { movieByLanguageWithComedyUrl } from '../../../util/api_Url';

export const LanguageComedyAction = (id) => async (dispatch) => {
    const languagecomedydata = await axios.get(
        movieByLanguageWithComedyUrl(id)
    );

    dispatch({
        type: 'LANGUAGE_COMEDY_DATA',
        payload: {
            langComedyData: languagecomedydata.data.results
        }
    });
};
