import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/images/logo.svg';
import Button from '../components/button/Button';
import SignInAction from '../redux/actions/authAction/SignInAction';
function Signinpage() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [formdata, setFormdata] = useState({
        email: '',
        password: ''
    });
    console.log(formdata);
    const handleChange = (e) => {
        setFormdata({
            ...formdata,
            [e.target.name]: e.target.value
        });
    };

    const handlesubmit = (e) => {
        e.preventDefault();
        dispatch(SignInAction(formdata, history));
    };
    return (
        <Main>
            <Login>
                <div className="image">
                    <img src={logo} alt="" />
                </div>
                <div className="line"></div>
                <h1 className="heading">Sign-in</h1>
                <form onSubmit={handlesubmit}  action="">
                    <label htmlFor="">Email or Phone number</label>
                    <input name="email" onChange={handleChange} type="email" />
                    <label htmlFor="">Password</label>
                    <input
                        name="password"
                        onChange={handleChange}
                        type="password"
                    />
                    <input onSubmit={handlesubmit} type="submit" />
                </form>
                <p>
                    By continuing, you agree to Amazon's Conditions of Use and
                    Privacy Notice.
                </p>
                <div className="radiobtn">
                    <input type="checkbox" />
                    <p>Keep me signed in.</p>
                </div>
                <div className="signup">
                    <div className="heading">
                        <div className="lines"></div>
                        <p>New to Amazon?</p>
                        <div className="lines"></div>
                    </div>

                    <Link to="/sign-up">
                        <Button detials="Create Your Prime Account" />
                    </Link>
                </div>
            </Login>
        </Main>
    );
}

const Main = styled.div`
    margin-top: 7rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #f3f3f3;
`;
const Login = styled.div`
    height: 55.2rem;
    width: 37.5rem;
    .image {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 2.5rem;
    }
    .line {
        width: 100%;
        height: 0.1rem;
        background-color: white;
        margin-bottom: 3rem;
    }

    .heading {
        font-size: 2.5rem;
        font-weight: 400;
        margin-bottom: 2rem;
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;

        label {
            align-self: flex-start;
            font-size: 1.5rem;
            margin-bottom: 1rem;
        }

        input {
            padding: 1.3rem;
            background-color: #465a6b;
            width: 100%;
            outline: none;
            border: none;
            margin-bottom: 1.5rem;
            color: white;
        }
        button {
            align-self: flex-start;
            margin-bottom: 1rem;
        }
    }
    p {
        font-size: 1.2rem;
        &:not(:last-child) {
            margin-bottom: 1rem;
        }
    }
    .radiobtn {
        display: flex;
        align-items: center;
        margin-bottom: 2rem;
        input {
            margin-right: 1rem;
        }
        input[type='checkbox'] {
        }
    }

    .signup {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        .heading {
            display: flex;
            justify-content: space-between;
            align-items: center;
            .lines {
                width: 30%;
                height: 0.1rem;
                background-color: white;
            }
            p {
                margin: 0;
            }
        }
        button {
            width: 100%;
        }
    }
`;
export default Signinpage;
