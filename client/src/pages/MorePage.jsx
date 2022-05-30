import styled from 'styled-components';
import MoreCard from '../components/utilComponents/MoreCard';
import '../components/utilComponents/helper.css';

import { useLocation } from 'react-router-dom';
function MorePage() {
    const location = useLocation();
    const { data } = location;

    
    return (
        <More>
            <div className="main margin">
                <div className="head">
                    <h1 className="heading">Recently added mobvie</h1>
                </div>

                <div className="mainsection">
                    {data && data.map((dat) => <MoreCard data={dat} />)}
                </div>
            </div>
        </More>
    );
}

const More = styled.div`
    .main {
        color: white;
        .head {
            .heading {
                font-weight: 500;
            }
            padding: 3rem 0;
            margin-bottom: 3rem;
            border-bottom: 1px solid #b8b8b8;
        }
    }
    .mainsection {
        display: flex;
        justify-content:space-between;
        flex-wrap:wrap;
       
    }
`;

export default MorePage;
