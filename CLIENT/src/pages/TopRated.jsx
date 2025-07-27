import { useState } from 'react';
import { FaStar, FaRegStar, FaStarHalfAlt, FaFilter, FaPlay, FaHeart, FaRegHeart } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Footer from '../Components/Footer';

const TopRatedMovies = () => {
  // Sample data - replace with your actual data source
  const [movies] = useState([
    { 
      id: 1, 
      title: 'The Shawshank Redemption', 
      year: 1994, 
      rating: 4.9, 
      genre: ['Drama'], 
      director: 'Frank Darabont',
      isFavorite: false,
      image: 'https://i.pinimg.com/736x/fa/cc/2d/facc2d4d6ab07064c1a3f736af5aded7.jpg'
    },
    { 
      id: 2, 
      title: 'The Godfather', 
      year: 1972, 
      rating: 4.8, 
      genre: ['Crime', 'Drama'], 
      director: 'Francis Ford Coppola',
      isFavorite: true,
      image: 'https://i.pinimg.com/736x/e4/1c/dc/e41cdc5ebdac1c27adc55099f84f4c52.jpg'
    },
    { 
      id: 3, 
      title: 'The Devil\'s Advocate', 
      year: 2008, 
      rating: 4.7, 
      genre: ['Action', 'Crime', 'Drama'], 
      director: 'Christopher Nolan',
      isFavorite: false,
      image: 'https://i.pinimg.com/736x/3d/d7/ca/3dd7cac92e12cdbebf45f2b7caff8f94.jpg'
    },
    { 
      id: 4, 
      title: 'Christian Bale', 
      year: 1994, 
      rating: 4.6, 
      genre: ['Crime', 'Drama'], 
      director: 'Quentin Tarantino',
      isFavorite: false,
      image: 'https://i.pinimg.com/736x/db/82/dd/db82dd13f545a8a9f90708872230e1f5.jpg'
    },
    { 
      id: 5, 
      title: 'Schindler\'s List', 
      year: 1993, 
      rating: 4.5, 
      genre: ['Biography', 'Drama', 'History'], 
      director: 'Steven Spielberg',
      isFavorite: true,
      image: 'https://i.pinimg.com/736x/64/c4/98/64c498b2f8039835686c9fc0205ff566.jpg'
    },
    { 
      id: 6, 
      title: 'The Lord of the Rings: The Return of the King', 
      year: 2003, 
      rating: 4.4, 
      genre: ['Adventure', 'Fantasy'], 
      director: 'Peter Jackson',
      isFavorite: false,
      image: 'https://i.pinimg.com/1200x/d0/71/5d/d0715d21e6099f555c564dc082c2dd05.jpg'
    },
    { 
      id: 7, 
      title: 'Forrest Gump', 
      year: 1994, 
      rating: 4.3, 
      genre: ['Drama', 'Romance'], 
      director: 'Robert Zemeckis',
      isFavorite: false,
      image: 'https://i.pinimg.com/1200x/8e/d7/a9/8ed7a9baeae932abec095d109d306fb3.jpg'
    },
    { 
      id: 8, 
      title: 'Inception', 
      year: 2010, 
      rating: 4.2, 
      genre: ['Action', 'Adventure', 'Sci-Fi'], 
      director: 'Christopher Nolan',
      isFavorite: false,
      image: 'https://i.pinimg.com/1200x/b0/ae/a4/b0aea49646879a043ad9f6ec3002e99f.jpg'
    }
  ]);

  const [filters, setFilters] = useState({
    genre: 'All',
    year: 'All',
    sort: 'rating'
  });

  const [showFilters, setShowFilters] = useState(false);

  // Available filter options
  const genres = ['All', 'Drama', 'Action', 'Crime', 'Adventure', 'Sci-Fi', 'Fantasy', 'Romance'];
  const years = ['All', '1990s', '2000s', '2010s', '2020s'];
  const sortOptions = [
    { value: 'rating', label: 'Rating' },
    { value: 'year', label: 'Release Year' },
    { value: 'title', label: 'Title' }
  ];

  // Filter and sort movies
  const filteredMovies = movies
    .filter(movie => filters.genre === 'All' || movie.genre.includes(filters.genre))
    .filter(movie => {
      if (filters.year === 'All') return true;
      const decade = Math.floor(movie.year / 10) * 10;
      return filters.year === `${decade}s`;
    })
    .sort((a, b) => {
      if (filters.sort === 'rating') return b.rating - a.rating;
      if (filters.sort === 'year') return b.year - a.year;
      if (filters.sort === 'title') return a.title.localeCompare(b.title);
      return 0;
    });

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

  const toggleFavorite = (id) => {
    // In a real app, you would update state or make an API call here
    console.log(`Toggled favorite for movie ${id}`);
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
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-yellow-400 bg-clip-text text-transparent">
              Top Rated Movies
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the highest rated films according to our community of cinephiles
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Controls */}
      <section className="py-8 bg-gray-800/50 backdrop-blur-sm sticky top-0 z-20 border-b border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 bg-gray-700/50 hover:bg-gray-600/50 px-4 py-2 rounded-lg transition-colors"
            >
              <FaFilter />
              Filters
            </motion.button>

            <div className="flex items-center gap-4">
              <span className="text-gray-400 hidden md:block">Sort by:</span>
              <select
                value={filters.sort}
                onChange={(e) => setFilters({...filters, sort: e.target.value})}
                className="bg-gray-700/50 border border-gray-600/50 text-white rounded-lg px-3 py-2 focus:ring-2 focus:ring-pink-500 focus:border-transparent"
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
              className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4"
            >
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
                          ? 'bg-gradient-to-r from-pink-600 to-yellow-500 text-white'
                          : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50'
                      }`}
                    >
                      {genre}
                    </motion.button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Decade</label>
                <div className="flex flex-wrap gap-2">
                  {years.map(year => (
                    <motion.button
                      key={year}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setFilters({...filters, year})}
                      className={`px-3 py-1 rounded-full text-sm transition-colors ${
                        filters.year === year
                          ? 'bg-gradient-to-r from-pink-600 to-yellow-500 text-white'
                          : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50'
                      }`}
                    >
                      {year}
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
                className="group relative bg-gray-800/50 rounded-xl overflow-hidden shadow-lg hover:shadow-pink-500/20 transition-all border border-gray-700/50"
              >
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
                      <button className="bg-pink-600/80 text-white p-2 rounded-full hover:bg-pink-500 transition-colors transform hover:scale-110">
                        <FaPlay className="text-xs" />
                      </button>
                      <button 
                        onClick={() => toggleFavorite(movie.id)}
                        className="bg-gray-800/80 text-white p-2 rounded-full hover:bg-gray-700 transition-colors transform hover:scale-110"
                      >
                        {movie.isFavorite ? <FaHeart className="text-pink-500" /> : <FaRegHeart />}
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
                    <span className="truncate max-w-[120px]">{movie.director}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {movie.genre.map(g => (
                      <span key={g} className="text-xs bg-gray-700/50 px-2 py-1 rounded-full">
                        {g}
                      </span>
                    ))}
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
              <h3 className="text-xl font-medium text-gray-400">No movies found matching your filters</h3>
              <button
                onClick={() => setFilters({ genre: 'All', year: 'All', sort: 'rating' })}
                className="mt-4 text-pink-500 hover:text-pink-400 transition-colors"
              >
                Clear all filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TopRatedMovies;