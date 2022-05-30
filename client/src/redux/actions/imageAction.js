import axios from 'axios';
import { getImage } from '../../util/api_Url';

export const imageAction = (movieid) => async (dispatch) => {
    const ImageData = await axios.get(getImage(movieid));
    // const ImageData = await axios.get(imgUrl(movieid));

    dispatch({
        type: 'IMAGE',
        payload: {
            ImageData: ImageData.data
        }
    });
};
