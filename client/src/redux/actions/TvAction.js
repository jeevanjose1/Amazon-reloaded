import axios from 'axios';
import { tvOnAirTodayUrl } from '../../util/api_Url';
import { AnimationTvUrl } from '../../util/api_Url';
import { upComingTvUrl } from '../../util/api_Url';
import { popularTvUrl } from '../../util/api_Url';
import { topRatedTvUrl } from '../../util/api_Url';
import { scifiTvUrl } from '../../util/api_Url';

export const TvAction = () => async (dispatch) => {
    const Tvonairdata = await axios.get(tvOnAirTodayUrl);
    const AnimationTvdata = await axios.get(AnimationTvUrl);
    const Upcomingtvdata = await axios.get(upComingTvUrl);
    const Populartvdata = await axios.get(popularTvUrl);
    const Topratedtvdata = await axios.get(topRatedTvUrl);
    const scifitvdata = await axios.get(scifiTvUrl);

    dispatch({
        type: 'TV',
        payload: {
            tvOnAir: Tvonairdata.data.results,
            AnimationTv: AnimationTvdata.data.results,
            ScifiTv: scifitvdata.data.results,
            UpcommingTv: Upcomingtvdata.data.results,
            PopularTv: Populartvdata.data.results,
            TopRatedTv: Topratedtvdata.data.results
        }
    });
};
