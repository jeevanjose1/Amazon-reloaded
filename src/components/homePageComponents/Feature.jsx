import React from 'react';
import styled from 'styled-components';
import data from '../../assets/images/data.svg';
import download from '../../assets/images/download.svg';
import watch from '../../assets/images/watch.svg';
function Feature() {
    return (
        <Maindiv>
            <Main>
                <Features>
                    <img src={watch} alt="" />
                    <h1 className="heading">Watch anywhere</h1>
                    <p>
                        Enjoy from the web or with the Prime Video app on your
                        phone, tablet, or select Smart TVs — on up to 3 devices
                        at once.
                    </p>
                </Features>
                <Features>
                    <img src={download} alt="" />
                    <h1 className="heading">Download and go</h1>
                    <p>
                        Watch offline on the Prime Video app when you download
                        titles to your iPhone, iPad, Tablet, or Android device.
                    </p>
                </Features>
                <Features>
                    <img src={data} alt="" />
                    <h1 className="heading">Data Saver</h1>
                    <p>
                        Control data usage while downloading and watching videos
                        on select phones or tablets.
                    </p>
                </Features>
            </Main>
        </Maindiv>
    );
}

const Maindiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;

    height: 65vh;
`;
const Main = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    width: 100%;
`;

const Features = styled.div`
    align-items: center;
    text-align: center;
    margin: 0 7rem;
    width: 35rem;
    height: 35rem;
    .heading {
        font-size: 2.5rem;
        font-weight: 400;
        margin-bottom: 1rem;
    }
    p {
        font-size: 1.5rem;
        font-weight: 300;
    }
    img {
        width: 25rem;
        height: 25rem;
        margin-bottom: 1.5rem;
    }
`;
export default Feature;
