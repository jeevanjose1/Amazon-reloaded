import axios from 'axios';
import { movieByLanguageUrl } from '../../../util/api_Url';

export const LanguageAction = (id) => async (dispatch) => {
    const { data } = await axios.get(movieByLanguageUrl(id));

    dispatch({
        type: 'LANGUAGE_DATA',
        payload: {
            allangMovie: data?.results
        }
    });
};
