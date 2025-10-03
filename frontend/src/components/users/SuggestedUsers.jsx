import React from 'react'
import { useSelector } from 'react-redux'
import { UserPlus, X } from 'lucide-react'

const SuggestedUsers = () => {
  const { isDarkMode } = useSelector((state) => state.theme)

  // Mock suggested users data
  const suggestedUsers = [
    {
      id: 1,
      username: 'roboticlife',
      name: 'Robotic Life',
      avatar: 'https://via.placeholder.com/40',
      mutualFriends: 12,
      isFollowing: false
    },
    {
      id: 2,
      username: 'generativeaimodel',
      name: 'Generative AI Model',
      avatar: 'https://via.placeholder.com/40',
      mutualFriends: 8,
      isFollowing: false
    },
    {
      id: 3,
      username: 'neuralnetworks',
      name: 'Neural Networks',
      avatar: 'https://via.placeholder.com/40',
      mutualFriends: 15,
      isFollowing: false
    },
    {
      id: 4,
      username: 'energyefficient',
      name: 'Energy Efficient',
      avatar: 'https://via.placeholder.com/40',
      mutualFriends: 5,
      isFollowing: false
    }
  ]

  return (
    <div className={`rounded-xl p-6 transition-colors duration-200 ${
      isDarkMode 
        ? 'bg-gray-800 border border-gray-700' 
        : 'bg-white border border-gray-200'
    }`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className={`text-lg font-semibold ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}>
          Suggested for you
        </h3>
        <button className={`text-sm font-medium hover:underline ${
          isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'
        }`}>
          See All
        </button>
      </div>

      {/* Suggested Users List */}
      <div className="space-y-4">
        {suggestedUsers.map((suggestedUser) => (
          <div key={suggestedUser.id} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img
                src={suggestedUser.avatar}
                alt={suggestedUser.username}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="flex-1 min-w-0">
                <h4 className={`font-semibold text-sm truncate ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {suggestedUser.username}
                </h4>
                <p className={`text-xs truncate ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  {suggestedUser.name}
                </p>
                <p className={`text-xs ${
                  isDarkMode ? 'text-gray-500' : 'text-gray-400'
                }`}>
                  {suggestedUser.mutualFriends} mutual friends
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <button className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200">
                <UserPlus size={16} />
              </button>
              <button className={`p-2 rounded-lg transition-colors duration-200 ${
                isDarkMode 
                  ? 'text-gray-400 hover:text-gray-300 hover:bg-gray-700' 
                  : 'text-gray-500 hover:text-gray-400 hover:bg-gray-100'
              }`}>
                <X size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Find Friends Section */}
      <div className={`mt-6 pt-4 border-t ${
        isDarkMode ? 'border-gray-700' : 'border-gray-200'
      }`}>
        <h4 className={`text-sm font-semibold mb-3 ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}>
          Find Friends
        </h4>
        <div className="space-y-2">
          <button className={`w-full p-3 rounded-lg text-sm font-medium transition-colors duration-200 ${
            isDarkMode 
              ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}>
            Connect Facebook Friends
          </button>
          <button className={`w-full p-3 rounded-lg text-sm font-medium transition-colors duration-200 ${
            isDarkMode 
              ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}>
            Find Phone Contacts
          </button>
        </div>
      </div>
    </div>
  )
}

export default SuggestedUsers