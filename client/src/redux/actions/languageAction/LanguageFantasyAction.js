import axios from 'axios';
import { movieByLanguageWithFantasyUrl } from '../../../util/api_Url';

export const LanguageFantasyAction = (id) => async (dispatch) => {
    const languagefantasydata = await axios.get(
        movieByLanguageWithFantasyUrl(id)
    );

    dispatch({
        type: 'LANGUAGE_FANTASY_DATA',
        payload: {
            langFantasyData: languagefantasydata.data.results
        }
    });
};
