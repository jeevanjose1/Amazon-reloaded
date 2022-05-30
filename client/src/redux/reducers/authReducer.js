const initial = [];
const authReducer = function (state = initial, action) {
    switch (action.type) {
        case 'SIGN-IN':
            localStorage.setItem(
                'profile',
                JSON.stringify({ ...action?.data })
            );
            return { ...state, data: action?.data };
        case 'SIGN-UP':
            return {};

        case 'LOG-OUT':
            return {};

        default:
            return {};
    }
};

export default authReducer;
