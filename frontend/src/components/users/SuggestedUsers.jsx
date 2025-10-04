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
        ? 'bg-[var(--surface)] border border-[var(--muted)]' 
        : 'bg-[var(--surface)] border border-[var(--muted)]'
    }`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className={`text-lg font-semibold text-[var(--ink)]`}>
          Suggested for you
        </h3>
        <button className={`text-sm font-medium hover:underline text-[var(--accent)] hover:text-[var(--accent-hover)]`}>
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
                <h4 className={`font-semibold text-sm truncate text-[var(--ink)]`}>
                  {suggestedUser.username}
                </h4>
                <p className={`text-xs truncate text-[var(--muted)]`}>
                  {suggestedUser.name}
                </p>
                <p className={`text-xs text-[var(--muted)]`}>
                  {suggestedUser.mutualFriends} mutual friends
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <button className="p-2 bg-[var(--accent)] text-white rounded-lg hover:bg-[var(--accent-hover)] transition-colors duration-200">
                <UserPlus size={16} />
              </button>
              <button className={`p-2 rounded-lg transition-colors duration-200 text-[var(--muted)] hover:text-[var(--ink)] hover:bg-[var(--paper)]`}>
                <X size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Find Friends Section */}
      <div className={`mt-6 pt-4 border-t border-[var(--muted)]`}>
        <h4 className={`text-sm font-semibold mb-3 text-[var(--ink)]`}>
          Find Friends
        </h4>
        <div className="space-y-2">
          <button className={`w-full p-3 rounded-lg text-sm font-medium transition-colors duration-200 bg-[var(--paper)] text-[var(--ink)] hover:bg-[var(--muted)] hover:text-[var(--accent)]`}>
            Connect Facebook Friends
          </button>
          <button className={`w-full p-3 rounded-lg text-sm font-medium transition-colors duration-200 bg-[var(--paper)] text-[var(--ink)] hover:bg-[var(--muted)] hover:text-[var(--accent)]`}>
            Find Phone Contacts
          </button>
        </div>
      </div>
    </div>
  )
}

export default SuggestedUsers