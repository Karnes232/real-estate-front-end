import React from 'react'

const FormInput = ({displayName, inputInfo, classNameInfo, formType, handleChange, value}) => {
    return (
        <>
            <input 
                id={inputInfo}
                name={inputInfo}
                className={classNameInfo}
                placeholder={displayName} 
                type={formType}
                onChange={handleChange}
                value={value}
                required    
            />
            <label htmlFor="title" className="form__label">{displayName}</label>   
        </>
    )
}

export default FormInput
