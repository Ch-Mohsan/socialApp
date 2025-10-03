import React from 'react'
import { useSelector } from 'react-redux'
import { Bell, Heart, MessageCircle, UserPlus } from 'lucide-react'

const Notifications = () => {
  const { isDarkMode } = useSelector((state) => state.theme)

  return (
    <div className={`min-h-screen transition-colors duration-200 ${
      isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className={`rounded-xl p-8 text-center ${
          isDarkMode 
            ? 'bg-gray-800 border border-gray-700' 
            : 'bg-white border border-gray-200'
        }`}>
          <Bell className={`w-16 h-16 mx-auto mb-4 ${
            isDarkMode ? 'text-gray-400' : 'text-gray-500'
          }`} />
          <h1 className={`text-2xl font-bold mb-2 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Notifications
          </h1>
          <p className={`text-lg ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Notifications system coming soon!
          </p>
        </div>
      </div>
    </div>
  )
}

export default Notifications