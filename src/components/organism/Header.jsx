import React from 'react'
import { ProgressBarContainer } from './ProgressBar';





const Header = ({ children, account, title, balance }) => {
 
    return (
        <div className="container" style={{ width: "650px" }} >
        <div className="row" >
          <div className="col-lg-12" >
            <h1 className="text-center" >Current Contract: {title}</h1>
            <br />
              <h4>Current Account: 
              </h4>
              <p>
              {account}
              </p>
              <ProgressBarContainer now={balance} />
            <br />
              <div id="#content" className="text-center">
                    <p>
                      Introducing "DMC Token" (DMC)
                      Token Price in
                      <span className="token-price">
                         Ether. You currently have 
                        <span className="dapp-balance text-success mt-3"> {balance} | DMC / ETH,</span>
                        <br/>
                        <br/>
                        <span className="text-danger" >Max Ether user can send is set to 9ETHER | in Wei</span>
                      </span>
                    </p>
                    <br />
                    {children}
              </div>
          </div>
          <hr/>
        </div>
      </div>
    )
}


export { Header }