import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { 
  Play, 
  ArrowRight, 
  Star, 
  Users, 
  Heart, 
  MessageCircle, 
  Camera, 
  TrendingUp,
  Shield,
  Zap,
  Globe,
  CheckCircle,
  Instagram,
  Twitter,
  Facebook
} from 'lucide-react'

const LandingPage = () => {
  const { isDarkMode } = useSelector((state) => state.theme)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Content Creator",
      image: "https://via.placeholder.com/80",
      quote: "SocialApp helped me grow from 1K to 50K followers in just 3 months. The creator tools are incredible.",
      metrics: "50K followers"
    },
    {
      name: "Marcus Johnson",
      role: "Digital Artist",
      image: "https://via.placeholder.com/80",
      quote: "The best platform for artists. My engagement rate increased by 300% since joining.",
      metrics: "2M+ views"
    },
    {
      name: "Elena Rodriguez",
      role: "Lifestyle Blogger",
      image: "https://via.placeholder.com/80",
      quote: "Finally, a social platform that puts creators first. The monetization tools are game-changing.",
      metrics: "$10K+ earned"
    }
  ]

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Upload and share content instantly with our optimized infrastructure",
      color: "text-yellow-500"
    },
    {
      icon: TrendingUp,
      title: "Creator Tools",
      description: "Professional analytics, scheduling, and monetization features built-in",
      color: "text-green-500"
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "Advanced privacy controls and secure encrypted messaging",
      color: "text-blue-500"
    }
  ]

  const steps = [
    {
      number: "01",
      title: "Create Your Profile",
      description: "Sign up in seconds and customize your unique profile"
    },
    {
      number: "02", 
      title: "Share Your Story",
      description: "Upload photos, videos, and connect with your audience"
    },
    {
      number: "03",
      title: "Grow & Earn",
      description: "Use our creator tools to grow your following and monetize your content"
    }
  ]

  return (
    <div className={`min-h-screen transition-all duration-300 ${
      isDarkMode 
        ? 'bg-[#0B0F12] text-[#E6E9EA]' 
        : 'bg-[#FBFAF7] text-[#0E1A2B]'
    }`}>
      
      {/* Navigation */}
      <nav className={`sticky top-0 z-50 backdrop-blur-md transition-all duration-300 ${
        isDarkMode 
          ? 'bg-[#0B0F12]/80 border-b border-[#7A868E]/20' 
          : 'bg-[#FBFAF7]/80 border-b border-[#9AA5B1]/20'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-[#B66E2E] to-[#C28745] rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-[#B66E2E] to-[#C28745] bg-clip-text text-transparent">
                SocialApp
              </span>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('features')}
                className={`hover:text-[#B66E2E] transition-colors duration-200 cursor-pointer ${
                  isDarkMode ? 'text-[#E6E9EA]' : 'text-[#0E1A2B]'
                }`}
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('creators')}
                className={`hover:text-[#B66E2E] transition-colors duration-200 cursor-pointer ${
                  isDarkMode ? 'text-[#E6E9EA]' : 'text-[#0E1A2B]'
                }`}
              >
                Creators
              </button>
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className={`hover:text-[#B66E2E] transition-colors duration-200 cursor-pointer ${
                  isDarkMode ? 'text-[#E6E9EA]' : 'text-[#0E1A2B]'
                }`}
              >
                How it Works
              </button>
              <Link to="/login" className={`hover:text-[#B66E2E] transition-colors duration-200 ${
                isDarkMode ? 'text-[#E6E9EA]' : 'text-[#0E1A2B]'
              }`}>
                Login
              </Link>
            </div>

            {/* CTA Button */}
            <Link
              to="/register"
              className="bg-[#B66E2E] hover:bg-[#C28745] text-white px-6 py-2 rounded-xl font-semibold transition-all duration-200 hover:scale-105 shadow-lg"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className={`text-5xl lg:text-6xl font-bold leading-tight ${
                  isDarkMode ? 'text-[#E6E9EA]' : 'text-[#0E1A2B]'
                }`}>
                  Create. Connect.{' '}
                  <span className="bg-gradient-to-r from-[#B66E2E] to-[#C28745] bg-clip-text text-transparent">
                    Thrive.
                  </span>
                </h1>
                <p className={`text-xl leading-relaxed ${
                  isDarkMode ? 'text-[#7A868E]' : 'text-[#9AA5B1]'
                }`}>
                  Join the social platform built for creators. Share your story, grow your audience, and monetize your passion with powerful tools designed for success.
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/register"
                  className="bg-[#B66E2E] hover:bg-[#C28745] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
                >
                  <span>Start Creating</span>
                  <ArrowRight size={20} />
                </Link>
                <button className={`border-2 px-8 py-4 rounded-xl font-semibold transition-all duration-200 hover:scale-105 flex items-center justify-center space-x-2 ${
                  isDarkMode 
                    ? 'border-[#7A868E] text-[#E6E9EA] hover:border-[#C28745] hover:text-[#C28745]' 
                    : 'border-[#9AA5B1] text-[#0E1A2B] hover:border-[#B66E2E] hover:text-[#B66E2E]'
                }`}>
                  <Play size={20} />
                  <span>Watch Demo</span>
                </button>
              </div>

              {/* Social Proof */}
              <div className="flex items-center space-x-6">
                <div className="flex -space-x-2">
                  {[1,2,3,4,5].map((i) => (
                    <img
                      key={i}
                      src={`https://via.placeholder.com/40`}
                      alt="User"
                      className="w-10 h-10 rounded-full border-2 border-white object-cover"
                    />
                  ))}
                </div>
                <div>
                  <div className="flex items-center space-x-1">
                    {[1,2,3,4,5].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-[#B66E2E] text-[#B66E2E]" />
                    ))}
                  </div>
                  <p className={`text-sm ${isDarkMode ? 'text-[#7A868E]' : 'text-[#9AA5B1]'}`}>
                    Trusted by 500K+ creators
                  </p>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative">
              {/* Main Phone Mockup */}
              <div className="relative z-10 mx-auto w-80 h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-2 shadow-2xl">
                <div className={`w-full h-full rounded-2xl overflow-hidden ${
                  isDarkMode ? 'bg-[#0F1416]' : 'bg-white'
                }`}>
                  {/* Phone Screen Content */}
                  <div className="p-4 space-y-4">
                    {/* Stories */}
                    <div className="flex space-x-3 overflow-x-auto">
                      {[1,2,3,4].map((i) => (
                        <div key={i} className="flex-shrink-0">
                          <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 p-0.5">
                            <img
                              src={`https://via.placeholder.com/60`}
                              alt="Story"
                              className="w-full h-full rounded-full object-cover border-2 border-white"
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Feed Post */}
                    <div className={`rounded-xl overflow-hidden ${
                      isDarkMode ? 'bg-[#0B0F12]' : 'bg-gray-50'
                    }`}>
                      <div className="p-3 flex items-center space-x-3">
                        <img
                          src="https://via.placeholder.com/40"
                          alt="User"
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div>
                          <p className={`font-semibold text-sm ${
                            isDarkMode ? 'text-[#E6E9EA]' : 'text-[#0E1A2B]'
                          }`}>
                            sarah_creates
                          </p>
                          <p className={`text-xs ${
                            isDarkMode ? 'text-[#7A868E]' : 'text-[#9AA5B1]'
                          }`}>
                            2 hours ago
                          </p>
                        </div>
                      </div>
                      <img
                        src="https://via.placeholder.com/300x200"
                        alt="Post"
                        className="w-full h-32 object-cover"
                      />
                      <div className="p-3 space-y-2">
                        <div className="flex items-center space-x-4">
                          <Heart className="w-5 h-5 text-red-500 fill-current" />
                          <MessageCircle className="w-5 h-5 text-gray-600" />
                          <Camera className="w-5 h-5 text-gray-600" />
                        </div>
                        <p className={`text-xs ${
                          isDarkMode ? 'text-[#E6E9EA]' : 'text-[#0E1A2B]'
                        }`}>
                          2,847 likes
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg animate-bounce">
                <Heart className="w-8 h-8 text-white fill-current" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg animate-pulse">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <div className="absolute top-1/2 -right-8 w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
                <Users className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Background Decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#B66E2E]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#C28745]/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className={`py-20 ${
        isDarkMode ? 'bg-[#0F1416]' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 ${
              isDarkMode ? 'text-[#E6E9EA]' : 'text-[#0E1A2B]'
            }`}>
              Built for Creators
            </h2>
            <p className={`text-xl ${
              isDarkMode ? 'text-[#7A868E]' : 'text-[#9AA5B1]'
            }`}>
              Everything you need to create, share, and grow your audience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className={`p-8 rounded-2xl transition-all duration-300 hover:scale-105 ${
                isDarkMode ? 'bg-[#0B0F12] border border-[#7A868E]/20' : 'bg-[#FBFAF7] border border-[#9AA5B1]/20'
              }`}>
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                  isDarkMode ? 'bg-[#0F1416]' : 'bg-white'
                }`}>
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <h3 className={`text-xl font-bold mb-4 ${
                  isDarkMode ? 'text-[#E6E9EA]' : 'text-[#0E1A2B]'
                }`}>
                  {feature.title}
                </h3>
                <p className={`${
                  isDarkMode ? 'text-[#7A868E]' : 'text-[#9AA5B1]'
                }`}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="creators" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 ${
              isDarkMode ? 'text-[#E6E9EA]' : 'text-[#0E1A2B]'
            }`}>
              Success Stories
            </h2>
            <p className={`text-xl ${
              isDarkMode ? 'text-[#7A868E]' : 'text-[#9AA5B1]'
            }`}>
              Real creators, real results
            </p>
          </div>

          <div className={`max-w-4xl mx-auto p-8 rounded-2xl ${
            isDarkMode ? 'bg-[#0F1416] border border-[#7A868E]/20' : 'bg-white border border-[#9AA5B1]/20'
          }`}>
            <div className="text-center">
              <img
                src={testimonials[currentTestimonial].image}
                alt={testimonials[currentTestimonial].name}
                className="w-20 h-20 rounded-full object-cover mx-auto mb-6"
              />
              <blockquote className={`text-xl italic mb-6 ${
                isDarkMode ? 'text-[#E6E9EA]' : 'text-[#0E1A2B]'
              }`}>
                "{testimonials[currentTestimonial].quote}"
              </blockquote>
              <div>
                <p className={`font-bold ${
                  isDarkMode ? 'text-[#E6E9EA]' : 'text-[#0E1A2B]'
                }`}>
                  {testimonials[currentTestimonial].name}
                </p>
                <p className={`text-sm ${
                  isDarkMode ? 'text-[#7A868E]' : 'text-[#9AA5B1]'
                }`}>
                  {testimonials[currentTestimonial].role}
                </p>
                <p className="text-[#B66E2E] font-semibold mt-2">
                  {testimonials[currentTestimonial].metrics}
                </p>
              </div>
            </div>

            {/* Testimonial Dots */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentTestimonial ? 'bg-[#B66E2E]' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className={`py-20 ${
        isDarkMode ? 'bg-[#0F1416]' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 ${
              isDarkMode ? 'text-[#E6E9EA]' : 'text-[#0E1A2B]'
            }`}>
              How It Works
            </h2>
            <p className={`text-xl ${
              isDarkMode ? 'text-[#7A868E]' : 'text-[#9AA5B1]'
            }`}>
              Get started in minutes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-[#B66E2E] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{step.number}</span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`hidden md:block absolute top-10 left-full w-full h-0.5 ${
                      isDarkMode ? 'bg-[#7A868E]/20' : 'bg-[#9AA5B1]/20'
                    }`} />
                  )}
                </div>
                <h3 className={`text-xl font-bold mb-4 ${
                  isDarkMode ? 'text-[#E6E9EA]' : 'text-[#0E1A2B]'
                }`}>
                  {step.title}
                </h3>
                <p className={`${
                  isDarkMode ? 'text-[#7A868E]' : 'text-[#9AA5B1]'
                }`}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/register"
              className="bg-[#B66E2E] hover:bg-[#C28745] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 hover:scale-105 shadow-lg inline-flex items-center space-x-2"
            >
              <span>Start Your Journey</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-16 border-t ${
        isDarkMode 
          ? 'bg-[#0B0F12] border-[#7A868E]/20' 
          : 'bg-[#FBFAF7] border-[#9AA5B1]/20'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-[#B66E2E] to-[#C28745] rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-[#B66E2E] to-[#C28745] bg-clip-text text-transparent">
                  SocialApp
                </span>
              </div>
              <p className={`${
                isDarkMode ? 'text-[#7A868E]' : 'text-[#9AA5B1]'
              }`}>
                The social platform built for creators to thrive.
              </p>
              <div className="flex space-x-4">
                <Instagram className={`w-6 h-6 ${isDarkMode ? 'text-[#7A868E] hover:text-[#C28745]' : 'text-[#9AA5B1] hover:text-[#B66E2E]'} transition-colors duration-200 cursor-pointer`} />
                <Twitter className={`w-6 h-6 ${isDarkMode ? 'text-[#7A868E] hover:text-[#C28745]' : 'text-[#9AA5B1] hover:text-[#B66E2E]'} transition-colors duration-200 cursor-pointer`} />
                <Facebook className={`w-6 h-6 ${isDarkMode ? 'text-[#7A868E] hover:text-[#C28745]' : 'text-[#9AA5B1] hover:text-[#B66E2E]'} transition-colors duration-200 cursor-pointer`} />
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className={`font-bold mb-4 ${
                isDarkMode ? 'text-[#E6E9EA]' : 'text-[#0E1A2B]'
              }`}>
                Product
              </h4>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('features')} className={`${isDarkMode ? 'text-[#7A868E] hover:text-[#C28745]' : 'text-[#9AA5B1] hover:text-[#B66E2E]'} transition-colors duration-200 cursor-pointer`}>Features</button></li>
                <li><button onClick={() => scrollToSection('creators')} className={`${isDarkMode ? 'text-[#7A868E] hover:text-[#C28745]' : 'text-[#9AA5B1] hover:text-[#B66E2E]'} transition-colors duration-200 cursor-pointer`}>For Creators</button></li>
                <li><button onClick={() => scrollToSection('how-it-works')} className={`${isDarkMode ? 'text-[#7A868E] hover:text-[#C28745]' : 'text-[#9AA5B1] hover:text-[#B66E2E]'} transition-colors duration-200 cursor-pointer`}>How it Works</button></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className={`font-bold mb-4 ${
                isDarkMode ? 'text-[#E6E9EA]' : 'text-[#0E1A2B]'
              }`}>
                Support
              </h4>
              <ul className="space-y-2">
                <li><a href="#help" className={`${isDarkMode ? 'text-[#7A868E] hover:text-[#C28745]' : 'text-[#9AA5B1] hover:text-[#B66E2E]'} transition-colors duration-200`}>Help Center</a></li>
                <li><a href="#contact" className={`${isDarkMode ? 'text-[#7A868E] hover:text-[#C28745]' : 'text-[#9AA5B1] hover:text-[#B66E2E]'} transition-colors duration-200`}>Contact</a></li>
                <li><a href="#status" className={`${isDarkMode ? 'text-[#7A868E] hover:text-[#C28745]' : 'text-[#9AA5B1] hover:text-[#B66E2E]'} transition-colors duration-200`}>Status</a></li>
                <li><a href="#community" className={`${isDarkMode ? 'text-[#7A868E] hover:text-[#C28745]' : 'text-[#9AA5B1] hover:text-[#B66E2E]'} transition-colors duration-200`}>Community</a></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className={`font-bold mb-4 ${
                isDarkMode ? 'text-[#E6E9EA]' : 'text-[#0E1A2B]'
              }`}>
                Stay Updated
              </h4>
              <p className={`mb-4 ${
                isDarkMode ? 'text-[#7A868E]' : 'text-[#9AA5B1]'
              }`}>
                Get the latest updates and creator tips.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter email"
                  className={`flex-1 px-4 py-2 rounded-l-xl border focus:outline-none focus:ring-2 focus:ring-[#B66E2E] ${
                    isDarkMode 
                      ? 'bg-[#0F1416] border-[#7A868E]/20 text-[#E6E9EA]' 
                      : 'bg-white border-[#9AA5B1]/20 text-[#0E1A2B]'
                  }`}
                />
                <button className="bg-[#B66E2E] hover:bg-[#C28745] text-white px-4 py-2 rounded-r-xl transition-colors duration-200">
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>

          <div className={`mt-12 pt-8 border-t text-center ${
            isDarkMode ? 'border-[#7A868E]/20 text-[#7A868E]' : 'border-[#9AA5B1]/20 text-[#9AA5B1]'
          }`}>
            <p>&copy; 2024 SocialApp. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage