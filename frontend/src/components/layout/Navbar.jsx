import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { 
  Home, 
  Compass, 
  Search,
  Moon, 
  Sun,
  Menu,
  X,
  Bell,
  Settings
} from 'lucide-react'
import { toggleTheme } from '../../store/slices/themeSlice'
import { logout } from '../../store/slices/authSlice'

const Navbar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { isDarkMode } = useSelector((state) => state.theme)
  const { isAuthenticated, user } = useSelector((state) => state.auth)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Don't render navbar if user is not authenticated
  if (!isAuthenticated) {
    return null
  }

  const handleThemeToggle = () => {
    dispatch(toggleTheme())
  }

  const handleLogout = () => {
    dispatch(logout())
    navigate('/login')
  }

  // General navigation items for navbar (public/discovery features)
  const navItems = [
    { icon: Home, label: 'Home', path: '/', show: true },
    { icon: Compass, label: 'Explore', path: '/explore', show: true },
    { icon: Search, label: 'Search', path: '/search', show: true },
  ]

  return (
    <nav className={`sticky top-0 z-50 border-b backdrop-blur-md bg-opacity-80 transition-all duration-300 ${
      isDarkMode 
        ? 'bg-gray-900 border-gray-800' 
        : 'bg-white border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <div className={`font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent ${
              isDarkMode ? 'hover:from-blue-400 hover:to-purple-400' : ''
            }`}>
              SocialApp
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              item.show && (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-200 hover:scale-105 ${
                    isDarkMode 
                      ? 'text-gray-300 hover:bg-gray-800 hover:text-white' 
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                  title={item.label}
                >
                  <item.icon size={20} />
                  <span className="font-medium text-sm">{item.label}</span>
                </Link>
              )
            ))}
          </div>

          {/* Right side controls */}
          <div className="flex items-center space-x-3">
            {/* Notifications */}
            <Link
              to="/notifications"
              className={`relative p-2 rounded-xl transition-all duration-200 hover:scale-105 ${
                isDarkMode 
                  ? 'text-gray-400 hover:bg-gray-800 hover:text-white' 
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
              }`}
              title="Notifications"
            >
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
            </Link>

            {/* Theme Toggle */}
            <button
              onClick={handleThemeToggle}
              className={`p-2 rounded-xl transition-all duration-200 hover:scale-105 ${
                isDarkMode 
                  ? 'text-yellow-400 hover:bg-gray-800' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
              title={isDarkMode ? 'Light Mode' : 'Dark Mode'}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Settings */}
            <Link
              to="/settings"
              className={`p-2 rounded-xl transition-all duration-200 hover:scale-105 ${
                isDarkMode 
                  ? 'text-gray-400 hover:bg-gray-800 hover:text-white' 
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
              }`}
              title="Settings"
            >
              <Settings size={20} />
            </Link>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-xl transition-all duration-200 ${
                isDarkMode 
                  ? 'text-gray-300 hover:bg-gray-800' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className={`md:hidden border-t transition-all duration-300 ${
            isDarkMode ? 'border-gray-800' : 'border-gray-200'
          }`}>
            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                item.show && (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                      isDarkMode 
                        ? 'text-gray-300 hover:bg-gray-800 hover:text-white' 
                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                    }`}
                  >
                    <item.icon size={20} />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                )
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar