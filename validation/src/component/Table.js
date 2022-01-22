import React, { useState } from "react";

function Table(props) {
  // let [detail, setdetail] = useState({
  //     firstName: "",
  //     lastName: "",
  //     age: "",
  //     mobile: "",
  //     Password: "",
  //     term: false,
  //     gender: false

  // })
  const [isfirstName, setisfirstName] = useState(true);
  const [firstError, setfirstError] = useState("");

  const [isLast, setisLast] = useState(true);
  const [lastError, setlastError] = useState("");

  const [isage, setisage] = useState(true);
  const [ageError, setageError] = useState("");

  const [ismobile, setismobile] = useState(true);
  const [mobileError, setmobileError] = useState("");

  const [isPassword, setisPassword] = useState(true);
  const [wordError, setwordError] = useState("");

  const [isgender, setisgender] = useState(true);
  const [genderError, setgenderError] = useState("");

  const [issubject, setissubject] = useState(true);
  const [subjectError, setsubjectError] = useState("");

  const [isterm, setisterm] = useState(true);
  const [termError, settermError] = useState("");

  // SubmitEvent

  let login = (e) => {
    e.preventDefault();
    // console.log(detail);

    const isName = firstNameValidate(props.p.firstName);
    const isLastv = lastNameValidation(props.p.lastName);
    const isAge = ageValidation(props.p.age);
    const mobilev = mobileValidation(props.p.mobile);
    const pass = passwordValidation(props.p.password);
    const term = termvalidation(props.p.term);
    const gen = gernderValidation(props.p.gender);
    const sub =  subjectValidation(props.p.subject)

    if (isName && isLastv && isAge && mobilev && pass && term && gen && sub) {
      const actualDetailCopy = [...props.actualDetail];
      actualDetailCopy.push(props.p);
      props.setactualDetail(actualDetailCopy);
      props.send({
        firstName: "",
        lastName: "",
        age: "",
        mobile: "",
        password: "",
        gender: "",
        subject:"",
        term: true,
      });
      alert("Data saved")
    } else {
      alert("invalid data");
    }
    // props.send(detail)
  };

  // firstName validatation
  const firstNameValidate = (firstval) => {
    if (firstval) {
      if (/^[a-zA-Z ]+$/.test(firstval)) {
        setisfirstName(true);
        setfirstError("");
        return true;
      } else {
        setisfirstName(false);
        setfirstError("*Please Enter Valid Name");
        return false;
      }
    } else {
      setisfirstName(false);
      setfirstError("*Enter your FirstName");
      return false;
    }
  };

  // lastName validation
  const lastNameValidation = (last) => {
    if (last) {
      if (/^[a-zA-Z ]+$/.test(last)) {
        setisLast(true);
        setlastError("");
        return true;
      } else {
        setisLast(false);
        setlastError("*Please enter valid name");
        return false;
      }
    } else {
      setisLast(false);
      setlastError("*Enter your LastName");
      return false;
    }
  };

  // ageValidation
  const ageValidation = (age) => {
    if (age) {
      if (/^\S[0-9]{0,3}$/.test(age)) {
        setisage(true);
        setageError("");
        return true;
      } else {
        setisage(false);
        setageError("*Please enter valid Age");
        return false;
      }
    } else {
      setisage(false);
      setageError("*Please enter  Age");
      return false;
    }
  };
  // mobile validation
  const mobileValidation = (number) => {
    if (number) {
      if (/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/.test(number)) {
        setismobile(true);
        setmobileError("");

        return true;
      } else {
        setismobile(false);
        setmobileError("Please enter valid mobile number");
        return false;
      }
    } else {
      setismobile(false);
      setmobileError("Please enter  number");
      return false;
    }
  };
  // passwordValidation

  const passwordValidation = (word) => {
    if (word) {
      if (/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(word)) {
        setisPassword(true);
        setwordError("");
        return true;
      } else {
        setisPassword(false);
        setwordError("*Please enter valid password");
        return false;
      }
    } else {
      setisPassword(false);
      setwordError("*Please enter valid password");
      return false;
    }
  };

  // termvalidation
  const termvalidation = (bollean) => {
    if (bollean === true) {
      setisterm(true);
      settermError("");
      return true;
    } else {
      setisterm(false);
      settermError("*Please Read term and condition");
      return false;
    }
  };

   

  // genderValidation

  const subjectValidation = (subject) => {
    if (subject === "react" || subject === "angular"|| subject ==="vue") {
      setissubject(true);
      setsubjectError("");
      return true;
    } else {
      setissubject(false);
      setsubjectError("*Please chose one value");
      return false;
    }
  };

// genderValidation

const gernderValidation = (gender) => {
  if (gender === "male" || gender === "female"|| gender ==="others") {
    setisgender(true);
    setgenderError("");
    return true;
  } else {
    setisgender(false);
    setgenderError("*Please chose one value");
    return false;
  }
};


  // upDatevalue in form

  let upDatevalue = (e) => {
    // console.log(e.target.name);
    const copyupDatevalue = { ...props.p };
    copyupDatevalue[e.target.name] = e.target.value;
    // console.log(copyupDatevalue);
    props.send(copyupDatevalue);
    // console.log(detail);
  };

  // update checkbox
  const updateterm = (e) => {
    const copyupDatevalue = { ...props.p };
    copyupDatevalue[e.target.name] = e.target.checked;
    // console.log(copyupDatevalue);
    props.send(copyupDatevalue);
  };

  return (
    <div>
      <div className="container">
        <div className="don">
          <div className="row ">
            <div className="col-lg-12 ">
              <div className="card bg-transparent ">
                <div className="card-header text-center bg-warning text-white">
                  <h2>Register Here</h2>
                </div>

                <div className="card-body">
                  <form onSubmit={login}>
                    {/*first name*/}

                    <div className="m-2 ">
                      <label className="text-dark mb-1 ">
                        <b>First Name</b>{" "}
                        <span className="text-danger">
                          <b>*</b>
                        </span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        value={props.p.firstName}
                        onChange={(e) => {
                          upDatevalue(e);
                        }}
                        name="firstName"
                      />
                      <i>
                        {" "}
                        {!isfirstName ? (
                          <span style={{ color: "red", fontSize: "15px" }}>
                            {firstError}
                          </span>
                        ) : null}
                      </i>
                    </div>   {/* first name end*/}


                             {/* last name start*/}

                             <div className="m-2 ">
                      <label className="text-dark mb-1 ">
                        <b>Last Name</b>{" "}
                        <span className="text-danger">
                          <b>*</b>
                        </span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        value={props.p.lastName}
                       
                        onChange={(e) => {
                          upDatevalue(e);
                        }}
                        name="lastName"
                      />
                      <i>
                      {!isLast ? (
                        <span style={{ color: "red", fontSize: "15px" }}>
                          {lastError}
                        </span>
                      ) : null}
  
                      </i>
                    </div> 

                             {/* last name end*/}

                        {/* age */}

                             <div className="m-2 ">
                             <label className="text-dark mb-1 ">
                               <b>Age</b>{" "}
                               <span className="text-danger">
                                 <b>*</b>
                               </span>
                             </label>
                             <input
                               type="text"
                               className="form-control"
                               value={props.p.age}
                              
                               onChange={(e) => {
                                 upDatevalue(e);
                               }}
                               name="age"
                             />
                             <i>
                             {!isLast ? (
                               <span style={{ color: "red", fontSize: "15px" }}>
                                 {ageError}
                               </span>
                             ) : null}
         
                             </i>
                           </div> 
       

                             
                      {/*mobile*/}

                      <div className="m-2 ">
                      <label className="text-dark mb-1 ">
                        <b>Mobile</b>{" "}
                        <span className="text-danger">
                          <b>*</b>
                        </span>
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        value={props.p.mobile}
                       
                        onChange={(e) => {
                          upDatevalue(e);
                        }}
                        name="mobile"
                      />
                      <i>
                      {!isLast ? (
                        <span style={{ color: "red", fontSize: "15px" }}>
                          {mobileError}
                        </span>
                      ) : null}
  
                      </i>
                    </div> 


                    {/*password*/}

                    <div className="m-2 ">
                    <label className="text-dark mb-1 ">
                      <b>Password</b>{" "}
                      <span className="text-danger">
                        <b>*</b>
                      </span>
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      value={props.p.password}
                     
                      onChange={(e) => {
                        upDatevalue(e);
                      }}
                      name="password"
                    />
                    <i>
                    {!isLast ? (
                      <span style={{ color: "red", fontSize: "15px" }}>
                        {wordError}
                      </span>
                    ) : null}

                    </i>
                  </div> 


                   {/*Subject*/}
                   <div className="col-md-10   mt-3">
                   &nbsp;<b > Subject</b> <span class="text-danger"><b>*</b></span>  &nbsp; &nbsp; &nbsp;
       
                         <input type="checkbox" name="subject" value="react" onChange={(e) => { upDatevalue(e);  }} /> React &nbsp;
             <input type="checkbox" name="subject" value="angular"  onChange={(e) => {
                             upDatevalue(e);
                           }} /> Angular  &nbsp;
                           <input type="checkbox" name="subject" value="vue" onChange={(e) => { upDatevalue(e);  }} /> Vue &nbsp;
             </div>
                         &nbsp; <i>    {!issubject ? (
                             <span style={{ color: "red", fontSize: "15px" }}>
                               {subjectError}
                             </span>
                           ) : null}</i>
    
  
                   
                  {/*Gender*/}
                  <div className="col-md-10   mt-3">
                  &nbsp;<b > Gender</b> <span class="text-danger"><b>*</b></span>  &nbsp; &nbsp; &nbsp;
			
                        <input type="radio" name="gender" value="male" onChange={(e) => { upDatevalue(e);  }} /> Male &nbsp;
						<input type="radio" name="gender" value="female"  onChange={(e) => {
                            upDatevalue(e);
                          }} /> Female &nbsp;
                          <input type="radio" name="gender" value="others" onChange={(e) => { upDatevalue(e);  }} /> Others &nbsp;
						</div>
                        &nbsp; <i>    {!isgender ? (
                            <span style={{ color: "red", fontSize: "15px" }}>
                              {genderError}
                            </span>
                          ) : null}</i>
                                {/*Gender end*/}
                   
    
                            {/*terms*/}
                            <div className="row form-group col-md-10 mt-3">
                            <div className="col-md-12 mr-5">
                             &nbsp; <input type="checkbox" name="term" class="text-dark"  onChange={(e) => {
                                    updateterm(e);
                                  }}/> &nbsp; Agree to terms and
                                    condidtions &nbsp;
                            </div>
                        
                        </div>
                        &nbsp;  <i>    {!isterm ? (
                                        <span style={{ color: "red", fontSize: "15px" }}>
                                                 {termError}
                                               </span>
                                             ) : null}</i>
                    

                                             <div className="text-center ">
                                             <input
                                             type="submit"
                                             value="login"
                                             className="bg-success text-white btn btn-outline"
                                           />
                         
                                         </div>

                  
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
