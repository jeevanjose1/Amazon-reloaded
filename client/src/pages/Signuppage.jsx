import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../assets/images/logo.svg';
import { Link, useHistory } from 'react-router-dom';
import SignUpAction from '../redux/actions/authAction/SignUpAction';
function Signuppage() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [formdata, setFormdata] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const handleChange = (e) => {
        setFormdata({
            ...formdata,
            [e.target.name]: e.target.value
        });
    };

    const handlesubmit = (e) => {
        e.preventDefault();
        dispatch(SignUpAction(formdata, history));
       
    };

    return (
        <Main>
            <SignUp>
                <div className="image">
                    <img src={logo} alt="" />
                </div>
                <div className="line"></div>
                <h1 className="heading">Create Your account</h1>
                <form action="" onSubmit={handlesubmit}>
                    <label htmlFor="">Your name</label>
                    <input name="name" onChange={handleChange} type="text" />
                    <label htmlFor="">Email</label>
                    <input name="email" onChange={handleChange} type="email" />
                    <label htmlFor="">Password</label>
                    <input
                        name="password"
                        onChange={handleChange}
                        type="password"
                        placeholder="At least 6 charactors"
                    />
                    <label htmlFor="">Re-enter password</label>
                    <input
                        name="confirmPassword"
                        onChange={handleChange}
                        type="password"
                    />
                    <input type="submit" />
                </form>
                <p>
                    By continuing, you agree to Amazon's Conditions of Use and
                    Privacy Notice.
                </p>

                <div className="lines"></div>
                <div className="signin">
                    <h4>Already have an account</h4>

                    <Link className="link" to="/sign-in">
                        Sign-in
                    </Link>
                </div>
            </SignUp>
        </Main>
    );
}

const Main = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 5rem;
    color: #f3f3f3;
`;
const SignUp = styled.div`
    width: 37.5rem;
    height: 58rem;
    .image {
        display: flex;
        justify-content: center;
        margin-bottom: 1.5rem;
    }

    .line {
        width: 100%;
        height: 0.1rem;
        background-color: white;

        margin-bottom: 2.5rem;
    }
    .heading {
        font-size: 3rem;
        font-weight: 400;
        margin-bottom: 1rem;
    }
    form {
        display: flex;
        flex-direction: column;

        label {
            align-self: flex-start;
            font-size: 1.3rem;
            margin-bottom: 0.5rem;
        }
        input {
            padding: 1.3rem;
            background-color: #465a6b;
            width: 100%;
            outline: none;
            border: none;
            margin-bottom: 0.75rem;
            color: white;

            &::placeholder {
                color: #e6e6e6;
            }
        }
        button {
            align-self: flex-start;
            margin-bottom: 0.5rem;
        }
    }
    .lines {
        width: 100%;
        height: 0.1rem;
        background-color: white;
        margin-bottom: 1.5rem;
    }
    p {
        font-size: 1.2rem;
        margin-bottom: 1rem;
    }
    .signin {
        display: flex;
        align-items: center;
        h4 {
            font-size: 1.1rem;
            margin-right: 1rem;
        }
        .link {
            font-size: 1.3rem;
            color: #3580c0;
        }
    }
`;
export default Signuppage;
