import React, { useContext, useState } from 'react'
import { Link, useHistory } from "react-router-dom";
import Cookies from 'js-cookie'
import CurrentUserContext from '../../context/current-user.context';
import SetUserContext from '../../context/set-user-context';
import axios from 'axios';



const SignIn = () => {
    const user = useContext(CurrentUserContext)
    const setUser = useContext(SetUserContext)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    let onEmailChange = (event) => {
        setEmail(event.target.value)
    }
    let onPasswordChange = (event) => {
        setPassword(event.target.value)
    }

    let onSubmitSignIn = (e) => {
        e.preventDefault()
        
        axios.post('http://localhost:4000/users/login', {
            "email": email,
            "password": password

          })
          .then(function (res) {
            setUser(res.data.user)
            Cookies.set('token', res.data.token, { expires: 2 })
            history.push("/");
          })
          .catch(function (e) {
            console.log(e);
          });
    }

    if(user._id) {
        history.push("/dashboard");
    }
    

    return (
        <div className='register'>
            <div className="register__container">
                <div className="register__login">
                    <h3>Sign In</h3>
                    <form name='form' method="POST" action="/" onSubmit={onSubmitSignIn} className="form u-margin-bottom-medium">

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
                        <button 
                            type="submit" 
                            className="register__button button"
                        >
                            Sign In &rarr;
                        </button>
                    </div>
                </form>
                <Link to="/register" className=''>Need an account?</Link>
                </div>
            </div>
            <div className="register__image">
            </div>
        </div>
    )
}

export default SignIn
