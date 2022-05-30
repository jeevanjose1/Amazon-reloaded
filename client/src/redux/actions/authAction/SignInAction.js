import axios from 'axios';

const uri = '/api/user/signin';
const SignInAction = (formdata, history) => async (dispatch) => {
    try {
        const { data } = await axios.post(uri, formdata, {
            withCredentials: true
        });

        dispatch({
            type: 'SIGN-IN',
            data
        });
    } catch (error) {
        console.log(error);
    }
};

export default SignInAction;
