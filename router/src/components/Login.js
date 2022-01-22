import React, { useState } from "react";

function Login(props) {
  const [useDetails, setuserDetails] = useState({
    email: "",
    password: "",
  });

  const login = (event) => {
      console.log(event);
event.preventDefault()
    console.log(useDetails);
    if(useDetails.email && useDetails.password){
        //programatically navigate
        console.log("props", props)
        props.history.push('/home')
    }else{
        console.error("not valid")
    }
  };

//   const handleEmailChange = (event) => {
//     console.log(event);
//     console.log("name", event.target.name);
//     console.log("value", event.target.value);
//     //1.take a copy of the state
//     const useDetailsCopy = { ...useDetails };
//     useDetailsCopy.email = event.target.value;
//     setuserDetails(useDetailsCopy);
//   };

//   const handlePasswordChange = (event) => {
//     //1.take a copy of the state
//     const useDetailsCopy = { ...useDetails };
//     useDetailsCopy.password = event.target.value;
//     setuserDetails(useDetailsCopy);
//   }


const handleChange = (event)=>{
    console.log(event.target.name);
    const useDetailsCopy = {...useDetails}
    useDetailsCopy[event.target.name]=event.target.value
    setuserDetails(useDetailsCopy);
}
  return (
    <div>
      <form onSubmit={login}>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            onChange={(event) => {
            //   handleEmailChange(event);
            handleChange(event);
            }}
            value={useDetails.email}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            onChange={(event) => {
            //   handlePasswordChange(event);
            handleChange(event);
            }}
            value={useDetails.password}
          />
        </div>
        <div>
          <input type="submit" value="login" />
        </div>
      </form>
    </div>
  );
}

export default Login;
