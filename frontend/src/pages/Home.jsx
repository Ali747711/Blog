import React, { useEffect, useState } from 'react'
import Nav from '../components/Navbar';
import api from '../libs/axios'

import Card from '../components/Card';
import NotFound from '../components/NotFound';
const Home = () => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    const getAllPosts = async() => {
      try {
        const res = await api.get('/posts')
        setPosts(res.data)
      } catch (error) {
        console.log(error)
      }
    }

    getAllPosts()
  }, [])
  return (
    <div className='min-h-screen bg-gray-400 font-poppins'>
        <Nav/>
        
        {posts.length !==0 ? 
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap'>
          {posts.map(post => (
            <Card key={post._id} post={post}/>
          ))}
        </div> : <NotFound/>}
        

        
    </div>
  )
}

export default Home
