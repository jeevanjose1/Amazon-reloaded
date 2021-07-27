const initialState = {
    popularMovies: [],
    familymovies: []
};

export const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_DATA':
            return {
                ...state,
                popularMovies: action.payload.popularMovies,
                familymovies: action.payload.familymovies
            };
        default:
            return { ...state };
    }
};
