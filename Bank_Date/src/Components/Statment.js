import React,{useState, useEffect} from 'react'

function Statement() {

    const [fromDate,setfrom]=useState()
    const [toDate,setto]=useState(0)

    const [validMessage, setValidMessage] = useState(false)
    const [invalidMessage, setInvalidMessgae] = useState(false)
    
    useEffect(()=>{
        const current=new Date()
        
        if (fromDate !== undefined && toDate !== undefined ){
            console.log(current);
            if ( fromDate < current && toDate < current && fromDate < toDate){
                setValidMessage(true)
                setInvalidMessgae(false)

            } else {
                setValidMessage(false)
                setInvalidMessgae(true)
            }
        }
    },[fromDate,toDate])

    const fromValue=(event)=>{
        const from=new Date(event.target.value)
        setfrom(from)
    }

    const toValue=(event)=>{
        const to=new Date(event.target.value)
        setto(to)
    }

    return (
        <div>
       


<div class="container mt-5">
    <div class="row">
      <div class="col-lg-4"></div>
      <div class="col-lg-4">
        <div class="card">
          <div class="card-header  bg-warning  text-white">
            <b class="fa fa-user-plus fa-lg"> Bank Statement </b>

          </div>

          <div class="card-body">
            <div class="form-group">
              <label><b> From Date</b></label>
              <input type="date" class="form-control" name='fromDate' onChange={(event)=>{fromValue(event)}} />
            </div>

            <div class="form-group mt-3">
              <label><b> To Date :</b></label>
              <input type="date" class="form-control" name='toDate' onChange={(event)=>{toValue(event)}}  />
            </div>
         
           <div className='mt-3'>
           {validMessage ? <p style={{fontSize:'15px', color:'black' , background:"green"}}>Valid Date</p> : ''}
           {invalidMessage? <p style={{fontSize:'15px', color:'black', background:"red"}}>Invalid Input</p> : ''}            
           
           </div>
          </div>
          
    
        
       
          
         
        </div>
      </div>
      <div class="col-lg-4"></div>
    </div>
  </div>












                </div>
            
        
    )
}

export default Statement