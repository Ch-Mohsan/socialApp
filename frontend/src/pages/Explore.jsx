import React from 'react'
import { useSelector } from 'react-redux'
import PostCard from '../components/posts/PostCard'
import { TrendingUp, Hash } from 'lucide-react'

const Explore = () => {
  const { isDarkMode } = useSelector((state) => state.theme)

  // Mock trending posts
  const trendingPosts = [
    {
      id: 1,
      user: {
        id: 1,
        username: 'tech_innovator',
        avatar: 'https://via.placeholder.com/40',
        name: 'Tech Innovator'
      },
      content: 'The future of AI is here! Just unveiled our latest breakthrough in machine learning. 🚀',
      image: 'https://via.placeholder.com/600x400',
      likes: 2456,
      comments: 234,
      shares: 89,
      isLiked: false,
      timestamp: '3h',
      trending: true
    },
    {
      id: 2,
      user: {
        id: 2,
        username: 'design_guru',
        avatar: 'https://via.placeholder.com/40',
        name: 'Design Guru'
      },
      content: 'Minimalist design principles that will revolutionize your workflow. Less is more! ✨',
      image: 'https://via.placeholder.com/600x300',
      likes: 1893,
      comments: 167,
      shares: 45,
      isLiked: true,
      timestamp: '5h',
      trending: true
    }
  ]

  // Mock trending topics
  const trendingTopics = [
    { tag: '#ReactJS', posts: '1.2M' },
    { tag: '#AI', posts: '890K' },
    { tag: '#WebDevelopment', posts: '756K' },
    { tag: '#DesignThinking', posts: '543K' },
    { tag: '#TechNews', posts: '432K' },
    { tag: '#Innovation', posts: '389K' },
    { tag: '#Startup', posts: '298K' },
    { tag: '#MachineLearning', posts: '267K' }
  ]

  // Mock categories
  const categories = [
    { name: 'Technology', color: 'bg-blue-500', posts: '2.3M' },
    { name: 'Design', color: 'bg-purple-500', posts: '1.8M' },
    { name: 'Business', color: 'bg-green-500', posts: '1.5M' },
    { name: 'Art', color: 'bg-pink-500', posts: '1.2M' },
    { name: 'Science', color: 'bg-orange-500', posts: '987K' },
    { name: 'Travel', color: 'bg-teal-500', posts: '743K' }
  ]

  return (
    <div className={`min-h-screen transition-colors duration-200 ${
      isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className={`text-3xl font-bold mb-2 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Explore
          </h1>
          <p className={`text-lg ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Discover trending content and connect with new people
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-8">
            {/* Trending Section */}
            <div className={`rounded-xl p-6 mb-6 transition-colors duration-200 ${
              isDarkMode 
                ? 'bg-gray-800 border border-gray-700' 
                : 'bg-white border border-gray-200'
            }`}>
              <div className="flex items-center space-x-2 mb-4">
                <TrendingUp className={`w-6 h-6 ${
                  isDarkMode ? 'text-orange-400' : 'text-orange-500'
                }`} />
                <h2 className={`text-xl font-bold ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Trending Now
                </h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {categories.map((category, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg cursor-pointer transition-transform duration-200 hover:scale-105 ${category.color}`}
                  >
                    <h3 className="text-white font-semibold text-sm mb-1">
                      {category.name}
                    </h3>
                    <p className="text-white text-xs opacity-90">
                      {category.posts} posts
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Trending Posts */}
            <div className="space-y-6">
              <h2 className={`text-xl font-bold ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Trending Posts
              </h2>
              {trendingPosts.map((post) => (
                <div key={post.id} className="relative">
                  {post.trending && (
                    <div className="absolute -top-2 -right-2 z-10">
                      <div className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full flex items-center space-x-1">
                        <TrendingUp size={12} />
                        <span>Trending</span>
                      </div>
                    </div>
                  )}
                  <PostCard post={post} />
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="mt-8 text-center">
              <button className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                isDarkMode 
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700' 
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
              }`}>
                Load More Trending Posts
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-20 space-y-6">
              {/* Trending Topics */}
              <div className={`rounded-xl p-6 transition-colors duration-200 ${
                isDarkMode 
                  ? 'bg-gray-800 border border-gray-700' 
                  : 'bg-white border border-gray-200'
              }`}>
                <div className="flex items-center space-x-2 mb-4">
                  <Hash className={`w-5 h-5 ${
                    isDarkMode ? 'text-blue-400' : 'text-blue-500'
                  }`} />
                  <h3 className={`text-lg font-semibold ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    Trending Topics
                  </h3>
                </div>
                <div className="space-y-3">
                  {trendingTopics.map((topic, index) => (
                    <div
                      key={index}
                      className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors duration-200 ${
                        isDarkMode 
                          ? 'hover:bg-gray-700' 
                          : 'hover:bg-gray-50'
                      }`}
                    >
                      <div>
                        <span className={`font-medium ${
                          isDarkMode ? 'text-blue-400' : 'text-blue-600'
                        }`}>
                          {topic.tag}
                        </span>
                        <p className={`text-sm ${
                          isDarkMode ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          {topic.posts} posts
                        </p>
                      </div>
                      <TrendingUp className={`w-4 h-4 ${
                        isDarkMode ? 'text-gray-500' : 'text-gray-400'
                      }`} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Suggested Accounts */}
              <div className={`rounded-xl p-6 transition-colors duration-200 ${
                isDarkMode 
                  ? 'bg-gray-800 border border-gray-700' 
                  : 'bg-white border border-gray-200'
              }`}>
                <h3 className={`text-lg font-semibold mb-4 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Suggested Accounts
                </h3>
                <div className="space-y-3">
                  {[
                    { username: 'tech_trends', followers: '1.2M', avatar: 'https://via.placeholder.com/40' },
                    { username: 'design_daily', followers: '890K', avatar: 'https://via.placeholder.com/40' },
                    { username: 'code_masters', followers: '654K', avatar: 'https://via.placeholder.com/40' }
                  ].map((account, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <img
                          src={account.avatar}
                          alt={account.username}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div>
                          <h4 className={`font-semibold text-sm ${
                            isDarkMode ? 'text-white' : 'text-gray-900'
                          }`}>
                            {account.username}
                          </h4>
                          <p className={`text-xs ${
                            isDarkMode ? 'text-gray-400' : 'text-gray-600'
                          }`}>
                            {account.followers} followers
                          </p>
                        </div>
                      </div>
                      <button className="px-4 py-1 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600 transition-colors duration-200">
                        Follow
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Popular Categories */}
              <div className={`rounded-xl p-6 transition-colors duration-200 ${
                isDarkMode 
                  ? 'bg-gray-800 border border-gray-700' 
                  : 'bg-white border border-gray-200'
              }`}>
                <h3 className={`text-lg font-semibold mb-4 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Popular Categories
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['Technology', 'Design', 'Art', 'Music', 'Photography', 'Travel', 'Food', 'Fitness'].map((category, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 text-sm rounded-full cursor-pointer transition-colors duration-200 ${
                        isDarkMode 
                          ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Explore