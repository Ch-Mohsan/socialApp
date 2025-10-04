import React from 'react'
import { useSelector } from 'react-redux'
import PostCard from '../components/posts/PostCard'
import CreatePostCard from '../components/posts/CreatePostCard'
import StorySection from '../components/story/StorySection'
import SuggestedUsers from '../components/users/SuggestedUsers'
import LandingPage from '../components/LandingPage'
import { TrendingUp, Users } from 'lucide-react'

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
    <div className={`min-h-screen font-serif transition-all duration-300 ${
      isDarkMode 
        ? 'bg-[var(--dark-surface)] text-[var(--dark-text)]' 
        : 'bg-[var(--light-paper)] text-[var(--light-ink)]'
    }`}>
      {/* Main Container with Classical Proportions */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        
        {/* Welcome Header */}
        <div className="mb-8">
          <h1 className={`text-3xl font-bold mb-2 ${
            isDarkMode ? 'text-[var(--dark-text)]' : 'text-[var(--light-ink)]'
          }`}>
            Good Evening
          </h1>
          <p className={`text-lg ${
            isDarkMode ? 'text-[var(--dark-muted)]' : 'text-[var(--light-secondary)]'
          }`}>
            Discover thoughtful conversations and inspiring content
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
          
          {/* Main Feed - Focused Content Area */}
          <div className="xl:col-span-8">
            
            {/* Stories with Classical Styling */}
            <div className="mb-8">
              <div className={`rounded-2xl p-6 shadow-sm border transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-[var(--dark-elevated)] border-[var(--dark-border)]' 
                  : 'bg-white border-[var(--light-border)]'
              }`}>
                <h2 className={`text-xl font-semibold mb-4 ${
                  isDarkMode ? 'text-[var(--dark-text)]' : 'text-[var(--light-ink)]'
                }`}>
                  Stories
                </h2>
                <StorySection />
              </div>
            </div>

            {/* Create Post with Classical Form */}
            <div className="mb-8">
              <div className={`rounded-2xl p-6 shadow-sm border transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-[var(--dark-elevated)] border-[var(--dark-border)]' 
                  : 'bg-white border-[var(--light-border)]'
              }`}>
                <CreatePostCard />
              </div>
            </div>

            {/* Posts Feed with Enhanced Spacing */}
            <div className="space-y-8">
              {mockPosts.map((post) => (
                <div key={post.id} className={`rounded-2xl shadow-sm border transition-all duration-300 ${
                  isDarkMode 
                    ? 'bg-[var(--dark-elevated)] border-[var(--dark-border)]' 
                    : 'bg-white border-[var(--light-border)]'
                }`}>
                  <PostCard post={post} />
                </div>
              ))}
            </div>

            {/* Classical Load More */}
            <div className="mt-12 text-center">
              <button className={`px-8 py-4 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
                isDarkMode 
                  ? 'bg-[var(--dark-accent)] text-white hover:bg-opacity-90 shadow-lg' 
                  : 'bg-[var(--light-accent)] text-white hover:bg-opacity-90 shadow-lg'
              }`}>
                Load More Stories
              </button>
            </div>
          </div>

          {/* Elegant Right Sidebar */}
          <div className="xl:col-span-4">
            <div className="sticky top-24 space-y-6">
              
              {/* Suggested Connections */}
              <div className={`rounded-2xl p-6 shadow-sm border transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-[var(--dark-elevated)] border-[var(--dark-border)]' 
                  : 'bg-white border-[var(--light-border)]'
              }`}>
                <div className="flex items-center gap-2 mb-4">
                  <Users className={`w-5 h-5 ${
                    isDarkMode ? 'text-[var(--dark-accent)]' : 'text-[var(--light-accent)]'
                  }`} />
                  <h3 className={`text-lg font-semibold ${
                    isDarkMode ? 'text-[var(--dark-text)]' : 'text-[var(--light-ink)]'
                  }`}>
                    Suggested Connections
                  </h3>
                </div>
                <SuggestedUsers />
              </div>

              {/* Trending with Classical Design */}
              <div className={`rounded-2xl p-6 shadow-sm border transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-[var(--dark-elevated)] border-[var(--dark-border)]' 
                  : 'bg-white border-[var(--light-border)]'
              }`}>
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className={`w-5 h-5 ${
                    isDarkMode ? 'text-[var(--dark-accent)]' : 'text-[var(--light-accent)]'
                  }`} />
                  <h3 className={`text-lg font-semibold ${
                    isDarkMode ? 'text-[var(--dark-text)]' : 'text-[var(--light-ink)]'
                  }`}>
                    Trending Topics
                  </h3>
                </div>
                <div className="space-y-4">
                  {['#ClassicalDesign', '#Minimalism', '#Typography', '#Architecture', '#Renaissance'].map((tag, index) => (
                    <div key={index} className={`cursor-pointer p-3 rounded-xl transition-all duration-200 hover:bg-opacity-50 ${
                      isDarkMode ? 'hover:bg-[var(--dark-surface)]' : 'hover:bg-[var(--light-surface)]'
                    }`}>
                      <div className="flex justify-between items-start">
                        <div>
                          <span className={`font-medium ${
                            isDarkMode ? 'text-[var(--dark-accent)]' : 'text-[var(--light-accent)]'
                          }`}>
                            {tag}
                          </span>
                          <p className={`text-sm ${
                            isDarkMode ? 'text-[var(--dark-muted)]' : 'text-[var(--light-secondary)]'
                          }`}>
                            {Math.floor(Math.random() * 300)}K posts
                          </p>
                        </div>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          isDarkMode 
                            ? 'bg-green-900 text-green-300' 
                            : 'bg-green-100 text-green-700'
                        }`}>
                          +{Math.floor(Math.random() * 20 + 5)}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Classical Footer */}
              <div className={`rounded-2xl p-6 shadow-sm border transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-[var(--dark-elevated)] border-[var(--dark-border)]' 
                  : 'bg-white border-[var(--light-border)]'
              }`}>
                <div className={`text-sm space-y-3 ${
                  isDarkMode ? 'text-[var(--dark-muted)]' : 'text-[var(--light-secondary)]'
                }`}>
                  <div className="flex flex-wrap gap-3 text-xs">
                    <a href="/about" className="hover:underline">About</a>
                    <a href="/privacy" className="hover:underline">Privacy</a>
                    <a href="/terms" className="hover:underline">Terms</a>
                    <a href="/help" className="hover:underline">Help</a>
                  </div>
                  <p className="text-xs pt-2 border-t border-opacity-20">
                    © 2024 SocialApp • Crafted for thoughtful minds
                  </p>
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