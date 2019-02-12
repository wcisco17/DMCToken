import React from 'react'
import { Link } from 'react-router-dom';

const styles = {
    flex: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        color: "white",
        paddingTop: 30,
        paddingBottom: 30,
        textDecoration: "none"
    }
}

export default () => {
    return (
        <nav style={styles.flex} >
            <Link to="/" >Home</Link>
            <Link to="/sale" >Token Sale</Link>
        </nav>
    )
}