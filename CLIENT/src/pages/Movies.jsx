import { useState } from 'react';
import { FaPlay, FaPlus, FaRegHeart, FaHeart, FaStar, FaChevronRight, FaSearch } from 'react-icons/fa';
import { RiMovie2Line } from 'react-icons/ri';
import { motion } from 'framer-motion';
import Footer from '../Components/Footer';

const MoviePage = () => {
  const [selectedMovie, setSelectedMovie] = useState({
    id: 1,
    title: 'SQUID GAME',
    year: 2025,
    rating: 4.9,
    duration: '2h 49m',
    genre: 'Thriller/Drama',
    description: 'Hundreds of cash-strapped players accept a strange invitation to compete in children\'s games. Inside, a tempting prize awaits with deadly high stakes.',
    director: 'Hwang Dong-hyuk',
    cast: 'Lee Jung-jae, Park Hae-soo, Wi Ha-joon',
    image: 'https://i.pinimg.com/1200x/7e/50/3d/7e503d3ef0813ba0ac34c8b2ca525663.jpg',
    isFavorite: false
  });

  const [similarMovies] = useState([
    { id: 2, title: 'Money Heist', year: 2025, rating: 4.8, image: 'https://i.pinimg.com/736x/53/16/bd/5316bdc6c5c9e432a12e052ba395186f.jpg' },
    { id: 3, title: 'Blue & Black', year: 2023, rating: 4.7, image: 'https://i.pinimg.com/736x/6b/fa/25/6bfa252e265c8ee6f32d25e0906f95dd.jpg' },
    { id: 4, title: 'All of Us Are Dead', year: 2022, rating: 4.5, image: 'https://i.pinimg.com/1200x/d9/a8/9d/d9a89dfa2493feedbe5588bb1a991ca6.jpg' },
    { id: 5, title: 'Sweet Home', year: 2020, rating: 4.3, image: 'https://i.pinimg.com/736x/87/a1/d0/87a1d0e8cb5ab318c4c4147fa5f29afd.jpg' }
  ]);

  const toggleFavorite = () => {
    setSelectedMovie(prev => ({
      ...prev,
      isFavorite: !prev.isFavorite
    }));
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Movie Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-black/30 z-10"></div>
        <img
          src={selectedMovie.image}
          alt={selectedMovie.title}
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        
        <div className="relative z-20 h-full flex items-end pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{selectedMovie.title}</h1>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="flex items-center text-yellow-400 bg-yellow-500/10 px-3 py-1 rounded-full text-sm">
                  <FaStar className="mr-1" /> {selectedMovie.rating}
                </span>
                <span className="bg-gray-800/50 px-3 py-1 rounded-full text-sm">{selectedMovie.year}</span>
                <span className="bg-gray-800/50 px-3 py-1 rounded-full text-sm">{selectedMovie.duration}</span>
                <span className="bg-pink-600/20 text-pink-400 px-3 py-1 rounded-full text-sm">{selectedMovie.genre}</span>
              </div>
              <div className="flex gap-4 mb-6">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-pink-600 to-yellow-500 text-white px-6 py-2 rounded-lg font-bold flex items-center hover:shadow-lg hover:shadow-pink-500/30 transition-all"
                >
                  <FaPlay className="mr-2" /> Watch Now
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={toggleFavorite}
                  className="bg-gray-800/70 text-white px-4 py-2 rounded-lg font-bold flex items-center hover:bg-gray-700/70 transition-colors"
                >
                  {selectedMovie.isFavorite ? (
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

      {/* Movie Details Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-yellow-400 bg-clip-text text-transparent">
                Synopsis
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">{selectedMovie.description}</p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="text-lg font-semibold text-pink-400 mb-2">Director</h3>
                  <p>{selectedMovie.director}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-pink-400 mb-2">Cast</h3>
                  <p className="text-gray-300">{selectedMovie.cast}</p>
                </div>
              </div>
            </motion.div>

            {/* Reviews Section */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">User Reviews</h3>
                <button className="text-pink-500 hover:text-pink-400 text-sm font-medium">
                  Write a Review
                </button>
              </div>
              <div className="space-y-4">
                {[1, 2].map(review => (
                  <div key={review} className="border-b border-gray-700 pb-4 last:border-0">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 rounded-full bg-pink-600/30 flex items-center justify-center text-pink-400 font-bold mr-3">
                        U
                      </div>
                      <div>
                        <h4 className="font-medium">User {review}</h4>
                        <div className="flex items-center text-sm text-yellow-400">
                          <FaStar className="mr-1" /> 5.0
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm">This show was absolutely incredible! The storyline kept me on the edge of my seat the entire time.</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm"
            >
              <h3 className="text-lg font-bold mb-4">Details</h3>
              <div className="space-y-3">
                <div>
                  <span className="text-gray-400 block text-sm">Release Date</span>
                  <span>July 15, 2025</span>
                </div>
                <div>
                  <span className="text-gray-400 block text-sm">Country</span>
                  <span>South Korea</span>
                </div>
                <div>
                  <span className="text-gray-400 block text-sm">Language</span>
                  <span>Korean</span>
                </div>
                <div>
                  <span className="text-gray-400 block text-sm">Seasons</span>
                  <span>1</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm"
            >
              <h3 className="text-lg font-bold mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {['Survival', 'Drama', 'Action', 'Suspense', 'Psychological'].map(tag => (
                  <span key={tag} className="bg-pink-600/20 text-pink-400 px-3 py-1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Similar Movies Section */}
      <section className="py-12 bg-black/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-yellow-400 bg-clip-text text-transparent">
              More Like This
            </h2>
            <a href="#" className="text-pink-500 hover:text-pink-400 flex items-center transition-colors group">
              View All <FaChevronRight className="ml-1 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {similarMovies.map((movie, index) => (
              <motion.div
                key={movie.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="aspect-[2/3] bg-gray-800/50 rounded-xl overflow-hidden relative mb-3 shadow-lg hover:shadow-pink-500/20 transition-shadow">
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
      <Footer/>
    </div>
  );
};

export default MoviePage;