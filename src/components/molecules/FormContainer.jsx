
import React from 'react';
import { FormInput } from '../organism/FormInput';



const FormContainer = ({ accountInput, sendEther, handle, clear, ether, handleChange, value }) => {
    return (
        <div className="form-group" >
        <FormInput
        accountInput={accountInput}
        sendEther={sendEther}
        handle={handle}
        clear={clear}
        ether={ether}
        handleChange={handleChange} value={value}/>
    </div>
    )
}

export { FormContainer }