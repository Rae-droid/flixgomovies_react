import { useState } from 'react';
import { FaFire, FaStar, FaPlay, FaHeart, FaRegHeart, FaFilter, FaChevronRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Footer from '../Components/Footer';

const TrendingMovies = () => {
  // Sample data - replace with your actual data source
  const [movies] = useState([
    { 
      id: 1, 
      title: 'Dune: Part Two', 
      year: 2024, 
      rating: 4.8, 
      genre: ['Sci-Fi', 'Adventure'], 
      trendScore: 98,
      isFavorite: false,
      image: 'https://i.pinimg.com/736x/c8/89/60/c8896031121292fcf979635fe9922c76.jpg'
    },
    { 
      id: 2, 
      title: 'The Batman Part II', 
      year: 2024, 
      rating: 4.7, 
      genre: ['Action', 'Crime'], 
      trendScore: 95,
      isFavorite: true,
      image: 'https://i.pinimg.com/736x/50/51/d9/5051d96c4241212cc07163f4e3a615f2.jpg'
    },
    { 
      id: 3, 
      title: 'Deadpool & Wolverine', 
      year: 2024, 
      rating: 4.9, 
      genre: ['Action', 'Comedy'], 
      trendScore: 97,
      isFavorite: false,
      image: 'https://i.pinimg.com/736x/8f/0d/24/8f0d2415e79077198c0e78995233ff27.jpg'
    },
    { 
      id: 4, 
      title: 'Furiosa: A Mad Max Saga', 
      year: 2024, 
      rating: 4.6, 
      genre: ['Action', 'Sci-Fi'], 
      trendScore: 93,
      isFavorite: false,
      image: 'https://i.pinimg.com/736x/c5/73/5c/c5735c0d8d07a70dbd6c2244c686f85f.jpg'
    },
    { 
      id: 5, 
      title: 'A Quiet Place: Day One', 
      year: 2024, 
      rating: 4.5, 
      genre: ['Horror', 'Thriller'], 
      trendScore: 91,
      isFavorite: true,
      image: 'https://i.pinimg.com/736x/ac/a4/b8/aca4b87a1698212693f22da120d8b3f4.jpg'
    },
    { 
      id: 6, 
      title: 'Gladiator II', 
      year: 2024, 
      rating: 4.4, 
      genre: ['Action', 'Drama'], 
      trendScore: 90,
      isFavorite: false,
      image: 'https://i.pinimg.com/1200x/ad/5f/66/ad5f66741107b2e2801b40b73dcd53bf.jpg'
    },
    { 
      id: 7, 
      title: 'Joker: Folie à Deux', 
      year: 2024, 
      rating: 4.7, 
      genre: ['Crime', 'Drama'], 
      trendScore: 96,
      isFavorite: false,
      image: 'https://i.pinimg.com/736x/7e/a9/05/7ea90520f400e58b2cbdfcc2bee172e8.jpg'
    },
    { 
      id: 8, 
      title: 'Venom 3', 
      year: 2024, 
      rating: 4.3, 
      genre: ['Action', 'Sci-Fi'], 
      trendScore: 89,
      isFavorite: false,
      image: 'https://i.pinimg.com/736x/d0/63/c0/d063c0be32a2267a7127b417d77b0554.jpg'
    }
  ]);

  const [filters, setFilters] = useState({
    genre: 'All',
    timeWindow: 'week', // day, week, month
    sort: 'trend' // trend, rating, newest
  });

  const [showFilters, setShowFilters] = useState(false);

  // Available filter options
  const genres = ['All', 'Action', 'Sci-Fi', 'Comedy', 'Drama', 'Horror', 'Thriller', 'Adventure'];
  const timeWindows = [
    { value: 'day', label: 'Today' },
    { value: 'week', label: 'This Week' },
    { value: 'month', label: 'This Month' }
  ];
  const sortOptions = [
    { value: 'trend', label: 'Trending' },
    { value: 'rating', label: 'Top Rated' },
    { value: 'newest', label: 'Newest' }
  ];

  // Filter and sort movies
  const filteredMovies = movies
    .filter(movie => filters.genre === 'All' || movie.genre.includes(filters.genre))
    .sort((a, b) => {
      if (filters.sort === 'trend') return b.trendScore - a.trendScore;
      if (filters.sort === 'rating') return b.rating - a.rating;
      if (filters.sort === 'newest') return b.year - a.year;
      return 0;
    });

  const toggleFavorite = (id) => {
    // In a real app, you would update state or make an API call here
    console.log(`Toggled favorite for movie ${id}`);
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

  const trendColor = (score) => {
    if (score >= 95) return 'from-red-500 to-orange-500';
    if (score >= 90) return 'from-orange-500 to-yellow-500';
    return 'from-yellow-500 to-yellow-400';
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30 z-10"></div>
        <div className="absolute inset-0 bg-[url('https://i.pinimg.com/1200x/7e/50/3d/7e503d3ef0813ba0ac34c8b2ca525663.jpg')] bg-cover bg-center opacity-30"></div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <FaFire className="text-4xl text-orange-500" />
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
                Trending Now
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover what movies are trending across our platform this week
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Controls */}
      <section className="py-6 bg-gray-800/50 backdrop-blur-sm sticky top-0 z-20 border-b border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 bg-gray-700/50 hover:bg-gray-600/50 px-4 py-2 rounded-lg transition-colors"
              >
                <FaFilter />
                Filters
              </motion.button>

              <div className="hidden md:flex items-center gap-2">
                {timeWindows.map(window => (
                  <motion.button
                    key={window.value}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setFilters({...filters, timeWindow: window.value})}
                    className={`px-3 py-1 rounded-full text-sm transition-colors ${
                      filters.timeWindow === window.value
                        ? 'bg-gradient-to-r from-orange-600 to-yellow-500 text-white'
                        : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50'
                    }`}
                  >
                    {window.label}
                  </motion.button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-gray-400 hidden md:block">Sort by:</span>
              <select
                value={filters.sort}
                onChange={(e) => setFilters({...filters, sort: e.target.value})}
                className="bg-gray-700/50 border border-gray-600/50 text-white rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Expanded Filters */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4"
            >
              <div className="md:hidden mb-4">
                <label className="block text-sm font-medium text-gray-300 mb-2">Time Window</label>
                <div className="flex flex-wrap gap-2">
                  {timeWindows.map(window => (
                    <motion.button
                      key={window.value}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setFilters({...filters, timeWindow: window.value})}
                      className={`px-3 py-1 rounded-full text-sm transition-colors ${
                        filters.timeWindow === window.value
                          ? 'bg-gradient-to-r from-orange-600 to-yellow-500 text-white'
                          : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50'
                      }`}
                    >
                      {window.label}
                    </motion.button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Genre</label>
                <div className="flex flex-wrap gap-2">
                  {genres.map(genre => (
                    <motion.button
                      key={genre}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setFilters({...filters, genre})}
                      className={`px-3 py-1 rounded-full text-sm transition-colors ${
                        filters.genre === genre
                          ? 'bg-gradient-to-r from-orange-600 to-yellow-500 text-white'
                          : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50'
                      }`}
                    >
                      {genre}
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Movies Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {filteredMovies.map((movie) => (
              <motion.div
                key={movie.id}
                variants={itemVariants}
                className="group relative bg-gray-800/50 rounded-xl overflow-hidden shadow-lg hover:shadow-orange-500/20 transition-all border border-gray-700/50"
              >
                {/* Trend Badge */}
                <div className={`absolute top-3 left-3 z-10 bg-gradient-to-r ${trendColor(movie.trendScore)} text-white text-xs font-bold px-2 py-1 rounded-full flex items-center`}>
                  <FaFire className="mr-1" /> {movie.trendScore}
                </div>

                {/* Movie Poster */}
                <div className="aspect-[2/3] relative">
                  <img
                    src={movie.image}
                    alt={movie.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                    <div className="flex space-x-2 mb-3">
                      <button className="bg-orange-600/80 text-white p-2 rounded-full hover:bg-orange-500 transition-colors transform hover:scale-110">
                        <FaPlay className="text-xs" />
                      </button>
                      <button 
                        onClick={() => toggleFavorite(movie.id)}
                        className="bg-gray-800/80 text-white p-2 rounded-full hover:bg-gray-700 transition-colors transform hover:scale-110"
                      >
                        {movie.isFavorite ? <FaHeart className="text-orange-500" /> : <FaRegHeart />}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Movie Info */}
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg truncate">{movie.title}</h3>
                    <span className="flex items-center bg-yellow-500/10 text-yellow-400 px-2 py-1 rounded-full text-xs font-bold">
                      <FaStar className="mr-1" /> {movie.rating}
                    </span>
                  </div>
                  
                  <div className="flex justify-between text-sm text-gray-400 mb-3">
                    <span>{movie.year}</span>
                    <div className="flex flex-wrap gap-1 justify-end">
                      {movie.genre.map(g => (
                        <span key={g} className="text-xs bg-gray-700/50 px-1.5 py-0.5 rounded">
                          {g}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredMovies.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <h3 className="text-xl font-medium text-gray-400">No trending movies found</h3>
              <button
                onClick={() => setFilters({ genre: 'All', timeWindow: 'week', sort: 'trend' })}
                className="mt-4 text-orange-500 hover:text-orange-400 transition-colors"
              >
                Reset filters
              </button>
            </motion.div>
          )}

          {/* View More Button */}
          {filteredMovies.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700/50 text-white px-6 py-3 rounded-lg font-medium flex items-center mx-auto transition-colors"
              >
                View More Trending <FaChevronRight className="ml-2" />
              </motion.button>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TrendingMovies;