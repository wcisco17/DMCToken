import React, { Fragment } from 'react'
import { BootstrapInput, BootstrapInputAccount } from '../atoms/Input';
import { Button } from '../atoms/Button';
import { Warning } from '../atoms/Warning';



export const FormInput = ({ handle, accountInput, value, handleChange, sendEther, clear }) => {
    return (
          <Fragment>
          <form  >
            <BootstrapInputAccount
              onChange={handle}
                    val={accountInput}
                    name="Send Ether to"
                />
            <br/>
            <br/>
          <BootstrapInput
            onChange={handleChange} 
                    value={value}
                    pattern={"[0-9]*"}
                    min="1"
                    name="number"
                />
              
                <span className="input-group-btn" >
                <Button 
                text={'Send Tokens'}
                className="pt-5"
                onClick={(e) => {
                  e.preventDefault()
                  sendEther()
                  clear()
                }}
                
                />

              </span>
              <Warning />
          </form>
          </Fragment>
    )
}
