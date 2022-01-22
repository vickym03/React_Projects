import './App.css';
import React, { useState } from 'react';
// import Data from './component/Data';
import Table from './component/Table';
function App() {
  const [actualDetail, setactualDetail] = useState([])
  let [detail, setdetail] = useState({
    firstName: "",
    lastName: "",
    age: "",
    mobile: "",
    password: "",
    gender: "",
    subject:"",
    term: false


  })
  // const Tabledata = (value) => {
  //   setdetail(value)
  //   console.log(value);
  // }
  return (
    <div className=' container-fluid mt-3'>
      <div className='row'>
        <div className='col-lg-5' >

          <Table p={detail} send={setdetail} actualDetail={actualDetail} setactualDetail={setactualDetail} />
        </div>
        <div className='col-lg-6'>
          {/* <Data actualDetail={actualDetail} />
*/} 
        </div>
      </div>




    </div>
  )

}

export default App;
