import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import Nav from "../components/Navbar";
import Card from "../components/Card";
import NotFound from "../components/NotFound";
import api from "../libs/axios";
import toast from "react-hot-toast";

const Home = () => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    const fetchPosts = async() => {
      try {
        const res = await api.get('/posts')
        setPosts(res.data)
  
      } catch (error) {
        console.log('Error occured while FETCHING data', error)
      }
    }
    fetchPosts()
  }, [])

  const handleDeleteAll = async () => {
    if(!window.confirm('Are you really want to delete all posts?')) return
    try {
      await Promise.all(posts.map(post => api.delete(`/posts/${post._id}`)))
      setPosts([])
      toast.succes('Successfully deleted POSTs!')
    } catch (error) {
      console.log('Failed to delete POSTS', error)
      toast.error('Failed to delete POST!')
    }
  }
  
  return (
    <div className=" text-gray-100">
      {/* Top Section */}
      <div className="w-full flex flex-col items-center py-6 gap-5 ">
        <h1 className="text-3xl lg:text-5xl font-bold tracking-tight text-primary">Posts</h1>
        <div className=" hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-lg">
            <input className="w-80 py-4 text-xl  bg-transparent outline-none placeholder-gray-500" type="text" placeholder="Search products" />
            <svg width="19" height="19" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.836 10.615 15 14.695" stroke="#7A7B7D" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                <path clip-rule="evenodd" d="M9.141 11.738c2.729-1.136 4.001-4.224 2.841-6.898S7.67.921 4.942 2.057C2.211 3.193.94 6.281 2.1 8.955s4.312 3.92 7.041 2.783" stroke="#7A7B7D" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </div>
        <button onClick={() => handleDeleteAll()} className={` ${ !posts.length ? 'btn-disabled' : ''} btn btn-warning text-white`}>Remove all Posts!</button>
      </div>

      {/* Posts Section */}
      <div className="w-full mx-auto px-6 py-10">
        {posts.length !== 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map(post => (
              <Card key={post._id} post={post} />
            ))}
          </div>
        ) : (
          <NotFound message="No posts available yet." />
        )}
      </div>
    </div>
  );
};

export default Home;
