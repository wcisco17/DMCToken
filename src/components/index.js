import React, { Fragment } from 'react';
import HomeContainer from './HomeContainer'
import { DrizzleContext } from 'drizzle-react';






const Home = () => {
    return (

        <DrizzleContext.Consumer>
            {drizzleContext => {
                const { drizzle, drizzleState, initialized } = drizzleContext;
                return (
                    <>
                    {!initialized ? 
                   <div>
                       <h2>Loading ...</h2>
                   </div>:
                    <Fragment>
                        <div className="main_container" >
                        <HomeContainer  drizzle={drizzle} drizzleState={drizzleState} />
                        </div>
                    </Fragment>
                    }
                    </>
                )
            }}
        </DrizzleContext.Consumer>
    )
}
export default Home
