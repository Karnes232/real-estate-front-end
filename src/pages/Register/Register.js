import React, { useContext, useState } from 'react'
import { Link, useHistory } from "react-router-dom";
import Cookies from 'js-cookie'

import SetUserContext from '../../context/set-user-context';
import axios from 'axios';


const Register = () => {
    const setUser = useContext(SetUserContext)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const history = useHistory();

    let onFirstNameChange = (event) => {
        setFirstName(event.target.value)
    }
    let onLastNameChange = (event) => {
        setLastName(event.target.value)
    }
    let onEmailChange = (event) => {
        setEmail(event.target.value)
    }
    let onPasswordChange = (event) => {
        setPassword(event.target.value)
    }
    let onConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value)
    }
    let onSubmitRegisterIn = (e) => {
        e.preventDefault()
        
        axios.post('http://localhost:4000/users', {
            "firstName": firstName,
            "lastName": lastName,
            "email": email,
            "password": password,
            "confirmPassword": confirmPassword
        })
        .then(function (response) {
            Cookies.set('token', response.data.token)   
            const user = response.data.user
            if (user._id) {
                setUser(user)
                Cookies.set('token', response.data.token, { expires: 2 })
                history.push("/");
            }
        })
        .catch(function (error) {
            console.log(error);
        });  
    }

    return (
        <div className='register'>
            <div className="register__container">
                <div className="register__login">
                    <h3>Sign Up</h3>
                    <form name='form' method="POST" action="/" onSubmit={onSubmitRegisterIn} className="form u-margin-bottom-medium">
                    <div className="form__group">
                        <input 
                            name='firstName' 
                            type="text" 
                            className="form__input" 
                            placeholder="First Name" 
                            id="firstName" 
                            onChange={onFirstNameChange}
                            required    
                        />
                        <label htmlFor="firstName" className="form__label">First Name</label>
                    </div>
                    <div className="form__group">
                        <input 
                            name='lastName' 
                            type="text" 
                            className="form__input" 
                            placeholder="Last Name" 
                            id="lastName" 
                            onChange={onLastNameChange}
                            required    
                        />
                        <label htmlFor="lastName" className="form__label">Last Name</label>
                    </div>

                    <div className="form__group">
                        <input 
                            id="email" 
                            name='email' 
                            className="form__input" 
                            placeholder="Email address" 
                            type="email" 
                            onChange={onEmailChange}
                            required    
                        />
                        <label htmlFor="email" className="form__label">Email address</label>
                    </div>
                    
                    <div className="form__group">
                        <input 
                            name='password' 
                            type="password" 
                            className="form__input" 
                            placeholder="Password" 
                            id="password" 
                            onChange={onPasswordChange}
                            required
                        />
                        <label htmlFor="password" className="form__label">Password</label>
                    </div>
                    
                    <div className="form__group">
                        <input 
                            name='confirmPassword' 
                            type="password" 
                            className="form__input" 
                            placeholder="Confirm Password" 
                            id="confirmPassword" 
                            onChange={onConfirmPasswordChange}
                            required    
                        />
                        <label htmlFor="confirmPassword" className="form__label">Confirm Name</label>
                    </div>

                    <div className="form__group">
                        <button 
                            type="submit" 
                            className="register__button button"
                        >
                            Register &rarr;
                        </button>
                    </div>
                </form>
                <Link to="/signin" className=''>Already have an account?</Link>
                </div>
            </div>
            <div className="register__image">
            </div>
        </div>
    )
}

export default Register
