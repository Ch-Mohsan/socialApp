import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Moon, Sun } from 'lucide-react'
import { toggleTheme } from '../../store/slices/themeSlice'

const ThemeToggle = ({ className = '' }) => {
  const dispatch = useDispatch()
  const { isDarkMode } = useSelector((state) => state.theme)

  const handleThemeToggle = () => {
    dispatch(toggleTheme())
  }

  return (
    <button
      onClick={handleThemeToggle}
      className={`fixed top-6 right-6 z-50 p-3 rounded-full shadow-lg transition-all duration-200 ${
        isDarkMode 
          ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700 border border-gray-700' 
          : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
      } ${className}`}
      title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
    </button>
  )
}

export default ThemeToggle