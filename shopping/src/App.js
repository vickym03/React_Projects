import './App.css';
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Post from './Component/Post';
import Pagination from './Component/Pagination';



const App=()=>  {
  const [posts,setPosts]=useState([]);
  const [loading,setLoading]=useState(false)
  const [currentPage,setCurrentPage]=useState(1);
  const[postsPerPage]=useState(12);

  useEffect(()=>{
      const fetchPosts=async()=>{
        setLoading(true);
      
      const res=await axios.get('https://jsonplaceholder.typicode.com/comments');
    //  const res=await axios.get('  https://pixabay.com/api/?key=25347650-8ed784e3d4f72a24a9ce39366&q=yellow+flowers&image_type=photo&pretty=true');
        setPosts(res.data)
        setLoading(false)
      }

      fetchPosts();
  },[]);

  // console.log(posts);

  // Get current posts 

  const indexOfLastPost=currentPage*postsPerPage
  const indexOfFirstPost=indexOfLastPost-postsPerPage
 const currentPosts=posts.slice(indexOfFirstPost,indexOfLastPost);

  //change page
  const paginate=pageNumber=>setCurrentPage(pageNumber);
  return (
    <div>
  <Post posts={currentPosts} loading={loading}/>
      
      <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
    </div>
  );
}

export default App;
