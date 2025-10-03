import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Image, Smile, MapPin, X } from 'lucide-react'
import { addPost } from '../../store/slices/postSlice'

const CreatePostCard = () => {
  const dispatch = useDispatch()
  const { isDarkMode } = useSelector((state) => state.theme)
  const { user } = useSelector((state) => state.auth)
  
  const [content, setContent] = useState('')
  const [selectedImage, setSelectedImage] = useState(null)
  const [imagePreview, setImagePreview] = useState(null)
  const [isPosting, setIsPosting] = useState(false)

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setSelectedImage(file)
      const reader = new FileReader()
      reader.onload = () => {
        setImagePreview(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const removeImage = () => {
    setSelectedImage(null)
    setImagePreview(null)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!content.trim() && !selectedImage) {
      return
    }

    setIsPosting(true)

    // Simulate API call
    setTimeout(() => {
      const newPost = {
        id: Date.now(),
        user: {
          id: user.id,
          username: user.username,
          avatar: user.avatar,
          name: user.name
        },
        content: content.trim(),
        image: imagePreview,
        likes: 0,
        comments: 0,
        shares: 0,
        isLiked: false,
        timestamp: 'now'
      }

      dispatch(addPost(newPost))
      setContent('')
      setSelectedImage(null)
      setImagePreview(null)
      setIsPosting(false)
    }, 1000)
  }

  return (
    <div className={`rounded-xl p-6 transition-colors duration-200 ${
      isDarkMode 
        ? 'bg-gray-800 border border-gray-700' 
        : 'bg-white border border-gray-200'
    }`}>
      <form onSubmit={handleSubmit}>
        {/* Header */}
        <div className="flex items-center space-x-3 mb-4">
          <img
            src={user?.avatar || 'https://via.placeholder.com/40'}
            alt={user?.username}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="flex-1">
            <h3 className={`font-semibold text-sm ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              {user?.name || 'Your Name'}
            </h3>
            <p className={`text-xs ${
              isDarkMode ? 'text-gray-400' : 'text-gray-500'
            }`}>
              Share something with your friends
            </p>
          </div>
        </div>

        {/* Content Input */}
        <div className="mb-4">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="What's on your mind?"
            rows={3}
            className={`w-full p-3 rounded-lg border resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 ${
              isDarkMode 
                ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-500'
            }`}
          />
        </div>

        {/* Image Preview */}
        {imagePreview && (
          <div className="mb-4 relative">
            <img
              src={imagePreview}
              alt="Preview"
              className="w-full h-64 object-cover rounded-lg"
            />
            <button
              type="button"
              onClick={removeImage}
              className="absolute top-2 right-2 p-1 bg-gray-900 bg-opacity-70 text-white rounded-full hover:bg-opacity-90 transition-all duration-200"
            >
              <X size={16} />
            </button>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {/* Image Upload */}
            <label className={`flex items-center space-x-2 cursor-pointer px-3 py-2 rounded-lg transition-all duration-200 ${
              isDarkMode 
                ? 'text-gray-400 hover:text-green-400 hover:bg-gray-700' 
                : 'text-gray-600 hover:text-green-600 hover:bg-gray-100'
            }`}>
              <Image size={20} />
              <span className="text-sm font-medium">Photo</span>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </label>

            {/* Emoji Button */}
            <button
              type="button"
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                isDarkMode 
                  ? 'text-gray-400 hover:text-yellow-400 hover:bg-gray-700' 
                  : 'text-gray-600 hover:text-yellow-600 hover:bg-gray-100'
              }`}
            >
              <Smile size={20} />
              <span className="text-sm font-medium">Feeling</span>
            </button>

            {/* Location Button */}
            <button
              type="button"
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                isDarkMode 
                  ? 'text-gray-400 hover:text-red-400 hover:bg-gray-700' 
                  : 'text-gray-600 hover:text-red-600 hover:bg-gray-100'
              }`}
            >
              <MapPin size={20} />
              <span className="text-sm font-medium">Location</span>
            </button>
          </div>

          {/* Post Button */}
          <button
            type="submit"
            disabled={(!content.trim() && !selectedImage) || isPosting}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
          >
            {isPosting ? (
              <div className="flex items-center space-x-2">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                <span>Posting...</span>
              </div>
            ) : (
              'Post'
            )}
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreatePostCard