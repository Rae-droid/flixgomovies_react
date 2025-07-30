import { useState } from 'react';
import { FaUser, FaLock, FaGoogle, FaFacebook, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API calls
    setTimeout(() => {
      setIsLoading(false);
      // Handle login logic here
    }, 1500);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-8">
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="w-full max-w-md"
      >
        {/* Logo/Header */}
        {/* <motion.div variants={itemVariants} className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-yellow-400 bg-clip-text text-transparent mb-2">
            StreamVibe
          </h1>
          <p className="text-gray-400">Sign in to access your personalized watchlist</p>
        </motion.div> */}

        {/* Sign In Form */}
        <motion.div variants={itemVariants} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-gray-700/50">
          <form onSubmit={handleSubmit}>
            {/* Email Input */}
            <motion.div variants={itemVariants} className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaUser className="text-gray-500" />
                </div>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-white placeholder-gray-400 transition-all"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </motion.div>

            {/* Password Input */}
            <motion.div variants={itemVariants} className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock className="text-gray-500" />
                </div>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-white placeholder-gray-400 transition-all"
                  placeholder="••••••••"
                  required
                />
              </div>
            </motion.div>

            {/* Remember Me & Forgot Password */}
            <motion.div variants={itemVariants} className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-600 rounded bg-gray-700/50"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300">
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a href="#" className="font-medium text-pink-500 hover:text-pink-400 transition-colors">
                  Forgot password?
                </a>
              </div>
            </motion.div>

            {/* Sign In Button */}
            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-pink-600 to-yellow-500 text-white py-3 px-4 rounded-lg font-bold hover:shadow-lg hover:shadow-pink-500/30 transition-all flex items-center justify-center"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Signing in...
                </>
              ) : (
                'SignIn'
              )}
            </motion.button>
          </form>

          {/* Social Login */}
          <motion.div variants={itemVariants} className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-600/50"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gray-800/50 text-gray-400">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-600/50 rounded-md shadow-sm bg-gray-700/50 text-sm font-medium text-gray-300 hover:bg-gray-600/50 transition-colors"
              >
                <FaGoogle className="text-red-500 text-lg" />
              </motion.button>

              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-600/50 rounded-md shadow-sm bg-gray-700/50 text-sm font-medium text-gray-300 hover:bg-gray-600/50 transition-colors"
              >
                <FaFacebook className="text-blue-500 text-lg" />
              </motion.button>

              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-600/50 rounded-md shadow-sm bg-gray-700/50 text-sm font-medium text-gray-300 hover:bg-gray-600/50 transition-colors"
              >
                <FaTwitter className="text-blue-400 text-lg" />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

        {/* Sign Up Link */}
        <motion.div variants={itemVariants} className="mt-8 text-center text-sm text-gray-400">
          Don't have an account?{' '}
          <Link 
            to="/login" 
            className="font-medium text-pink-500 hover:text-pink-400 transition-colors"
          >
            Sign up now
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SignInPage;