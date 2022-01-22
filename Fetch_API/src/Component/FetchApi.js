import React , {useEffect,useState} from 'react';

function FetchApi()
{
    // constructor(){
    //     super();
    //     this.state={
    //         userlist:[]
    //     }
    // }

    // getData=()=>{
    //     fetch("   http://jsonplaceholder.typicode.com/users")
    //     .then(response=>response.json())
    //     .then(result=>this.setState({
    //         userlist:result
    //     })
    //     )
      
    // }

    // componentDidMount(){
    //     this.getData();
    // }


    const [user, setuser] = useState([]);
    useEffect(()=>{
        fetch("   http://jsonplaceholder.typicode.com/users")  
        .then(response=>response.json())
        .then (result=>{setuser(result)})
        .catch(e=>{console.log(e)})
    },[])

    
        return(
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h1 className="text-center text-danger">User List :   {user.length}</h1>
                      
                        <table className="table table-bordered">
                            <thead>
                                <tr className="text-info">
                                      <th>Id</th>
                                    <th> Name</th>
                                    <th> User Name</th>
                                    <th> Email</th>
                                    <th> Address</th>
                                    <th> Phone </th>
                                    <th> Website</th>
                                    <th> Company</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    user.map((xuser,index)=>
                                    {
                                        return(
                                            <tr key={index}> 
                                           
                                             <td>{xuser.id}</td>
                                             <td>{xuser.name}</td>
                                             <td>{xuser.username}</td>  
                                             <td> {xuser.email}</td>  
                                             
                                                <td>
                                                street:{xuser.address.street} ,
                                                suite:{xuser.address.street} ,
                                                   city:{xuser.address.city} ,
                                            zipcode:{xuser.address.zipcode} .
                                                </td>
                                                
                                             <td>{xuser.phone}</td>
                                             <td>{xuser.website}</td>
                                             <td>  Company Name: {xuser.company.name}
                                             catchPhase:{xuser.company.catchPhrase}
                                             bs: {xuser.company.bs}
                                             </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }


export default FetchApi;