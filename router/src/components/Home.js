import React from 'react'

function Home(props) {
    return (
        <div>
            <b> Home Component</b>
            <p> User : {props.userName}</p>
        </div>
    )
}

export default Home
