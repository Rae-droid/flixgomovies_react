import { useState, useEffect, useRef } from 'react';
import { 
  FaSearch, FaUser, FaBell, FaBookmark, FaChevronDown
} from 'react-icons/fa';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { RiMovie2Line } from 'react-icons/ri';

const FlixGoMovies = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const profileRef = useRef(null);
  const searchRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Movies', path: '/movies' },
    { name: 'TV Shows', path: '/tvshow' },
    { name: 'Trending', path: '/trending' },
    { name: 'Top Rated', path: '/toprated' },
  ];

  return (
    <div className="flex flex-col  bg-gray-900 text-white overflow-hidden">
      {/* Navbar */}
      <header className={`fixed w-full z-30 transition-all duration-500 ${
        scrolled ? 'bg-black/90 backdrop-blur-md py-2 shadow-xl' : 'bg-transparent py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo and Mobile Menu Button */}
            <div className="flex items-center space-x-4">
              {/* Mobile Menu Button */}
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-full hover:bg-white/10 transition-colors duration-300"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <HiX className="text-white text-xl" />
                ) : (
                  <HiMenuAlt3 className="text-white text-xl" />
                )}
              </button>
              
              {/* Logo */}
              <a href="/" className="flex items-center group">
                <RiMovie2Line className="text-pink-500 text-3xl mr-2 group-hover:rotate-12 transition-transform duration-300" />
                <span className="text-yellow-400 font-bold text-2xl">FLIXGO</span>
                <span className="text-pink-500 font-bold text-2xl group-hover:text-yellow-400 transition-colors duration-300">MOVIES</span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  className="px-4 py-2 text-sm font-medium text-white/90 hover:text-pink-400 relative group transition-colors duration-300"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-yellow-400 group-hover:w-4/5 group-hover:left-[10%] transition-all duration-300"></span>
                </a>
              ))}
            </nav>

            {/* Right side icons and buttons */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div ref={searchRef} className="relative">
                <button
                  onClick={() => setSearchOpen(!searchOpen)}
                  className="p-2 rounded-full hover:bg-white/10 transition-colors duration-300"
                  aria-label="Search"
                >
                  <FaSearch className="text-white/80 hover:text-yellow-400 transition-colors duration-300" />
                </button>
                
                {searchOpen && (
                  <div className="absolute right-0 top-12 w-72 bg-black/90 backdrop-blur-md rounded-lg shadow-2xl overflow-hidden animate-fadeIn border border-gray-700">
                    <div className="flex items-center px-4 py-3">
                      <FaSearch className="text-white/60 mr-2" />
                      <input
                        type="text"
                        placeholder="Search movies, shows..."
                        className="bg-transparent border-none w-full text-white placeholder-white/50 focus:outline-none focus:ring-0"
                        autoFocus
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Notification */}
              <button className="p-2 rounded-full hover:bg-white/10 transition-colors duration-300 relative">
                <a href='/dashboard'>
                  <FaBell className="text-white/80 hover:text-yellow-400 transition-colors duration-300" />
                </a>
                <span className="absolute top-1 right-1 w-2 h-2 bg-yellow-400 rounded-full"></span>
              </button>

              {/* Profile Dropdown */}
              <div ref={profileRef} className="relative">
                <button
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="flex items-center space-x-2 focus:outline-none group"
                >
                  <div className="w-12 h-10 rounded-full bg-gradient-to-br from-pink-500 to-yellow-400 flex items-center justify-center text-white font-bold">
                  <a href='/logIn'>LogIn</a>
                  </div>
               
                </button>
                
                {profileOpen && (
                  <div className="absolute right-0 top-12 w-48 bg-black/90 backdrop-blur-md rounded-lg shadow-2xl overflow-hidden animate-fadeIn border border-gray-700">
                    <div className="py-1">
                      <div className="px-4 py-3 border-b border-gray-800">
                        <p className="text-sm font-medium text-white">Username</p>
                        <p className="text-xs text-gray-400">user@flixgo.com</p>
                      </div>
                      <a href="#" className="flex items-center px-4 py-2 text-sm text-white hover:bg-gray-800/50 transition-colors">
                        <FaUser className="mr-2" /> Profile
                      </a>
                      <a href="#" className="flex items-center px-4 py-2 text-sm text-white hover:bg-gray-800/50 transition-colors">
                        <FaBookmark className="mr-2" /> Watchlist
                      </a>
                      <a href="#" className="flex items-center px-4 py-2 text-sm text-white hover:bg-gray-800/50 transition-colors">
                        <FaCog className="mr-2" /> Settings
                      </a>
                      <div className="border-t border-gray-800"></div>
                      <a href="#" className="flex items-center px-4 py-2 text-sm text-white hover:bg-gray-800/50 transition-colors">
                        <FaSignOutAlt className="mr-2" /> Sign Out
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu - Shows when hamburger is clicked */}
        <div className={`lg:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3 bg-black/90 backdrop-blur-md border-t border-gray-800">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className="block px-3 py-2 text-base font-medium text-white hover:text-pink-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </header>

      
    
    
    </div>
  );
};

export default FlixGoMovies;