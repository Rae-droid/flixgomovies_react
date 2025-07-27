import { useState } from 'react';
import { FaPlay, FaPlus, FaRegHeart, FaHeart, FaStar, FaChevronRight } from 'react-icons/fa';
import { RiTvLine } from 'react-icons/ri';
import { motion } from 'framer-motion';
import Footer from '../Components/Footer';

const TVShowsPage = () => {
  const [trendingShows] = useState([
    { 
      id: 1, 
      title: 'Stranger Things', 
      year: 2016, 
      rating: 4.9, 
      seasons: 4,
      genre: 'Sci-Fi/Horror', 
      isFavorite: true,
      image: 'https://i.pinimg.com/736x/91/17/75/9117751636528b25a7b4687cab63572d.jpg'
    },
    { 
      id: 2, 
      title: 'The Mandalorian', 
      year: 2019, 
      rating: 4.8, 
      seasons: 3,
      genre: 'Sci-Fi/Western', 
      isFavorite: false,
      image: 'https://i.pinimg.com/1200x/e4/30/ce/e430ce5b3afda48ac3774633c2396e9f.jpg'
    },
    { 
      id: 3, 
      title: 'Breaking Bad', 
      year: 2008, 
      rating: 5.0, 
      seasons: 5,
      genre: 'Crime/Drama', 
      isFavorite: true,
      image: 'https://i.pinimg.com/1200x/37/62/75/37627587496965efcc0ae42ac9dff525.jpg'
    },
    { 
      id: 4, 
      title: 'Joker', 
      year: 2016, 
      rating: 4.7, 
      seasons: 5,
      genre: 'Historical Drama', 
      isFavorite: false,
      image: 'https://i.pinimg.com/1200x/8f/ce/c1/8fcec1bfb630dfbcf31e15527526edc1.jpg'
    },
    { 
      id: 5, 
      title: 'The Witcher', 
      year: 2019, 
      rating: 4.6, 
      seasons: 3,
      genre: 'Fantasy/Adventure', 
      isFavorite: false,
      image: 'https://i.pinimg.com/1200x/8e/1a/1a/8e1a1a3913fd44a2188dac98602a7a81.jpg'
    },
  ]);

  const [popularShows] = useState([
    { 
      id: 6, 
      title: 'Game of Thrones', 
      year: 2018, 
      rating: 4.9,
      seasons: 8,
      image: 'https://i.pinimg.com/736x/83/5c/f6/835cf6b2f737f6efdb044d716f21e662.jpg'
    },
    { 
      id: 7, 
      title: 'The Last of Us', 
      year: 2023, 
      rating: 4.8,
      seasons: 1,
      image: 'https://i.pinimg.com/1200x/19/11/f4/1911f47b607a03fd9554319c04c80a4f.jpg'
    },
    { 
      id: 8, 
      title: 'House of the Dragon', 
      year: 2022, 
      rating: 4.7,
      seasons: 1,
      image: 'https://i.pinimg.com/736x/11/95/39/119539d066f585e973f334071d1424d9.jpg'
    },
    { 
      id: 9, 
      title: 'Peaky Blinders', 
      year: 2013, 
      rating: 4.8,
      seasons: 6,
      image: 'https://i.pinimg.com/736x/7a/ab/d6/7aabd6f0920bacdd1cf0ce726358d6fa.jpg'
    },
    { 
      id: 10, 
      title: 'The Boys', 
      year: 2019, 
      rating: 4.7,
      seasons: 3,
      image: 'https://i.pinimg.com/736x/80/96/b7/8096b76bf1d32bb1a0a6d415848253b1.jpg'
    },
  ]);

  const [featuredShow] = useState({
    title: 'HIGH SCHOOL MUSICAL',
    description: 'Hundreds of cash-strapped players accept a strange invitation to compete in children\'s games. Inside, a tempting prize awaits — with deadly high stakes.',
    year: 2021,
    rating: 4.9,
    seasons: 7,
    genre: 'Thriller/Drama',
    image: 'https://i.pinimg.com/1200x/ee/cb/05/eecb05028420c72983d0ccfe803712ae.jpg'
  });

  const [isFavorite, setIsFavorite] = useState(false);
  const [activeGenre, setActiveGenre] = useState('All');

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

  const genres = ['All', 'Drama', 'Comedy', 'Sci-Fi', 'Horror', 'Thriller', 'Fantasy', 'Crime', 'Action', 'Adventure'];

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30 z-10"></div>
        <img
          src={featuredShow.image}
          alt={featuredShow.title}
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
                Most Popular Show
              </span>
              <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">{featuredShow.title}</h1>
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="flex items-center text-yellow-400 bg-yellow-500/10 px-3 py-1 rounded-full">
                  <FaStar className="mr-1" /> {featuredShow.rating}
                </span>
                <span className="bg-gray-800/50 px-3 py-1 rounded-full">{featuredShow.year}</span>
                <span className="bg-gray-800/50 px-3 py-1 rounded-full">{featuredShow.seasons} Season(s)</span>
                <span className="bg-pink-600/20 text-pink-400 px-3 py-1 rounded-full">{featuredShow.genre}</span>
              </div>
              <p className="text-gray-300 mb-8 text-lg max-w-xl">{featuredShow.description}</p>
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
                      <FaHeart className="text-pink-500 mr-2" /> My List
                    </>
                  ) : (
                    <>
                      <FaRegHeart className="mr-2" /> Add to List
                    </>
                  )}
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trending Shows Section */}
      <section className="py-16 bg-black/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-yellow-400 bg-clip-text text-transparent">
              Trending TV Shows
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
            {trendingShows.map((show) => (
              <motion.div 
                key={show.id} 
                variants={itemVariants}
                className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-pink-500/20 transition-all"
              >
                <div className="aspect-[2/3] relative">
                  <img 
                    src={show.image} 
                    alt={show.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                    <h3 className="text-white font-bold text-lg">{show.title}</h3>
                    <div className="flex justify-between text-sm text-gray-300 mt-1">
                      <span>{show.year}</span>
                      <span className="flex items-center">
                        <FaStar className="text-yellow-400 mr-1" /> {show.rating}
                      </span>
                    </div>
                    <div className="flex space-x-2 mt-3">
                      <button className="bg-pink-600/80 text-white p-2 rounded-full hover:bg-pink-500 transition-colors transform hover:scale-110">
                        <FaPlay className="text-xs" />
                      </button>
                      <button className="bg-gray-800/80 text-white p-2 rounded-full hover:bg-gray-700 transition-colors transform hover:scale-110">
                        {show.isFavorite ? <FaHeart className="text-pink-500" /> : <FaRegHeart />}
                      </button>
                      <button className="bg-gray-800/80 text-white p-2 rounded-full hover:bg-gray-700 transition-colors transform hover:scale-110">
                        <FaPlus />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="font-medium text-white">{show.title}</h3>
                  <div className="flex justify-between text-sm text-gray-400 mt-1">
                    <span>{show.year} • {show.seasons} S</span>
                    <span className="flex items-center">
                      <FaStar className="text-yellow-400 mr-1" /> {show.rating}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Popular Shows Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-yellow-400 bg-clip-text text-transparent">
              Popular Shows
            </h2>
            <a href="#" className="text-pink-500 hover:text-pink-400 flex items-center transition-colors group">
              View All <FaChevronRight className="ml-1 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {popularShows.map((show, index) => (
              <motion.div 
                key={show.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="aspect-[2/3] rounded-xl overflow-hidden relative mb-3 shadow-lg hover:shadow-pink-500/20 transition-shadow">
                  <img 
                    src={show.image} 
                    alt={show.title}
                    className="w-full h-full object-cover group-hover:opacity-70 transition-opacity"
                  />
                  <button className="absolute inset-0 m-auto bg-pink-600/80 text-white w-12 h-12 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform hover:scale-110">
                    <FaPlay />
                  </button>
                </div>
                <h3 className="font-medium">{show.title}</h3>
                <div className="flex justify-between text-sm text-gray-400 mt-1">
                  <span>{show.year} • {show.seasons} S</span>
                  <span className="flex items-center">
                    <FaStar className="text-yellow-400 mr-1" /> {show.rating}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Genre Filter Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-pink-500 to-yellow-400 bg-clip-text text-transparent">
            Browse by Genre
          </h2>
          
          <div className="flex flex-wrap gap-4 mb-8">
            {genres.map((genre) => (
              <motion.button
                key={genre}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveGenre(genre)}
                className={`px-6 py-2 rounded-full transition-all ${
                  activeGenre === genre 
                    ? 'bg-gradient-to-r from-pink-600 to-yellow-500 text-white' 
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                }`}
              >
                {genre}
              </motion.button>
            ))}
          </div>
          
          {/* Filtered shows would go here */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {(activeGenre === 'All' ? popularShows : popularShows.filter(show => show.genre?.includes(activeGenre)))
              .map((show, index) => (
                <motion.div 
                  key={show.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="aspect-[2/3] rounded-xl overflow-hidden relative mb-3 shadow-lg hover:shadow-pink-500/20 transition-shadow">
                    <img 
                      src={show.image} 
                      alt={show.title}
                      className="w-full h-full object-cover group-hover:opacity-70 transition-opacity"
                    />
                    <button className="absolute inset-0 m-auto bg-pink-600/80 text-white w-12 h-12 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform hover:scale-110">
                      <FaPlay />
                    </button>
                  </div>
                  <h3 className="font-medium">{show.title}</h3>
                  <div className="flex justify-between text-sm text-gray-400 mt-1">
                    <span>{show.year} • {show.seasons} S</span>
                    <span className="flex items-center">
                      <FaStar className="text-yellow-400 mr-1" /> {show.rating}
                    </span>
                  </div>
                </motion.div>
              ))
            }
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
            Discover Your Next Binge-Watch
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-300 max-w-2xl mx-auto mb-8 text-lg"
          >
            Unlimited access to thousands of TV shows from every genre imaginable.
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
           <a href='/login'> Start Watching Now</a>
          
          </motion.button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default TVShowsPage;