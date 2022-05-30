import axios from 'axios';
import { movieByLanguageWithHorrorUrl } from '../../../util/api_Url';

export const LanguageHorrorAction = (id) => async (dispatch) => {
    const languagehorrordata = await axios.get(
        movieByLanguageWithHorrorUrl(id)
    );

    dispatch({
        type: 'LANGUAGE_HORROR_DATA',
        payload: {
            langHorrorData: languagehorrordata.data.results
        }
    });
};
