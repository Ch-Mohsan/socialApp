import React from 'react'
import { useSelector } from 'react-redux'
import { Plus } from 'lucide-react'

const StorySection = () => {
  const { isDarkMode } = useSelector((state) => state.theme)
  const { user, isAuthenticated } = useSelector((state) => state.auth)

  // Mock stories data
  const stories = [
    {
      id: 1,
      user: {
        username: 'damanvohraa',
        avatar: 'https://via.placeholder.com/60'
      },
      hasStory: true,
      isViewed: false
    },
    {
      id: 2,
      user: {
        username: 'stability.ai',
        avatar: 'https://via.placeholder.com/60'
      },
      hasStory: true,
      isViewed: true
    },
    {
      id: 3,
      user: {
        username: 'thealexope',
        avatar: 'https://via.placeholder.com/60'
      },
      hasStory: true,
      isViewed: false
    },
    {
      id: 4,
      user: {
        username: 'jetbrains',
        avatar: 'https://via.placeholder.com/60'
      },
      hasStory: true,
      isViewed: true
    },
    {
      id: 5,
      user: {
        username: 'microsoft',
        avatar: 'https://via.placeholder.com/60'
      },
      hasStory: true,
      isViewed: false
    },
    {
      id: 6,
      user: {
        username: 'figma',
        avatar: 'https://via.placeholder.com/60'
      },
      hasStory: true,
      isViewed: false
    }
  ]

  return (
    <div className={`rounded-xl p-4 transition-colors duration-200 ${
      isDarkMode 
        ? 'bg-[var(--surface)] border border-[var(--muted)]' 
        : 'bg-[var(--surface)] border border-[var(--muted)]'
    }`}>
      <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
        {/* Add Story (Your Story) */}
        {isAuthenticated && (
          <div className="flex flex-col items-center flex-shrink-0 cursor-pointer group">
            <div className="relative">
              <div className={`w-16 h-16 rounded-full p-0.5 transition-colors duration-200 ${
                isDarkMode ? 'bg-[var(--muted)]' : 'bg-[var(--muted)]'
              }`}>
                <img
                  src={user?.avatar || 'https://via.placeholder.com/60'}
                  alt="Your story"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[var(--accent)] rounded-full flex items-center justify-center border-2 border-[var(--surface)]">
                <Plus size={12} className="text-white" />
              </div>
            </div>
            <span className={`text-xs mt-2 text-center max-w-[70px] truncate text-[var(--ink)]`}>
              Your story
            </span>
          </div>
        )}

        {/* Stories */}
        {stories.map((story) => (
          <div
            key={story.id}
            className="flex flex-col items-center flex-shrink-0 cursor-pointer group"
          >
            <div className={`w-16 h-16 rounded-full p-0.5 transition-all duration-200 ${
              story.hasStory && !story.isViewed
                ? 'bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500'
                : story.hasStory && story.isViewed
                ? 'bg-[var(--muted)]'
                : 'bg-[var(--muted)]'
            }`}>
              <img
                src={story.user.avatar}
                alt={`${story.user.username} story`}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <span className={`text-xs mt-2 text-center max-w-[70px] truncate transition-colors duration-200 text-[var(--ink)]`}>
              {story.user.username}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default StorySection