import axios from 'axios';

const uri = 'api/user/logout';
const LogOutAction = () => async (dispatch) => {
    try {
        const data = await axios.get(uri, {
            withCredentials: true
        });

        dispatch({
            type: 'LOG-OUT',
            data
        });
    } catch (error) {
        console.log(error);
    }
};

export default LogOutAction;
