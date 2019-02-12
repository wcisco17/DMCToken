import React from 'react';


const Warning = () => (
    <div className="alert alert-danger" role="alert">
        <h4 className="alert-heading">Warning!</h4>
      <hr />
        <p>Please make sure you have Metamask downloaded and Ganache running before sending Ether.</p>
  </div>
)

export { Warning }