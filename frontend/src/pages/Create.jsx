import React from 'react'
import { useSelector } from 'react-redux'
import CreatePostCard from '../components/posts/CreatePostCard'

const Create = () => {
  const { isDarkMode } = useSelector((state) => state.theme)

  return (
    <div className={`min-h-screen transition-colors duration-200 ${
      isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className={`text-3xl font-bold mb-2 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Create New Post
          </h1>
          <p className={`text-lg ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Share your thoughts with the world
          </p>
        </div>
        
        <CreatePostCard />
      </div>
    </div>
  )
}

export default Create