import axios from 'axios';
import { crewDetialsUrl } from '../../util/api_Url';

export const CrewDetialsAction = (id,close) => async (dispatch) => {
    const CreditDetals = await axios.get(crewDetialsUrl(id));
    dispatch({
        type: 'CREDIT_DETIALS',
        payload: {
            crDetials: close===true?CreditDetals.data:null
        }
    });
};
