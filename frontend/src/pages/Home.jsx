import React from 'react'
import { useSelector } from 'react-redux'
import PostCard from '../components/posts/PostCard'
import CreatePostCard from '../components/posts/CreatePostCard'
import StorySection from '../components/story/StorySection'
import SuggestedUsers from '../components/users/SuggestedUsers'
import LandingPage from '../components/landing/LandingPage'

const Home = () => {
  const { isDarkMode } = useSelector((state) => state.theme)
  const { posts } = useSelector((state) => state.posts)
  const { isAuthenticated } = useSelector((state) => state.auth)

  // If user is not authenticated, show landing page
  if (!isAuthenticated) {
    return <LandingPage />
  }

  // Mock posts data for demonstration
  const mockPosts = [
    {
      id: 1,
      user: {
        id: 1,
        username: 'devjam.tech',
        avatar: 'https://via.placeholder.com/40',
        name: 'DevJam Tech'
      },
      content: 'Exciting news for Flutter developers! Flutter 3.22 and Dart 3.4 have been released at Google I/O 2024. Here\'s what you need to know:',
      image: 'https://via.placeholder.com/600x400',
      likes: 24,
      comments: 7,
      shares: 3,
      isLiked: false,
      timestamp: '2h',
      location: 'Tech Hub'
    },
    {
      id: 2,
      user: {
        id: 2,
        username: 'roboticlife',
        avatar: 'https://via.placeholder.com/40',
        name: 'Robotic Life'
      },
      content: 'Just finished building my latest AI project! The future of robotics is here. 🤖✨',
      image: 'https://via.placeholder.com/600x300',
      likes: 156,
      comments: 23,
      shares: 12,
      isLiked: true,
      timestamp: '4h',
      location: 'AI Lab'
    }
  ]

  return (
    <div className={`min-h-screen transition-colors duration-200 ${
      isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Feed */}
          <div className="lg:col-span-8">
            {/* Stories Section */}
            <div className="mb-6">
              <StorySection />
            </div>

            {/* Create Post */}
            <div className="mb-6">
              <CreatePostCard />
            </div>

            {/* Posts Feed */}
            <div className="space-y-6">
              {mockPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>

            {/* Load More Button */}
            <div className="mt-8 text-center">
              <button className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                isDarkMode 
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700' 
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
              }`}>
                Load More Posts
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-20 space-y-6">
              {/* Suggested Users */}
              <SuggestedUsers />

              {/* Trending Section */}
              <div className={`rounded-xl p-6 transition-colors duration-200 ${
                isDarkMode 
                  ? 'bg-gray-800 border border-gray-700' 
                  : 'bg-white border border-gray-200'
              }`}>
                <h3 className={`text-lg font-semibold mb-4 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Trending Topics
                </h3>
                <div className="space-y-3">
                  {['#ReactJS', '#TailwindCSS', '#WebDevelopment', '#AI', '#Flutter'].map((tag) => (
                    <div key={tag} className={`cursor-pointer transition-colors duration-200 ${
                      isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'
                    }`}>
                      <span className="font-medium">{tag}</span>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                        {Math.floor(Math.random() * 1000)}K posts
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer Links */}
              <div className={`rounded-xl p-6 transition-colors duration-200 ${
                isDarkMode 
                  ? 'bg-gray-800 border border-gray-700' 
                  : 'bg-white border border-gray-200'
              }`}>
                <div className={`text-sm space-y-2 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  <div className="flex flex-wrap gap-2">
                    <a href="/about" className="hover:underline">About</a>
                    <span>•</span>
                    <a href="/privacy" className="hover:underline">Privacy</a>
                    <span>•</span>
                    <a href="/terms" className="hover:underline">Terms</a>
                  </div>
                  <p>© 2024 SocialApp</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home