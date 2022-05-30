export const popularMoviesUrl = ` https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_API_KEY}&page=1`;
export const FamilyUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&sort_by=popularity.desc&page=1&with_genres=10751&with_watch_providers=9&with_watch_monetization_types=flatrate`;
export const RecentUrl = ` https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&page=1&with_watch_providers=9&watch_region=US`;
export const RecentTvUrl = ` https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&page=1&with_watch_providers=9&watch_region=US`;
export const ActionMovieUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&page=1&with_genres=28`;
export const AmazonOrginalsUrl = `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&page=2&with_watch_providers=119&watch_region=IN`;
export const imgUrl = `https://image.tmdb.org/t/p/original`;
export const imgUrlSmall = `https://image.tmdb.org/t/p/w500`;
export const upcomingUrl = `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}`;
export const topRatedUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`;
export const nowPlayingUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`;
export const tvOnAirTodayUrl = `https://api.themoviedb.org/3/tv/airing_today?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`;
export const AnimationTvUrl = `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&page=1&with_genres=16`;
export const scifiTvUrl = `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&page=1&with_genres=35`;
export const upComingTvUrl = `https://api.themoviedb.org/3/tv/on_the_air?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`;
export const popularTvUrl = `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`;
export const topRatedTvUrl = `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`;

export const DetialUrl = (movieId) => {
    return ` https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}`;
};
export const getVideo = (movieId) => {
    return ` https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;
};
export const getImage = (movieId) => {
    return `https://api.themoviedb.org/3/movie/${movieId}/images?api_key=${process.env.REACT_APP_API_KEY}`;
};
export const recomended = (movieId) => {
    return `https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=${process.env.REACT_APP_API_KEY}&page=1`;
};
export const tvRecomended = (movieId) => {
    return `https://api.themoviedb.org/3/tv/${movieId}/recommendations?api_key=${process.env.REACT_APP_API_KEY}&page=1`;
};
export const tvDetialsUrl = (movieId) => {
    return `https://api.themoviedb.org/3/tv/${movieId}?api_key=${process.env.REACT_APP_API_KEY}`;
};
export const movieCredits = (movieId) => {
    return `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US&api_key=${process.env.REACT_APP_API_KEY}`;
};
export const tvCredits = (movieId) => {
    return `https://api.themoviedb.org/3/tv/${movieId}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;
};
export const movieByLanguageUrl = (langid) => {
    return `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&page=1&with_original_language=${langid}`;
};
export const movieByLanguageWithActionUrl = (langid) => {
    return `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&page=1&with_genres=28&with_original_language=${langid}`;
};
export const movieByLanguageWithComedyUrl = (langid) => {
    return `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&page=1&with_genres=35&with_original_language=${langid}`;
};
export const movieByLanguageWithFamilyUrl = (langid) => {
    return `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&page=1&with_genres=10751&with_original_language=${langid}`;
};
export const movieByLanguageWithHorrorUrl = (langid) => {
    return `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&page=1&with_genres=27&with_original_language=${langid}`;
};
export const movieByLanguageWithScifiUrl = (langid) => {
    return `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&page=1&with_genres=878&with_original_language=${langid}`;
};
export const movieByLanguageWithFantasyUrl = (langid) => {
    return `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&page=1&with_genres=14&with_original_language=${langid}`;
};
export const movieByLanguageWithRecentUrl = (langid) => {
    return `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&page=1&with_genres=14&sort_by=release_date.desc&with_original_language=${langid}`;
};
export const crewDetialsUrl = (pid) => {
    return `https://api.themoviedb.org/3/person/${pid}?api_key=917907cf5e78c125737f5759d69fd76b&language=en-US`;
};
