import React from 'react'
import { useSelector } from 'react-redux'
import { Camera, Settings, Grid, Bookmark, Users } from 'lucide-react'

const Profile = () => {
  const { isDarkMode } = useSelector((state) => state.theme)
  const { user } = useSelector((state) => state.auth)

  // Mock profile data
  const profileData = {
    username: 'john_doe',
    name: 'John Doe',
    bio: 'Software Developer | React Enthusiast | Coffee Lover ☕',
    avatar: 'https://via.placeholder.com/150',
    followers: 1234,
    following: 567,
    posts: 89,
    website: 'https://johndoe.dev',
    location: 'San Francisco, CA'
  }

  // Mock posts data
  const userPosts = [
    { id: 1, image: 'https://via.placeholder.com/300', likes: 45, comments: 12 },
    { id: 2, image: 'https://via.placeholder.com/300', likes: 78, comments: 23 },
    { id: 3, image: 'https://via.placeholder.com/300', likes: 92, comments: 34 },
    { id: 4, image: 'https://via.placeholder.com/300', likes: 156, comments: 45 },
    { id: 5, image: 'https://via.placeholder.com/300', likes: 67, comments: 18 },
    { id: 6, image: 'https://via.placeholder.com/300', likes: 234, comments: 56 }
  ]

  return (
    <div className={`min-h-screen transition-colors duration-200 ${
      isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Profile Header */}
        <div className={`rounded-xl p-8 mb-8 transition-colors duration-200 ${
          isDarkMode 
            ? 'bg-gray-800 border border-gray-700' 
            : 'bg-white border border-gray-200'
        }`}>
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
            {/* Profile Picture */}
            <div className="relative">
              <img
                src={profileData.avatar}
                alt={profileData.username}
                className="w-32 h-32 rounded-full object-cover"
              />
              <button className="absolute bottom-2 right-2 p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors duration-200">
                <Camera size={16} />
              </button>
            </div>

            {/* Profile Info */}
            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6 mb-6">
                <h1 className={`text-2xl font-bold ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {profileData.username}
                </h1>
                
                <div className="flex space-x-3">
                  <button className="px-6 py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-200">
                    Edit Profile
                  </button>
                  <button className={`p-2 rounded-lg transition-colors duration-200 ${
                    isDarkMode 
                      ? 'text-gray-400 hover:text-white hover:bg-gray-700' 
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}>
                    <Settings size={20} />
                  </button>
                </div>
              </div>

              {/* Stats */}
              <div className="flex justify-center md:justify-start space-x-8 mb-6">
                <div className="text-center">
                  <div className={`text-xl font-bold ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {profileData.posts}
                  </div>
                  <div className={`text-sm ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    posts
                  </div>
                </div>
                <div className="text-center">
                  <div className={`text-xl font-bold ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {profileData.followers.toLocaleString()}
                  </div>
                  <div className={`text-sm ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    followers
                  </div>
                </div>
                <div className="text-center">
                  <div className={`text-xl font-bold ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {profileData.following}
                  </div>
                  <div className={`text-sm ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    following
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div className="space-y-2">
                <h2 className={`font-semibold ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {profileData.name}
                </h2>
                <p className={`${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {profileData.bio}
                </p>
                <a
                  href={profileData.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600 transition-colors duration-200"
                >
                  {profileData.website}
                </a>
                <p className={`text-sm ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  📍 {profileData.location}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className={`rounded-xl mb-8 transition-colors duration-200 ${
          isDarkMode 
            ? 'bg-gray-800 border border-gray-700' 
            : 'bg-white border border-gray-200'
        }`}>
          <div className="flex justify-center space-x-8 p-4">
            <button className={`flex items-center space-x-2 px-4 py-2 border-b-2 border-blue-500 transition-colors duration-200 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              <Grid size={20} />
              <span className="font-medium">POSTS</span>
            </button>
            <button className={`flex items-center space-x-2 px-4 py-2 border-b-2 border-transparent transition-colors duration-200 ${
              isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
            }`}>
              <Bookmark size={20} />
              <span className="font-medium">SAVED</span>
            </button>
            <button className={`flex items-center space-x-2 px-4 py-2 border-b-2 border-transparent transition-colors duration-200 ${
              isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
            }`}>
              <Users size={20} />
              <span className="font-medium">TAGGED</span>
            </button>
          </div>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {userPosts.map((post) => (
            <div
              key={post.id}
              className={`relative aspect-square rounded-xl overflow-hidden cursor-pointer group transition-transform duration-200 hover:scale-105 ${
                isDarkMode 
                  ? 'bg-gray-800 border border-gray-700' 
                  : 'bg-white border border-gray-200'
              }`}
            >
              <img
                src={post.image}
                alt={`Post ${post.id}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-200 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-white text-center">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <span>❤️</span>
                      <span className="font-semibold">{post.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <span>💬</span>
                      <span className="font-semibold">{post.comments}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Posts Message */}
        {userPosts.length === 0 && (
          <div className={`text-center py-16 ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            <Camera size={64} className="mx-auto mb-4 opacity-50" />
            <h3 className="text-xl font-semibold mb-2">No Posts Yet</h3>
            <p>When you share photos, they will appear on your profile.</p>
            <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-200">
              Share your first photo
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Profile