const initialState = {
    popularMovies: [],
    familymovies: [],
    recentMovies: [],
    detialMovie: [],
    detialTv: []
};

const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_DATA':
            return {
                ...state,
                familymovies: action.payload.familymovies
            };
        case 'LANGUAGE_DATA':
            return {
                ...state,
                allangMovie: action.payload.allangMovie
            };
        case 'LANGUAGE_RECENT_DATA':
            return {
                ...state,
                langRecentData: action.payload.langRecentData
            };
        case 'LANGUAGE_ACTION_DATA':
            return {
                ...state,
                langActionData: action.payload.langActionData
            };
        case 'LANGUAGE_COMEDY_DATA':
            return {
                ...state,
                langComedyData: action.payload.langComedyData
            };
        case 'LANGUAGE_FAMILY_DATA':
            return {
                ...state,
                langFamilyData: action.payload.allalangFamilyDatangMovie
            };
        case 'LANGUAGE_FANTASY_DATA':
            return {
                ...state,
                langFantasyData: action.payload.langFantasyData
            };
        case 'LANGUAGE_HORROR_DATA':
            return {
                ...state,
                langHorrorData: action.payload.langHorrorData
            };
        case 'LANGUAGE_SCIFI_DATA':
            return {
                ...state,
                langScifiData: action.payload.langScifiData
            };
        case 'TV':
            return {
                ...state,
                tvOnAir: action.payload.tvOnAir,
                AnimationTv: action.payload.AnimationTv,
                ScifiTv: action.payload.ScifiTv,
                UpcommingTv: action.payload.UpcommingTv,
                PopularTv: action.payload.PopularTv,
                TopRatedTv: action.payload.TopRatedTv
            };
        case 'POPULAR_MOVIE':
            return {
                ...state,
                popularMovies: action.payload.popularMovies
            };
        case 'NOWPLAYING_MOVIE':
            return {
                ...state,
                nowplayingdata: action.payload.nowplayingdata
            };
        case 'RECENT':
            return {
                ...state,
                recentMovies: action.payload.recentMovies
            };
        case 'DETIALS':
            return {
                ...state,
                detialMovie: action.payload.detialMovie
            };
        case 'DETIALS_TV':
            return {
                ...state,
                detialTv: action.payload.detialTv
            };
        case 'IMAGE':
            return {
                ...state,
                ImageData: action.payload.ImageData
            };
        case 'ACTION_MOVIE':
            return {
                ...state,
                ActionMovie: action.payload.ActionMovie
            };
        case 'RECENT_TV':
            return {
                ...state,
                RecentAddedTv: action.payload.RecentAddedTv
            };
        case 'ORGINALS':
            return {
                ...state,
                orginalData: action.payload.orginalData
            };
        case 'RECOMENDED':
            return {
                ...state,
                recData: action.payload.recData
            };
        case 'TV_RECOMENDED':
            return {
                ...state,
                tvRecData: action.payload.tvRecData
            };
        case 'VIDEO':
            return {
                ...state,
                videoData: action.payload.videoData
            };
        case 'MV_CREDIT':
            return {
                ...state,
                movieCredits: action.payload.movieCredits
            };
        case 'CREDIT_DETIALS':
            return {
                ...state,
                crDetials: action.payload.crDetials
            };
        case 'TV_CREDIT':
            return {
                ...state,
                tvCredits: action.payload.tvCredits
            };
        case 'UPCOMING_MOVIE':
            return {
                ...state,
                upcomingData: action.payload.upcomingData
            };
        case 'TOPRATED_MOVIE':
            return {
                ...state,
                topRateddata: action.payload.topRateddata
            };

        default:
            return { ...state };
    }
};

export default movieReducer;
