import axios from 'axios';

const uri = '/api/user/signup';
const SignUpAction = (formdata, history) => async (dispatch) => {
    try {
        const { res } = await axios.post(uri, formdata, {
            withCredentials: true
        });
        console.log(res);
        history.push('/sign-in');

        dispatch({
            type: 'SIGN-UP'
        });
    } catch (error) {
        console.log(error.message);
    }
};

export default SignUpAction;
