import React from 'react'

import Home  from './pages/Home';



class Container extends React.PureComponent {

    componentDidMount() {
        document.title = "DMCToken"
    }


    render() {
        return (
        <React.Fragment>
                    <Home
                    drizzleState={this.props.drizzleState} drizzle={this.props.drizzle}
                    />
        </React.Fragment>
    )
  }
 }




  export default Container