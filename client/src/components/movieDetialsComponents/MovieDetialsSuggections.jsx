import React from 'react';
import styled from 'styled-components';
import { MovieTvRaw } from '../storeFrontPageComponents/MovieTvRaw';

import '../utilComponents/helper.css';
function MovieDetialsSuggections({ datas, title }) {
    return (
        <Suggestions>
            <MovieTvRaw datas={datas} title={title} />
        </Suggestions>
    );
}

const Suggestions = styled.div`
    position: relative;
`;

export default MovieDetialsSuggections;
