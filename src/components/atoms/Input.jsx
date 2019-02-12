import React from 'react'


const BootstrapInput = ({ value, onChange, name, min, pattern }) => {
    return (
        <input 
        id="numberOfTokens" type="text" 
        name={name}
        value={value}
        min={min}
        className="form-control"
        pattern={pattern}
        onChange={onChange}
        required
        />
        )
    }
    
    const BootstrapInputAccount = ({ val, onChange, name }) => {
        return (
            <input 
            placeholder={name}
            required
        className="form-control input-lg"
        value={val}
        onChange={onChange}
        />
    )
}

export { BootstrapInput, BootstrapInputAccount }