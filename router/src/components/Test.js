import React from 'react'
import {withRouter} from 'react-router-dom'

function Test(props) {
    console.log("test Props", props)
    const navigateLogin =()=>{
        props.history.push('/login')
    }
    return (
        <div>
            TEST Component
            <button onClick={ ()=>{ navigateLogin() }}>Login</button>
        </div>
    )
}

export default  withRouter(Test);
