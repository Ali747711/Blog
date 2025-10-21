import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router';
import { ArrowLeftIcon, LoaderCircleIcon, LoaderIcon, LoaderPinwheel, Trash2Icon } from 'lucide-react';
import toast from "react-hot-toast";
import api from '../libs/axios';

const PostDetails = () => {
  const [post, setPost] = useState([])
  const navigate = useNavigate()
  const {id} = useParams()
  useEffect(() => {
    const fetchnote = async() =>{
      try {
        const item = await api.get(`/posts/${id}`)
        setPost(item.data)
      } catch (error) {
        console.log('Failed to fetch post!', error)
      }
    }
    fetchnote()
  },[id])

  const deletePost = async() => {
    try {
      if(!window.confirm(`Are you really want to delete this post: ${post.title}?`)) return
      await api.delete(`/posts/${id}`)
      toast.success('Posts successfully delete!')
      navigate('/')
    } catch (error) {
      console.log('Failed to delete POST', error)
      toast.error('Failed to delete POST!')
    }
  }
  
  return (
    <div className='mx-auto flex flex-col py-20'>
      <div className='flex justify-between mb-5'>
        <Link className='hover:bg-gray-800 rounded-2xl px-5 flex items-center' to={'/'}>
          <ArrowLeftIcon className='w-5 h-5'/> 
          Back to Posts
        </Link>
        <div>
          <button onClick={() => deletePost()} className='btn bg-red-300 text-white rounded-2xl'>Delete it</button>
          <button onClick={() => navigate(`/posts/${post._id}/edit`)} className="ml-2 btn btn-success rounded-2xl">Update</button>
        </div>
      </div>
        
      <div className='max-lg min-h-lvh h-96 rounded-xl p-px  border-1.5 border-primary px-6 py-10'>
        <h1 className='text-5xl text-white'>{post.title}</h1>
        <div className='w-full h-0.5 bg-primary '></div>
        <p className='text-2xl text-white mt-5'>{post.body}</p>
        <div className='w-full h-0.5 bg-primary '></div>
        <p className='text-2xl text-white mt-2'>{post.author}</p>
      </div>
    </div>
  )
}

export default PostDetails
