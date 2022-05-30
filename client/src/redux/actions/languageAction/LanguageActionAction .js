import axios from 'axios';
import { movieByLanguageWithActionUrl } from '../../../util/api_Url';

export const LanguageActionAction = (id) => async (dispatch) => {
    const languageactiondata = await axios.get(
        movieByLanguageWithActionUrl(id)
    );
    dispatch({
        type: 'LANGUAGE_ACTION_DATA',
        payload: {
            langActionData: languageactiondata.data.results
        }
    });
};
