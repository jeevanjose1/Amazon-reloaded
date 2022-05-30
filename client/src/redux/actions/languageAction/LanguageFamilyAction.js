import axios from 'axios';
import { movieByLanguageWithFamilyUrl } from '../../../util/api_Url';

export const LanguageFamilyAction = (id) => async (dispatch) => {
    const languagefamilydata = await axios.get(
        movieByLanguageWithFamilyUrl(id)
    );

    dispatch({
        type: 'LANGUAGE_FAMILY_DATA',
        payload: {
            langFamilyData: languagefamilydata.data.results
        }
    });
};
