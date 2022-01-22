import React from 'react';

 const Post = ({posts,loading}) => {
     if(loading){
         return <h2>Loading....</h2>
     }

//   return <ul className='list-group mb-4'>
//       {
//           posts.map(post=>(

//               <li key={post.id} className='list-grop-item'>
//                   {post.email}
//               </li>
//           )
//             )
//       }

//   </ul>



return(


    <div className="container">
        <div className="row">
            <div className='text-center mb-3 text-danger'> <h1>  Pagination  Fetch </h1></div>

            {
                posts.map((post)=>
                {
                    return(
                       <div className='card col-lg-3  text-center  mt-3     ' key={post.id}> 
                       <div className='card-header bg-secondary text-white'>   <h5> EmpID : {post.id}</h5></div>
                           <div className='card-body bg-light                                                                           '>
                           
                    <div className=' mb-2'>   <b >Name : </b> {post.name}  </div>
                          <p className=' mb-2 text-left'>    <b >About Emp : </b> {post.body} </p>  
                  
                       
                           </div> 
                     <div className='card-footer text-center  bg-dark text-white '> <b> E-mail : {post.email}</b></div> 
                        </div>
                    )
                })
            }
        </div>

        <hr />
        
        
    </div>
)

   
  
};

export default Post