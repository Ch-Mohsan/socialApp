import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { 
  User, 
  MessageCircle, 
  PlusCircle, 
  Bookmark, 
  Settings, 
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
      description: 'View and edit your profile',
      color: 'text-blue-500'
    },
    { 
      icon: PlusCircle, 
      label: 'Create Post', 
      path: '/create', 
      description: 'Share your moments',
      color: 'text-green-500'
    },
    { 
      icon: MessageCircle, 
      label: 'Messages', 
      path: '/messages', 
      description: 'Your conversations',
      color: 'text-purple-500'
    },
    { 
      icon: Bookmark, 
      label: 'Saved Posts', 
      path: '/saved', 
      description: 'Your bookmarked content',
      color: 'text-yellow-500'
    },
    { 
      icon: Heart, 
      label: 'Liked Posts', 
      path: '/liked', 
      description: 'Posts you loved',
      color: 'text-red-500'
    },
    { 
      icon: Users, 
      label: 'Following', 
      path: '/following', 
      description: 'People you follow',
      color: 'text-indigo-500'
    },
    { 
      icon: Archive, 
      label: 'Archive', 
      path: '/archive', 
      description: 'Your archived posts',
      color: 'text-gray-500'
    },
    { 
      icon: Clock, 
      label: 'Activity', 
      path: '/activity', 
      description: 'Your recent activity',
      color: 'text-orange-500'
    }
  ]

  return (
    <aside className={`fixed left-0 top-16 h-full w-64 transform transition-transform duration-300 ease-in-out z-40 border-r ${
      isDarkMode 
        ? 'bg-gray-900 border-gray-800' 
        : 'bg-white border-gray-200'
    } lg:translate-x-0`}>
      <div className="flex flex-col h-full">
        {/* User Profile Section */}
        <div className={`p-6 border-b ${
          isDarkMode ? 'border-gray-800' : 'border-gray-200'
        }`}>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <img
                src={user?.avatar || 'https://via.placeholder.com/50'}
                alt={user?.username}
                className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-500 ring-offset-2"
              />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className={`font-semibold text-sm truncate ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {user?.name || 'Your Name'}
              </h3>
              <p className={`text-xs truncate ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                @{user?.username || 'username'}
              </p>
            </div>
            <Link
              to="/profile/edit"
              className={`p-2 rounded-lg transition-all duration-200 hover:scale-110 ${
                isDarkMode 
                  ? 'text-gray-400 hover:text-white hover:bg-gray-800' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
              title="Edit Profile"
            >
              <Edit3 size={16} />
            </Link>
          </div>
          
          {/* Quick Stats */}
          <div className="flex justify-between mt-4 text-center">
            <div>
              <div className={`text-lg font-bold ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                127
              </div>
              <div className={`text-xs ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Posts
              </div>
            </div>
            <div>
              <div className={`text-lg font-bold ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                1.2K
              </div>
              <div className={`text-xs ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Followers
              </div>
            </div>
            <div>
              <div className={`text-lg font-bold ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                834
              </div>
              <div className={`text-xs ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
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
                className={`group flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 hover:scale-105 ${
                  isDarkMode 
                    ? 'text-gray-300 hover:bg-gray-800 hover:text-white' 
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <div className={`p-2 rounded-lg group-hover:scale-110 transition-transform duration-200 ${
                  isDarkMode ? 'bg-gray-800 group-hover:bg-gray-700' : 'bg-gray-100 group-hover:bg-gray-200'
                }`}>
                  <item.icon size={18} className={item.color} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-sm">{item.label}</div>
                  <div className={`text-xs ${
                    isDarkMode ? 'text-gray-500' : 'text-gray-500'
                  }`}>
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
          {/* Settings */}
          <Link
            to="/settings"
            className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 hover:scale-105 ${
              isDarkMode 
                ? 'text-gray-300 hover:bg-gray-800 hover:text-white' 
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
            }`}
          >
            <div className={`p-2 rounded-lg ${
              isDarkMode ? 'bg-gray-800' : 'bg-gray-100'
            }`}>
              <Settings size={18} className="text-gray-500" />
            </div>
            <span className="font-medium text-sm">Settings & Privacy</span>
          </Link>

          {/* Logout */}
          <button
            onClick={handleLogout}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 hover:scale-105 ${
              isDarkMode 
                ? 'text-red-400 hover:bg-red-900/20' 
                : 'text-red-600 hover:bg-red-50'
            }`}
          >
            <div className={`p-2 rounded-lg ${
              isDarkMode ? 'bg-red-900/20' : 'bg-red-50'
            }`}>
              <LogOut size={18} className="text-red-500" />
            </div>
            <span className="font-medium text-sm">Logout</span>
          </button>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar