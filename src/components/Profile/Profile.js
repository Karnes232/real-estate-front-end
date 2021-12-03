import React, { useEffect, useState } from 'react'
import FormInput from '../FormInput/FormInput'
import { useHistory } from 'react-router';
import Cookies from 'js-cookie';
import EditProfile from '../../utils/EditProfile';

const Profile = ({user}) => {
    const history = useHistory();
    
    useEffect(() => {
        setProfile(user)
    }, [user])
    const [profile, setProfile] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: ''
    })

    const handleChange = event => {
        const { name, value } = event.target;   
        if (name === 'phoneNumber') {
            
            setProfile({ ...profile, [name]: value });
        } else {
            setProfile({ ...profile, [name]: value });
        }
        
      };
      
    
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = Cookies.get('token')
        const data = await EditProfile(token, profile)
        setProfile(data)
    }




    return (
        <section className='dashboard__section'>
            <div className="addlisting u-margin-bottom-extra-big">
                <div className="addlisting__form">
                    <form name='profileForm' method="POST" action="/" onSubmit={handleSubmit} className="form u-margin-bottom-medium">
                        <h4 className='u-margin-bottom-medium'>Profile</h4>

                        <div className="form__group-half">
                            <div className="form__group form__group-half-2">
                                <FormInput 
                                    displayName='First Name' 
                                    inputInfo='firstName' 
                                    classNameInfo='form__input' 
                                    formType="text"
                                    handleChange={handleChange}
                                    value={profile.firstName}
                                />
                            </div>
                            <div className="form__group form__group-half-2">
                                <FormInput 
                                    displayName='Last Name' 
                                    inputInfo='lastName' 
                                    classNameInfo='form__input' 
                                    formType="text"
                                    handleChange={handleChange}
                                    value={profile.lastName}
                                />
                            </div>
                        </div>
                        <div className="form__group-half">
                            <div className="form__group form__group-half-2">
                                <FormInput 
                                    displayName='Email' 
                                    inputInfo='email' 
                                    classNameInfo='form__input' 
                                    formType="text"
                                    handleChange={handleChange}
                                    value={profile.email}
                                />
                            </div>
                            <div className="form__group form__group-half-2">
                                <FormInput 
                                    displayName='Phone Number' 
                                    inputInfo='phoneNumber' 
                                    classNameInfo='form__input' 
                                    formType="text"
                                    handleChange={handleChange}
                                    value={profile.phoneNumber}
                                />
                            </div>
                        </div>
                        <button className="button add-listing-button">Submit Changes</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Profile
