import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { 
  Heart, 
  MessageCircle, 
  Share, 
  Users, 
  Globe, 
  Smartphone,
  ArrowRight,
  Play,
  Star
} from 'lucide-react'
import ThemeToggle from '../ui/ThemeToggle'

const LandingPage = () => {
  const { isDarkMode } = useSelector((state) => state.theme)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const features = [
    {
      icon: Heart,
      title: 'Connect & Share',
      description: 'Share your moments and connect with friends around the world',
      color: 'text-red-500'
    },
    {
      icon: MessageCircle,
      title: 'Real-time Chat',
      description: 'Chat instantly with your friends and family members',
      color: 'text-blue-500'
    },
    {
      icon: Globe,
      title: 'Discover Content',
      description: 'Explore trending content and discover new communities',
      color: 'text-green-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile Friendly',
      description: 'Access your social network from any device, anywhere',
      color: 'text-purple-500'
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Content Creator',
      avatar: 'https://via.placeholder.com/60',
      text: 'SocialApp has transformed how I connect with my audience. The interface is intuitive and the features are amazing!'
    },
    {
      name: 'Mike Chen',
      role: 'Tech Enthusiast',
      avatar: 'https://via.placeholder.com/60',
      text: 'Finally, a social platform that focuses on meaningful connections. Love the clean design and smooth experience.'
    },
    {
      name: 'Emma Wilson',
      role: 'Digital Artist',
      avatar: 'https://via.placeholder.com/60',
      text: 'The perfect platform to showcase my artwork and connect with fellow artists. Highly recommended!'
    }
  ]

  const mockPosts = [
    {
      id: 1,
      user: { name: 'Alex Rivera', avatar: 'https://via.placeholder.com/40' },
      content: 'Just launched my new project! 🚀',
      image: 'https://via.placeholder.com/300x200',
      likes: 42,
      comments: 8
    },
    {
      id: 2,
      user: { name: 'Maya Patel', avatar: 'https://via.placeholder.com/40' },
      content: 'Beautiful sunset from my morning walk ✨',
      image: 'https://via.placeholder.com/300x200',
      likes: 89,
      comments: 15
    },
    {
      id: 3,
      user: { name: 'James Wilson', avatar: 'https://via.placeholder.com/40' },
      content: 'Cooking something special today! 👨‍🍳',
      image: 'https://via.placeholder.com/300x200',
      likes: 56,
      comments: 23
    }
  ]

  return (
    <div className={`min-h-screen transition-colors duration-200 ${
      isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-purple-50'
    }`}>
      <ThemeToggle />
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className={`space-y-8 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
              <div className="space-y-4">
                <h1 className={`text-5xl lg:text-6xl font-bold leading-tight ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Connect with
                  <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Your World
                  </span>
                </h1>
                <p className={`text-xl leading-relaxed ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Share moments, discover content, and build meaningful connections with 
                  people who matter most to you.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/register"
                  className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <span>Get Started</span>
                  <ArrowRight className="group-hover:translate-x-1 transition-transform duration-200" size={20} />
                </Link>
                <Link
                  to="/login"
                  className={`px-8 py-4 rounded-xl font-semibold text-lg border-2 transition-all duration-200 flex items-center justify-center space-x-2 ${
                    isDarkMode 
                      ? 'border-gray-600 text-gray-300 hover:bg-gray-800' 
                      : 'border-gray-300 text-gray-700 hover:bg-white hover:shadow-md'
                  }`}
                >
                  <span>Sign In</span>
                </Link>
              </div>

              {/* Stats */}
              <div className="flex space-x-8">
                <div className="text-center">
                  <div className={`text-3xl font-bold ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    10M+
                  </div>
                  <div className={`text-sm ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    Active Users
                  </div>
                </div>
                <div className="text-center">
                  <div className={`text-3xl font-bold ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    50M+
                  </div>
                  <div className={`text-sm ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    Posts Shared
                  </div>
                </div>
                <div className="text-center">
                  <div className={`text-3xl font-bold ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    180+
                  </div>
                  <div className={`text-sm ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    Countries
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Mock Posts Carousel */}
            <div className={`relative ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
              <div className="relative w-full max-w-md mx-auto">
                {mockPosts.map((post, index) => (
                  <div
                    key={post.id}
                    className={`absolute inset-0 transition-all duration-500 transform ${
                      index === currentSlide 
                        ? 'translate-x-0 opacity-100 scale-100' 
                        : index < currentSlide 
                          ? '-translate-x-full opacity-0 scale-95'
                          : 'translate-x-full opacity-0 scale-95'
                    }`}
                  >
                    <div className={`rounded-2xl p-6 shadow-xl transition-colors duration-200 ${
                      isDarkMode 
                        ? 'bg-gray-800 border border-gray-700' 
                        : 'bg-white border border-gray-200'
                    }`}>
                      {/* Post Header */}
                      <div className="flex items-center space-x-3 mb-4">
                        <img
                          src={post.user.avatar}
                          alt={post.user.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div>
                          <h4 className={`font-semibold ${
                            isDarkMode ? 'text-white' : 'text-gray-900'
                          }`}>
                            {post.user.name}
                          </h4>
                          <p className={`text-xs ${
                            isDarkMode ? 'text-gray-400' : 'text-gray-500'
                          }`}>
                            2 hours ago
                          </p>
                        </div>
                      </div>

                      {/* Post Content */}
                      <p className={`mb-4 ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        {post.content}
                      </p>

                      {/* Post Image */}
                      <img
                        src={post.image}
                        alt="Post content"
                        className="w-full h-48 object-cover rounded-lg mb-4"
                      />

                      {/* Post Actions */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <Heart className="text-red-500" size={20} />
                            <span className={`text-sm ${
                              isDarkMode ? 'text-gray-400' : 'text-gray-600'
                            }`}>
                              {post.likes}
                            </span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MessageCircle className={`${
                              isDarkMode ? 'text-gray-400' : 'text-gray-600'
                            }`} size={20} />
                            <span className={`text-sm ${
                              isDarkMode ? 'text-gray-400' : 'text-gray-600'
                            }`}>
                              {post.comments}
                            </span>
                          </div>
                        </div>
                        <Share className={`${
                          isDarkMode ? 'text-gray-400' : 'text-gray-600'
                        }`} size={20} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Carousel Indicators */}
              <div className="flex justify-center space-x-2 mt-6">
                {mockPosts.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentSlide 
                        ? 'bg-blue-500 scale-110' 
                        : isDarkMode ? 'bg-gray-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Background Decoration */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-60 h-60 bg-gradient-to-tr from-pink-400 to-orange-500 rounded-full opacity-10 blur-3xl"></div>
      </section>

      {/* Features Section */}
      <section className={`py-20 ${
        isDarkMode ? 'bg-gray-800' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Why Choose SocialApp?
            </h2>
            <p className={`text-xl ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Discover the features that make us different
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl text-center group hover:scale-105 transition-all duration-300 ${
                  isDarkMode 
                    ? 'bg-gray-700 hover:bg-gray-600' 
                    : 'bg-gray-50 hover:bg-white hover:shadow-lg'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center`}>
                  <feature.icon className="text-white" size={32} />
                </div>
                <h3 className={`text-xl font-semibold mb-2 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {feature.title}
                </h3>
                <p className={`${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              What Our Users Say
            </h2>
            <p className={`text-xl ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Join millions of happy users worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl transition-all duration-300 hover:scale-105 ${
                  isDarkMode 
                    ? 'bg-gray-800 border border-gray-700' 
                    : 'bg-white border border-gray-200 shadow-lg'
                }`}
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={16} />
                  ))}
                </div>
                <p className={`mb-4 italic ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className={`font-semibold ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {testimonial.name}
                    </h4>
                    <p className={`text-sm ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 ${
        isDarkMode ? 'bg-gray-800' : 'bg-gradient-to-r from-blue-600 to-purple-600'
      }`}>
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join millions of users and start your social journey today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Create Free Account
            </Link>
            <Link
              to="/login"
              className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-200"
            >
              Sign In
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LandingPage