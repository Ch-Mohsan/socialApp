import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { 
  Home, 
  Search, 
  Compass, 
  MessageCircle, 
  Heart, 
  PlusCircle, 
  User, 
  Moon, 
  Sun,
  Menu
} from 'lucide-react'
import { toggleTheme } from '../../store/slices/themeSlice'
import { logout } from '../../store/slices/authSlice'

const Navbar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { isDarkMode } = useSelector((state) => state.theme)
  const { isAuthenticated, user } = useSelector((state) => state.auth)

  const handleThemeToggle = () => {
    dispatch(toggleTheme())
  }

  const handleLogout = () => {
    dispatch(logout())
    navigate('/login')
  }

  const navItems = [
    { icon: Home, label: 'Home', path: '/', show: true },
    { icon: Search, label: 'Search', path: '/search', show: isAuthenticated },
    { icon: Compass, label: 'Explore', path: '/explore', show: isAuthenticated },
    { icon: MessageCircle, label: 'Messages', path: '/messages', show: isAuthenticated },
    { icon: Heart, label: 'Notifications', path: '/notifications', show: isAuthenticated },
    { icon: PlusCircle, label: 'Create', path: '/create', show: isAuthenticated },
  ]

  return (
    <nav className={`sticky top-0 z-50 border-b transition-colors duration-200 ${
      isDarkMode 
        ? 'bg-gray-900 border-gray-800' 
        : 'bg-white border-gray-200'
    }`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className={`font-bold text-xl ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              SocialApp
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              item.show && (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`p-2 rounded-lg hover:bg-opacity-20 transition-all duration-200 ${
                    isDarkMode 
                      ? 'text-gray-300 hover:bg-gray-700 hover:text-white' 
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                  title={item.label}
                >
                  <item.icon size={24} />
                </Link>
              )
            ))}
          </div>

          {/* Right side controls */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={handleThemeToggle}
              className={`p-2 rounded-lg transition-all duration-200 ${
                isDarkMode 
                  ? 'text-yellow-400 hover:bg-gray-800' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
              title={isDarkMode ? 'Light Mode' : 'Dark Mode'}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* User Profile */}
            {isAuthenticated ? (
              <div className="flex items-center space-x-3">
                <Link
                  to="/profile"
                  className={`p-2 rounded-lg transition-all duration-200 ${
                    isDarkMode 
                      ? 'text-gray-300 hover:bg-gray-800 hover:text-white' 
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  <User size={24} />
                </Link>
                <button
                  onClick={handleLogout}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isDarkMode 
                      ? 'bg-red-600 text-white hover:bg-red-700' 
                      : 'bg-red-500 text-white hover:bg-red-600'
                  }`}
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link
                  to="/login"
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isDarkMode 
                      ? 'text-blue-400 hover:bg-gray-800' 
                      : 'text-blue-600 hover:bg-gray-100'
                  }`}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isDarkMode 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : 'bg-blue-500 text-white hover:bg-blue-600'
                  }`}
                >
                  Sign Up
                </Link>
              </div>
            )}

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2">
              <Menu size={24} className={isDarkMode ? 'text-gray-300' : 'text-gray-600'} />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <div className="flex items-center justify-around py-3 border-t border-opacity-20">
            {navItems.slice(0, 5).map((item) => (
              item.show && (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`p-2 rounded-lg transition-all duration-200 ${
                    isDarkMode 
                      ? 'text-gray-300 hover:bg-gray-800 hover:text-white' 
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  <item.icon size={20} />
                </Link>
              )
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar