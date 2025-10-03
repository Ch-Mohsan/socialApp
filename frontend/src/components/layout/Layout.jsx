import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setDarkMode } from '../../store/slices/themeSlice'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children }) => {
  const dispatch = useDispatch()
  const { isDarkMode } = useSelector((state) => state.theme)

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      dispatch(setDarkMode(savedTheme === 'dark'))
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      dispatch(setDarkMode(prefersDark))
    }
  }, [dispatch])

  useEffect(() => {
    // Save theme preference and apply to document
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')
    
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
      document.body.style.backgroundColor = '#111827' // gray-900
    } else {
      document.documentElement.classList.remove('dark')
      document.body.style.backgroundColor = '#ffffff'
    }
  }, [isDarkMode])

  return (
    <div className={`min-h-screen transition-colors duration-200 ${
      isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
    }`}>
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout