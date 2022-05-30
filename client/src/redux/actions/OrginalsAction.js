import axios from 'axios';
import { AmazonOrginalsUrl } from '../../util/api_Url';

export const orginalAction = () => async (dispatch) => {
    const OrginalData = await axios.get(AmazonOrginalsUrl);

    dispatch({
        type: 'ORGINALS',
        payload: {
            orginalData: OrginalData.data.results
        }
    });
};
