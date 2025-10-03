import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Heart, MessageCircle, Share, Bookmark, MoreHorizontal, MapPin } from 'lucide-react'
import { likePost, unlikePost } from '../../store/slices/postSlice'

const PostCard = ({ post }) => {
  const dispatch = useDispatch()
  const { isDarkMode } = useSelector((state) => state.theme)
  const [isLiked, setIsLiked] = useState(post.isLiked)
  const [likesCount, setLikesCount] = useState(post.likes)
  const [showComments, setShowComments] = useState(false)

  const handleLike = () => {
    if (isLiked) {
      dispatch(unlikePost(post.id))
      setLikesCount(likesCount - 1)
    } else {
      dispatch(likePost(post.id))
      setLikesCount(likesCount + 1)
    }
    setIsLiked(!isLiked)
  }

  return (
    <div className={`rounded-xl overflow-hidden transition-colors duration-200 ${
      isDarkMode 
        ? 'bg-gray-800 border border-gray-700' 
        : 'bg-white border border-gray-200'
    }`}>
      {/* Post Header */}
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img
            src={post.user.avatar}
            alt={post.user.username}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <div className="flex items-center space-x-2">
              <h3 className={`font-semibold text-sm ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {post.user.username}
              </h3>
              <span className={`text-xs ${
                isDarkMode ? 'text-gray-400' : 'text-gray-500'
              }`}>
                •
              </span>
              <span className={`text-xs ${
                isDarkMode ? 'text-gray-400' : 'text-gray-500'
              }`}>
                {post.timestamp}
              </span>
            </div>
            {post.location && (
              <div className="flex items-center space-x-1 mt-1">
                <MapPin className={`w-3 h-3 ${
                  isDarkMode ? 'text-gray-500' : 'text-gray-400'
                }`} />
                <span className={`text-xs ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  {post.location}
                </span>
              </div>
            )}
          </div>
        </div>
        
        <button className={`p-2 rounded-full hover:bg-opacity-20 transition-all duration-200 ${
          isDarkMode 
            ? 'text-gray-400 hover:bg-gray-700' 
            : 'text-gray-500 hover:bg-gray-100'
        }`}>
          <MoreHorizontal size={20} />
        </button>
      </div>

      {/* Post Content */}
      {post.content && (
        <div className="px-4 pb-3">
          <p className={`text-sm leading-relaxed ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            {post.content}
          </p>
        </div>
      )}

      {/* Post Image */}
      {post.image && (
        <div className="relative">
          <img
            src={post.image}
            alt="Post content"
            className="w-full h-auto object-cover"
            style={{ maxHeight: '600px' }}
          />
        </div>
      )}

      {/* Post Actions */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-4">
            <button
              onClick={handleLike}
              className={`flex items-center space-x-1 transition-all duration-200 ${
                isLiked 
                  ? 'text-red-500' 
                  : isDarkMode 
                    ? 'text-gray-400 hover:text-red-400' 
                    : 'text-gray-500 hover:text-red-500'
              }`}
            >
              <Heart 
                size={24} 
                className={isLiked ? 'fill-current' : ''} 
              />
            </button>
            
            <button
              onClick={() => setShowComments(!showComments)}
              className={`flex items-center space-x-1 transition-colors duration-200 ${
                isDarkMode 
                  ? 'text-gray-400 hover:text-blue-400' 
                  : 'text-gray-500 hover:text-blue-500'
              }`}
            >
              <MessageCircle size={24} />
            </button>
            
            <button className={`flex items-center space-x-1 transition-colors duration-200 ${
              isDarkMode 
                ? 'text-gray-400 hover:text-green-400' 
                : 'text-gray-500 hover:text-green-500'
            }`}>
              <Share size={24} />
            </button>
          </div>
          
          <button className={`transition-colors duration-200 ${
            isDarkMode 
              ? 'text-gray-400 hover:text-yellow-400' 
              : 'text-gray-500 hover:text-yellow-500'
          }`}>
            <Bookmark size={24} />
          </button>
        </div>

        {/* Likes Count */}
        <div className="mb-2">
          <span className={`text-sm font-semibold ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            {likesCount.toLocaleString()} likes
          </span>
        </div>

        {/* Comments Preview */}
        {post.comments > 0 && (
          <button
            onClick={() => setShowComments(!showComments)}
            className={`text-sm mb-2 ${
              isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-400'
            }`}
          >
            View all {post.comments} comments
          </button>
        )}

        {/* Add Comment */}
        <div className="flex items-center space-x-3 mt-3">
          <img
            src="https://via.placeholder.com/32"
            alt="Your avatar"
            className="w-8 h-8 rounded-full object-cover"
          />
          <input
            type="text"
            placeholder="Add a comment..."
            className={`flex-1 bg-transparent text-sm outline-none placeholder-gray-500 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}
          />
          <button className="text-blue-500 text-sm font-semibold hover:text-blue-600 transition-colors duration-200">
            Post
          </button>
        </div>
      </div>

      {/* Comments Section */}
      {showComments && (
        <div className={`border-t px-4 py-3 ${
          isDarkMode ? 'border-gray-700' : 'border-gray-200'
        }`}>
          <div className="space-y-3">
            {/* Sample comments */}
            <div className="flex items-start space-x-3">
              <img
                src="https://via.placeholder.com/32"
                alt="Commenter"
                className="w-8 h-8 rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <span className={`text-sm font-semibold ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    john_doe
                  </span>
                  <span className={`text-xs ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    2h
                  </span>
                </div>
                <p className={`text-sm ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  This looks amazing! Great work 👏
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default PostCard