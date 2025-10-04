import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { 
  User, 
  MessageCircle, 
  PlusCircle, 
  Bookmark, 
  LogOut,
  Edit3,
  Heart,
  Users,
  Archive,
  Clock,
  Camera
} from 'lucide-react'
import { logout } from '../../store/slices/authSlice'

const Sidebar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { isDarkMode } = useSelector((state) => state.theme)
  const { isAuthenticated, user } = useSelector((state) => state.auth)

  if (!isAuthenticated) {
    return null
  }

  const handleLogout = () => {
    dispatch(logout())
    navigate('/login')
  }

  // Personalized navigation items for sidebar
  const personalizedItems = [
    { 
      icon: User, 
      label: 'My Profile', 
      path: '/profile', 
      description: 'View and edit your profile'
    },
    { 
      icon: PlusCircle, 
      label: 'Create Post', 
      path: '/create', 
      description: 'Share your moments'
    },
    { 
      icon: MessageCircle, 
      label: 'Messages', 
      path: '/messages', 
      description: 'Your conversations'
    },
    { 
      icon: Bookmark, 
      label: 'Saved Posts', 
      path: '/saved', 
      description: 'Your bookmarked content'
    },
    { 
      icon: Heart, 
      label: 'Liked Posts', 
      path: '/liked', 
      description: 'Posts you loved'
    },
    { 
      icon: Users, 
      label: 'Following', 
      path: '/following', 
      description: 'People you follow'
    },
    { 
      icon: Archive, 
      label: 'Archive', 
      path: '/archive', 
      description: 'Your archived posts'
    },
    { 
      icon: Clock, 
      label: 'Activity', 
      path: '/activity', 
      description: 'Your recent activity'
    }
  ]

  return (
    <aside className={`fixed left-0 top-16 h-full w-64 transform transition-all duration-300 ease-in-out z-40 border-r bg-[var(--paper)] border-[var(--muted)] lg:translate-x-0`} data-theme={isDarkMode ? 'dark' : 'light'}>
      <div className="flex flex-col h-full">
        {/* User Profile Section */}
        <div className={`p-6 border-b border-[var(--muted)]`}>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <img
                src={user?.avatar || 'https://via.placeholder.com/50'}
                alt={user?.username}
                className="w-12 h-12 rounded-full object-cover ring-2 ring-[var(--accent)] ring-offset-2"
              />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-[var(--paper)]"></div>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className={`font-semibold text-sm truncate text-[var(--ink)]`}>
                {user?.name || 'Your Name'}
              </h3>
              <p className={`text-xs truncate text-[var(--muted)]`}>
                @{user?.username || 'username'}
              </p>
            </div>
            <Link
              to="/profile/edit"
              className={`p-2 rounded-lg transition-all duration-200 hover:scale-110 text-[var(--muted)] hover:text-[var(--ink)] hover:bg-[var(--surface)]`}
              title="Edit Profile"
            >
              <Edit3 size={16} />
            </Link>
          </div>
          
          {/* Quick Stats */}
          <div className="flex justify-between mt-4 text-center">
            <div>
              <div className={`text-lg font-bold text-[var(--ink)]`}>
                127
              </div>
              <div className={`text-xs text-[var(--muted)]`}>
                Posts
              </div>
            </div>
            <div>
              <div className={`text-lg font-bold text-[var(--ink)]`}>
                1.2K
              </div>
              <div className={`text-xs text-[var(--muted)]`}>
                Followers
              </div>
            </div>
            <div>
              <div className={`text-lg font-bold text-[var(--ink)]`}>
                834
              </div>
              <div className={`text-xs text-[var(--muted)]`}>
                Following
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 overflow-y-auto py-4">
          <div className="space-y-2 px-4">
            {personalizedItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`group flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 hover:scale-105 text-[var(--muted)] hover:bg-[var(--surface)] hover:text-[var(--ink)]`}
              >
                <div className={`p-2 rounded-lg group-hover:scale-110 transition-transform duration-200 bg-[var(--surface)] group-hover:bg-[var(--accent)] group-hover:text-white`}>
                  <item.icon size={18} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-sm">{item.label}</div>
                  <div className={`text-xs text-[var(--muted)]`}>
                    {item.description}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </nav>

        {/* Bottom Section */}
        <div className={`p-4 border-t space-y-2 ${
          isDarkMode ? 'border-gray-800' : 'border-gray-200'
        }`}>
          {/* Logout */}
          <button
            onClick={handleLogout}
            className={`w-full flex items-center space-x-4 px-5 py-4 rounded-2xl transition-all duration-300 hover:scale-105 border shadow-sm ${
              isDarkMode 
                ? 'text-red-400 hover:bg-red-900/20 border-transparent hover:border-red-800/50' 
                : 'text-red-600 hover:bg-red-50 border-transparent hover:border-red-200'
            }`}
          >
            <div className={`p-3 rounded-xl transition-all duration-300 ${
              isDarkMode ? 'bg-red-900/20' : 'bg-red-50'
            }`}>
              <LogOut size={20} />
            </div>
            <span className="font-semibold text-sm">Logout</span>
          </button>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar