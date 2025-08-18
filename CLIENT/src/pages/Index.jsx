import { useState } from 'react';
import { FaPlay, FaPlus, FaRegHeart, FaHeart, FaStar, FaChevronRight } from 'react-icons/fa';
import { RiMovie2Line } from 'react-icons/ri';
import { motion } from 'framer-motion'
import Footer from '../Components/Footer';




const MovieHomepage = () => {
  const [trendingMovies] = useState([
    { 
      id: 1, 
      title: 'The Last Of Us II', 
      year: 2023, 
      rating: 4.8, 
      genre: 'Action', 
      isFavorite: true,
      image: 'https://i.pinimg.com/1200x/57/a9/a8/57a9a84042924f04ee543ca04b463789.jpg',
      youtubeUrl: 'https://youtu.be/uLtkt8BonwM'
    },
    { 
      id: 2, 
      title: 'Harta', 
      year: 2024, 
      rating: 4.5, 
      genre: 'Sad', 
      isFavorite: false,
      image: 'https://i.pinimg.com/736x/45/b2/98/45b29804c5ff8f7e88128533dde17752.jpg',
      youtubeUrl: 'https://youtu.be/k1vWhii4tkE'
    },
    { 
      id: 3, 
      title: 'Wrong Turn II', 
      year: 2023, 
      rating: 4.9, 
      genre: 'Horror', 
      isFavorite: true,
      image: 'https://i.pinimg.com/736x/1a/dc/52/1adc525a396c072c684d8e54d8f96d2e.jpg',
      youtubeUrl: 'https://youtu.be/ZHosNToUXfo'
    },
    { 
      id: 4, 
      title: 'The Shadow Man', 
      year: 2025, 
      rating: 4.2, 
      genre: 'Horror', 
      isFavorite: false,
      image: 'https://i.pinimg.com/1200x/2f/79/12/2f7912938d05dbc71e59404f9341eabc.jpg',
      youtubeUrl: 'https://youtu.be/e4WSuFndZcw'
    },
    { 
      id: 5, 
      title: 'Bermuda Island', 
      year: 2023, 
      rating: 4.7, 
      genre: 'Thriller', 
      isFavorite: false,
      image: 'https://i.pinimg.com/1200x/89/a3/42/89a342b2b260eaf7cbf3fa9bf6b7fd58.jpg',
      youtubeUrl: 'https://youtu.be/yqVLRvO2bnM'
    },
  ]);

  const [newReleases] = useState([
    { 
      id: 6, 
      title: 'The Lost City', 
      year: 2021, 
      rating: 4.6,
      image: 'https://i.pinimg.com/736x/97/cf/26/97cf26113385b3c3d4229c0859cac2b1.jpg'
    },
    { 
      id: 7, 
      title: 'Black Panther: Wakanda Forever', 
      year: 2024, 
      rating: 4.9,
      image: 'https://i.pinimg.com/1200x/ea/5a/00/ea5a000f6ecfe9e15722d24be248e570.jpg'
    },
    { 
      id: 8, 
      title: 'Spider-Man II', 
      year: 2023, 
      rating: 4.8,
      image: 'https://i.pinimg.com/1200x/46/b3/02/46b3023c0abb0ede0a222aeda78faac3.jpg'
    },
    { 
      id: 9, 
      title: 'The Dark Knight', 
      year: 2023, 
      rating: 4.7,
      image: 'https://i.pinimg.com/736x/6a/aa/68/6aaa6840d49861c972d4882dda552cb4.jpg'
    },
    { 
      id: 10, 
      title: 'Men In Black II', 
      year: 2023, 
      rating: 4.4,
      image: 'https://i.pinimg.com/736x/ae/01/c6/ae01c65a9cff18155eed902ae0b7b5cc.jpg'
    },
  ]);

  const [featuredMovie] = useState({
    title: 'SQUID GAME',
    description: 'A thrilling survival game where players risk their lives for a tempting prize.',
    year: 2025,
    rating: 4.9,
    duration: '2h 49m',
    genre: 'Sci-Fi/Adventure',
    image: 'https://i.pinimg.com/1200x/7e/50/3d/7e503d3ef0813ba0ac34c8b2ca525663.jpg'
  });

  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
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
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Hero Section */}
    
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30 z-10"></div>
        <img
          src={featuredMovie.image}
          alt={featuredMovie.title}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ 
            transform: 'translateZ(0)' // For performance
          }}
        />
        
        <div className="relative z-20 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <span className="bg-pink-600/30 text-pink-400 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                New Release
              </span>
              <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">{featuredMovie.title}</h1>
              <a href=''>
                <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="flex items-center text-yellow-400 bg-yellow-500/10 px-3 py-1 rounded-full">
                  <FaStar className="mr-1" /> {featuredMovie.rating}
                </span>
                <span className="bg-gray-800/50 px-3 py-1 rounded-full">{featuredMovie.year}</span>
                <span className="bg-gray-800/50 px-3 py-1 rounded-full">{featuredMovie.duration}</span>
                <span className="bg-pink-600/20 text-pink-400 px-3 py-1 rounded-full">{featuredMovie.genre}</span>
              </div>
              </a>
              <p className="text-gray-300 mb-8 text-lg max-w-xl">{featuredMovie.description}</p>
              <div className="flex flex-wrap gap-4">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-pink-600 to-yellow-500 text-white px-8 py-3 rounded-lg font-bold flex items-center hover:shadow-lg hover:shadow-pink-500/30 transition-all"
                >
                  <FaPlay className="mr-2" /> Watch Now
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={toggleFavorite}
                  className="bg-gray-800/70 text-white px-6 py-3 rounded-lg font-bold flex items-center hover:bg-gray-700/70 transition-colors"
                >
                  {isFavorite ? (
                    <>
                      <FaHeart className="text-pink-500 mr-2" /> Saved
                    </>
                  ) : (
                    <>
                      <FaRegHeart className="mr-2" /> Watchlist
                    </>
                  )}
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

{/* Trending Now Section - Fixed Visibility */}
<section className="py-16 bg-black/50 backdrop-blur-sm">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center mb-8">
      <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-yellow-400 bg-clip-text text-transparent">
        Trending Now
      </h2>
      <a href="#" className="text-pink-500 hover:text-pink-400 flex items-center transition-colors group">
        View All <FaChevronRight className="ml-1 group-hover:translate-x-1 transition-transform" />
      </a>
    </div>
    
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
    >
      {trendingMovies.map((movie) => (
        <motion.div 
          key={movie.id} 
          variants={itemVariants}
          className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-pink-500/20 transition-all"
        >
          <div className="aspect-[2/3] relative">
            <img 
              src={movie.image} 
              alt={movie.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
              <h3 className="text-white font-bold text-lg">{movie.title}</h3>
              <div className="flex justify-between text-sm text-gray-300 mt-1">
                <span>{movie.year}</span>
                <span className="flex items-center">
                  <FaStar className="text-yellow-400 mr-1" /> {movie.rating}
                </span>
              </div>
              <div className="flex space-x-2 mt-3">
                <a
                  href={movie.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-pink-600/80 text-white p-2 rounded-full hover:bg-pink-500 transition-colors transform hover:scale-110 flex items-center justify-center"
                >
                  <FaPlay className="text-xs" />
                </a>
                <button className="bg-gray-800/80 text-white p-2 rounded-full hover:bg-gray-700 transition-colors transform hover:scale-110">
                  {movie.isFavorite ? <FaHeart className="text-pink-500" /> : <FaRegHeart />}
                </button>
                <button className="bg-gray-800/80 text-white p-2 rounded-full hover:bg-gray-700 transition-colors transform hover:scale-110">
                  <FaPlus />
                </button>
              </div>
            </div>
          </div>
          {/* Always visible title below image */}
          <div className="p-3">
            <h3 className="font-medium text-white">{movie.title}</h3>
            <div className="flex justify-between text-sm text-gray-400 mt-1">
              <span>{movie.year}</span>
              <span className="flex items-center">
                <FaStar className="text-yellow-400 mr-1" /> {movie.rating}
              </span>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>

      {/* New Releases Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-yellow-400 bg-clip-text text-transparent">
              New Releases
            </h2>
            <a href="#" className="text-pink-500 hover:text-pink-400 flex items-center transition-colors group">
              View All <FaChevronRight className="ml-1 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {newReleases.map((movie, index) => (
              <motion.div 
                key={movie.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="aspect-[2/3] rounded-xl overflow-hidden relative mb-3 shadow-lg hover:shadow-pink-500/20 transition-shadow">
                  <img 
                    src={movie.image} 
                    alt={movie.title}
                    className="w-full h-full object-cover group-hover:opacity-70 transition-opacity"
                  />
                  <button className="absolute inset-0 m-auto bg-pink-600/80 text-white w-12 h-12 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform hover:scale-110">
                    <FaPlay />
                  </button>
                </div>
                <h3 className="font-medium">{movie.title}</h3>
                <div className="flex justify-between text-sm text-gray-400 mt-1">
                  <span>{movie.year}</span>
                  <span className="flex items-center">
                    <FaStar className="text-yellow-400 mr-1" /> {movie.rating}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-pink-500 to-yellow-400 bg-clip-text text-transparent">
            Browse by Category
          </h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {['Action', 'Comedy', 'Horror', 'Sci-Fi', 'Drama', 'Romance', 'Thriller', 'Animation', 'Documentary', 'Fantasy', 'Crime', 'Adventure'].map((category) => (
              <motion.a 
                key={category}
                whileHover={{ y: -5 }}
                href="#" 
                className="bg-gray-800/50 hover:bg-gradient-to-r from-pink-600/30 to-yellow-500/30 rounded-xl p-4 text-center transition-all hover:shadow-lg hover:shadow-pink-500/20 border border-gray-700/50"
              >
                <div className="text-pink-500 mb-2 flex justify-center">
                  <RiMovie2Line className="text-2xl" />
                </div>
                <h3 className="font-medium">{category}</h3>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-900/20 to-yellow-900/20 animate-gradient-shift"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-yellow-400 bg-clip-text text-transparent"
          >
            Ready to Start Streaming?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-300 max-w-2xl mx-auto mb-8 text-lg"
          >
            Join thousands of happy subscribers enjoying unlimited access to our premium movie collection.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, boxShadow: '0 10px 25px -5px rgba(236, 72, 153, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-pink-600 to-yellow-500 text-white px-8 py-4 rounded-xl font-bold hover:shadow-xl transition-all text-lg"
          >
            <a href='/login'>Get Started Now</a>
          </motion.button>
        </div>
      </section>
       <Footer/>
    </div>  
   
   
  );
};

export default MovieHomepage;