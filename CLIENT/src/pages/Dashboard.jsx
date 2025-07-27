import { useState } from 'react';
import { FaPlay, FaHeart, FaStar, FaRegHeart, FaUsers, FaChartLine, FaFilm, FaClock, FaSearch, FaBell, FaCog, FaPlus, FaBars, FaTimes } from 'react-icons/fa';
import { RiMovie2Line, RiDashboardFill } from 'react-icons/ri';
import { motion } from 'framer-motion';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notifications] = useState([
    { id: 1, text: 'New episode of Stranger Things available', time: '2h ago', read: false },
    { id: 2, text: 'Your watchlist has been updated', time: '5h ago', read: true },
    { id: 3, text: 'Trending: The Last of Us breaking records', time: '1d ago', read: true }
  ]);

  const [quickStats] = useState([
    { title: 'Total Views', value: '1.2M', change: '+12%', icon: <FaChartLine className="text-blue-400" /> },
    { title: 'Active Users', value: '45.8K', change: '+5%', icon: <FaUsers className="text-green-400" /> },
    { title: 'New Content', value: '128', change: '+23%', icon: <FaFilm className="text-purple-400" /> },
    { title: 'Watch Time', value: '4.7H', change: '+8%', icon: <FaClock className="text-yellow-400" /> }
  ]);

  const [recentlyAdded, setRecentlyAdded] = useState([
    { id: 1, title: 'Dune: Part Two', year: 2024, rating: 4.8, image: 'https://i.pinimg.com/736x/c8/89/60/c8896031121292fcf979635fe9922c76.jpg' },
    { id: 2, title: 'The Batman Part II', year: 2024, rating: 4.7, image: 'https://i.pinimg.com/736x/50/51/d9/5051d96c4241212cc07163f4e3a615f2.jpg' },
    { id: 3, title: 'Deadpool & Wolverine', year: 2024, rating: 4.9, image: 'https://i.pinimg.com/736x/8f/0d/24/8f0d2415e79077198c0e78995233ff27.jpg' }
  ]);

  const [popularContent] = useState([
    { id: 4, title: 'Stranger Things S4', year: 2022, views: '45.2M', image: 'https://i.pinimg.com/736x/91/17/75/9117751636528b25a7b4687cab63572d.jpg' },
    { id: 5, title: 'The Mandalorian S3', year: 2023, views: '38.7M', image: 'https://i.pinimg.com/1200x/e4/30/ce/e430ce5b3afda48ac3774633c2396e9f.jpg' },
    { id: 6, title: 'The Last of Us', year: 2023, views: '52.1M', image: 'https://i.pinimg.com/1200x/19/11/f4/1911f47b607a03fd9554319c04c80a4f.jpg' }
  ]);

  // Add Movie Form State
  const [formData, setFormData] = useState({
    title: '',
    year: '',
    genre: [],
    description: '',
    rating: '',
    imageUrl: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleFavorite = (id) => {
    console.log(`Toggled favorite for item ${id}`);
  };

  const handleAddMovieChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleGenreToggle = (genre) => {
    setFormData(prev => ({
      ...prev,
      genre: prev.genre.includes(genre)
        ? prev.genre.filter(g => g !== genre)
        : [...prev.genre, genre]
    }));
  };

  const handleAddMovieSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      const newMovie = {
        id: Math.max(...recentlyAdded.map(m => m.id)) + 1,
        title: formData.title,
        year: parseInt(formData.year),
        rating: parseFloat(formData.rating),
        image: formData.imageUrl
      };
      
      setRecentlyAdded(prev => [newMovie, ...prev]);
      
      setFormData({
        title: '',
        year: '',
        genre: [],
        description: '',
        rating: '',
        imageUrl: ''
      });
      
      setIsSubmitting(false);
      setActiveTab('overview');
    }, 1500);
  };

  const genres = ['Action', 'Comedy', 'Drama', 'Sci-Fi', 'Horror', 'Thriller', 'Romance', 'Fantasy'];

  return (
    <div className="flex h-screen bg-gray-900 text-white overflow-hidden">
      {/* Mobile Sidebar Toggle */}
      <button 
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-gray-800/50 border border-gray-700/50"
      >
        {sidebarOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
      </button>

      {/* Sidebar */}
      <div className={`fixed md:relative z-10 w-64 bg-gray-800   border-gray-700 flex flex-col h-full transition-all duration-300 ${sidebarOpen ? 'left-0' : '-left-64'} md:left-0`}>
        <div className="p-6 border-b border-gray-700/50">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-yellow-400 bg-clip-text text-transparent mt-30">
            StreamVibe
          </h1>
          <p className="text-sm text-gray-400">Admin Dashboard</p>
        </div>
        
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          <button 
            onClick={() => {
              setActiveTab('overview');
              setSidebarOpen(false);
            }}
            className={`flex items-center w-full px-4 py-3 rounded-lg transition-colors ${activeTab === 'overview' ? 'bg-gradient-to-r from-pink-600/30 to-yellow-500/30 text-white' : 'text-gray-300 hover:bg-gray-700/50'}`}
          >
            <RiDashboardFill className="mr-3" />
            Overview
          </button>
          <button 
            onClick={() => {
              setActiveTab('add-movie');
              setSidebarOpen(false);
            }}
            className={`flex items-center w-full px-4 py-3 rounded-lg transition-colors ${activeTab === 'add-movie' ? 'bg-gradient-to-r from-pink-600/30 to-yellow-500/30 text-white' : 'text-gray-300 hover:bg-gray-700/50'}`}
          >
            <FaPlus className="mr-3" />
            Add Movie
          </button>
          <button 
            onClick={() => {
              setActiveTab('content');
              setSidebarOpen(false);
            }}
            className={`flex items-center w-full px-4 py-3 rounded-lg transition-colors ${activeTab === 'content' ? 'bg-gradient-to-r from-pink-600/30 to-yellow-500/30 text-white' : 'text-gray-300 hover:bg-gray-700/50'}`}
          >
            <RiMovie2Line className="mr-3" />
            Content
          </button>
          <button 
            onClick={() => {
              setActiveTab('analytics');
              setSidebarOpen(false);
            }}
            className={`flex items-center w-full px-4 py-3 rounded-lg transition-colors ${activeTab === 'analytics' ? 'bg-gradient-to-r from-pink-600/30 to-yellow-500/30 text-white' : 'text-gray-300 hover:bg-gray-700/50'}`}
          >
            <FaChartLine className="mr-3" />
            Analytics
          </button>
        </nav>
        
        <div className="p-4 border-t border-gray-700/50">
          <button className="flex items-center w-full px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-700/50 transition-colors">
            <FaCog className="mr-3" />
            Settings
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden mt-10">
        {/* Top Bar - Hidden on mobile as we have the sidebar toggle */}
        {/* <header className="hidden md:flex bg-gray-800/50 border-b border-gray-700/50 p-4 items-center justify-between">
          <div className="relative max-w-md w-full">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="text-gray-500" />
            </div>
            <input
              type="text"
              className="w-full pl-10 pr-4 py-2 bg-gray-700/50 border border-gray-600/50 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-white placeholder-gray-400"
              placeholder="Search dashboard..."
            />
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-gray-300 hover:text-white">
              <FaBell />
              {notifications.some(n => !n.read) && (
                <span className="absolute top-0 right-0 w-2 h-2 bg-pink-500 rounded-full"></span>
              )}
            </button>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-yellow-500"></div>
              <span className="hidden md:inline">Admin</span>
            </div>
          </div>
        </header> */}

        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          {activeTab === 'overview' && (
            <>
              {/* Welcome Header */}
              <div className="mb-6 md:mb-8">
                <h2 className="text-xl md:text-2xl font-bold mb-1">Welcome back, Admin</h2>
                <p className="text-gray-400 text-sm md:text-base">Here's what's happening with your platform today</p>
              </div>

              {/* Quick Stats - Stack on mobile */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
                {quickStats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-4 md:p-6"
                  >
                    <div className="flex justify-between">
                      <div>
                        <p className="text-xs md:text-sm text-gray-400">{stat.title}</p>
                        <h3 className="text-xl md:text-2xl font-bold mt-1">{stat.value}</h3>
                      </div>
                      <div className="text-xl md:text-2xl">
                        {stat.icon}
                      </div>
                    </div>
                    <p className={`text-xs md:text-sm mt-2 md:mt-3 ${stat.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                      {stat.change} from yesterday
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Content Sections - Stack on mobile */}
              <div className="flex flex-col md:grid md:grid-cols-2 gap-6">
                {/* Recently Added */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-gray-800/50 border border-gray-700/50 rounded-xl overflow-hidden"
                >
                  <div className="p-4 md:p-6 border-b border-gray-700/50">
                    <h3 className="text-base md:text-lg font-bold flex items-center">
                      <RiMovie2Line className="mr-2 text-pink-500" />
                      Recently Added
                    </h3>
                  </div>
                  <div className="divide-y divide-gray-700/50">
                    {recentlyAdded.map(item => (
                      <div key={item.id} className="p-3 md:p-4 hover:bg-gray-700/30 transition-colors flex">
                        <div className="w-12 h-16 md:w-16 md:h-24 rounded-lg overflow-hidden flex-shrink-0">
                          <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                        </div>
                        <div className="ml-3 md:ml-4 flex-1">
                          <h4 className="font-medium text-sm md:text-base">{item.title}</h4>
                          <p className="text-xs md:text-sm text-gray-400 mt-1">{item.year}</p>
                          <div className="flex items-center mt-1 md:mt-2">
                            <FaStar className="text-yellow-400 mr-1 text-xs md:text-sm" />
                            <span className="text-xs md:text-sm">{item.rating}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1 md:space-x-2">
                          <button className="p-1 md:p-2 text-gray-400 hover:text-white">
                            <FaPlay className="text-xs md:text-base" />
                          </button>
                          <button 
                            onClick={() => toggleFavorite(item.id)}
                            className="p-1 md:p-2 text-gray-400 hover:text-pink-500"
                          >
                            <FaRegHeart className="text-xs md:text-base" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="p-3 md:p-4 border-t border-gray-700/50 text-center">
                    <button className="text-pink-500 hover:text-pink-400 text-xs md:text-sm font-medium">
                      View All
                    </button>
                  </div>
                </motion.div>

                {/* Popular Content */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="bg-gray-800/50 border border-gray-700/50 rounded-xl overflow-hidden"
                >
                  <div className="p-4 md:p-6 border-b border-gray-700/50">
                    <h3 className="text-base md:text-lg font-bold flex items-center">
                      <FaChartLine className="mr-2 text-pink-500" />
                      Most Popular
                    </h3>
                  </div>
                  <div className="divide-y divide-gray-700/50">
                    {popularContent.map(item => (
                      <div key={item.id} className="p-3 md:p-4 hover:bg-gray-700/30 transition-colors flex">
                        <div className="w-12 h-16 md:w-16 md:h-24 rounded-lg overflow-hidden flex-shrink-0">
                          <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                        </div>
                        <div className="ml-3 md:ml-4 flex-1">
                          <h4 className="font-medium text-sm md:text-base">{item.title}</h4>
                          <p className="text-xs md:text-sm text-gray-400 mt-1">{item.year}</p>
                          <div className="flex items-center mt-1 md:mt-2">
                            <FaUsers className="text-blue-400 mr-1 text-xs md:text-sm" />
                            <span className="text-xs md:text-sm">{item.views}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1 md:space-x-2">
                          <button className="p-1 md:p-2 text-gray-400 hover:text-white">
                            <FaPlay className="text-xs md:text-base" />
                          </button>
                          <button 
                            onClick={() => toggleFavorite(item.id)}
                            className="p-1 md:p-2 text-gray-400 hover:text-pink-500"
                          >
                            <FaRegHeart className="text-xs md:text-base" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="p-3 md:p-4 border-t border-gray-700/50 text-center">
                    <button className="text-pink-500 hover:text-pink-400 text-xs md:text-sm font-medium">
                      View All
                    </button>
                  </div>
                </motion.div>
              </div>

              {/* Analytics Chart Placeholder */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-6 md:mt-8 bg-gray-800/50 border border-gray-700/50 rounded-xl p-4 md:p-6"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 md:mb-6">
                  <h3 className="text-base md:text-lg font-bold mb-2 md:mb-0">Viewership Analytics</h3>
                  <select className="bg-gray-700/50 border border-gray-600/50 text-white rounded-lg px-3 py-1 text-xs md:text-sm">
                    <option>Last 7 Days</option>
                    <option>Last 30 Days</option>
                    <option>Last 90 Days</option>
                  </select>
                </div>
                <div className="h-48 md:h-64 bg-gray-700/30 rounded-lg flex items-center justify-center text-gray-400 text-sm">
                  [Chart Visualization Placeholder]
                </div>
              </motion.div>
            </>
          )}

          {activeTab === 'add-movie' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-4 md:p-6 max-w-4xl mx-auto"
            >
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 flex items-center">
                <FaPlus className="mr-2 text-pink-500" />
                Add New Movie
              </h2>
              
              <form onSubmit={handleAddMovieSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  {/* Left Column */}
                  <div>
                    <div className="mb-3 md:mb-4">
                      <label className="block text-xs md:text-sm font-medium text-gray-300 mb-1 md:mb-2">Title*</label>
                      <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleAddMovieChange}
                        className="w-full px-3 md:px-4 py-1 md:py-2 bg-gray-700/50 border border-gray-600/50 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-white text-sm md:text-base"
                        required
                      />
                    </div>

                    <div className="mb-3 md:mb-4">
                      <label className="block text-xs md:text-sm font-medium text-gray-300 mb-1 md:mb-2">Release Year*</label>
                      <input
                        type="number"
                        name="year"
                        min="1900"
                        max="2099"
                        value={formData.year}
                        onChange={handleAddMovieChange}
                        className="w-full px-3 md:px-4 py-1 md:py-2 bg-gray-700/50 border border-gray-600/50 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-white text-sm md:text-base"
                        required
                      />
                    </div>

                    <div className="mb-3 md:mb-4">
                      <label className="block text-xs md:text-sm font-medium text-gray-300 mb-1 md:mb-2">Rating*</label>
                      <select
                        name="rating"
                        value={formData.rating}
                        onChange={handleAddMovieChange}
                        className="w-full px-3 md:px-4 py-1 md:py-2 bg-gray-700/50 border border-gray-600/50 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-white text-sm md:text-base"
                        required
                      >
                        <option value="">Select rating</option>
                        <option value="1">★</option>
                        <option value="2">★★</option>
                        <option value="3">★★★</option>
                        <option value="4">★★★★</option>
                        <option value="5">★★★★★</option>
                      </select>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div>
                    <div className="mb-3 md:mb-4">
                      <label className="block text-xs md:text-sm font-medium text-gray-300 mb-1 md:mb-2">Poster URL*</label>
                      <input
                        type="url"
                        name="imageUrl"
                        value={formData.imageUrl}
                        onChange={handleAddMovieChange}
                        className="w-full px-3 md:px-4 py-1 md:py-2 bg-gray-700/50 border border-gray-600/50 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-white text-sm md:text-base"
                        required
                      />
                    </div>

                    <div className="mb-3 md:mb-4">
                      <label className="block text-xs md:text-sm font-medium text-gray-300 mb-1 md:mb-2">Description*</label>
                      <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleAddMovieChange}
                        rows="3"
                        className="w-full px-3 md:px-4 py-1 md:py-2 bg-gray-700/50 border border-gray-600/50 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-white text-sm md:text-base"
                        required
                      ></textarea>
                    </div>
                  </div>
                </div>

                {/* Genre Selection */}
                <div className="mb-4 md:mb-6">
                  <label className="block text-xs md:text-sm font-medium text-gray-300 mb-1 md:mb-2">Genres</label>
                  <div className="flex flex-wrap gap-1 md:gap-2">
                    {genres.map(genre => (
                      <button
                        key={genre}
                        type="button"
                        onClick={() => handleGenreToggle(genre)}
                        className={`px-2 md:px-3 py-1 rounded-full text-xs md:text-sm transition-colors ${
                          formData.genre.includes(genre)
                            ? 'bg-gradient-to-r from-pink-600 to-yellow-500 text-white'
                            : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50'
                        }`}
                      >
                        {genre}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Preview Section */}
                {formData.imageUrl && (
                  <div className="mb-4 md:mb-6">
                    <label className="block text-xs md:text-sm font-medium text-gray-300 mb-1 md:mb-2">Preview</label>
                    <div className="flex items-center space-x-3 md:space-x-4">
                      <div className="w-16 h-20 md:w-24 md:h-36 rounded-lg overflow-hidden">
                        <img 
                          src={formData.imageUrl} 
                          alt="Movie poster preview" 
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.src = 'https://via.placeholder.com/150x225?text=Poster+Not+Found';
                          }}
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm md:text-base">{formData.title || 'Movie Title'}</h4>
                        <p className="text-xs md:text-sm text-gray-400">{formData.year || 'Year'}</p>
                        {formData.rating && (
                          <div className="flex items-center mt-1">
                            <FaStar className="text-yellow-400 mr-1 text-xs md:text-sm" />
                            <span className="text-xs md:text-sm">{formData.rating}/5</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* Form Actions */}
                <div className="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-3 md:space-x-4 pt-3 md:pt-4 border-t border-gray-700/50">
                  <button
                    type="button"
                    onClick={() => {
                      setFormData({
                        title: '',
                        year: '',
                        genre: [],
                        description: '',
                        rating: '',
                        imageUrl: ''
                      });
                      setActiveTab('overview');
                    }}
                    className="px-4 md:px-6 py-1 md:py-2 border border-gray-600/50 rounded-lg text-gray-300 hover:bg-gray-700/50 transition-colors text-sm md:text-base"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-4 md:px-6 py-1 md:py-2 bg-gradient-to-r from-pink-600 to-yellow-500 rounded-lg text-white font-medium hover:shadow-lg hover:shadow-pink-500/30 transition-all flex items-center justify-center text-sm md:text-base"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Adding...
                      </>
                    ) : (
                      'Add Movie'
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;