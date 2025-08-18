import { useState, useEffect } from 'react';
import { 
  FaUser, FaLock, FaBell, FaPalette, 
  FaDatabase, FaShieldAlt, FaSignOutAlt, 
  FaSave, FaCog, FaCheck, FaFileExport
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const SettingsPage = () => {
  // State management
  const [activeTab, setActiveTab] = useState('profile');
  const [formData, setFormData] = useState({
    username: 'admin',
    email: 'admin@raedev.com',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    notifications: true,
    darkMode: true,
    dataRetention: '30',
    twoFactorAuth: false,
    accentColor: 'pink'
  });
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [accentColors] = useState([
    { name: 'pink', value: 'bg-pink-500' },
    { name: 'purple', value: 'bg-purple-500' },
    { name: 'blue', value: 'bg-blue-500' },
    { name: 'green', value: 'bg-green-500' },
    { name: 'yellow', value: 'bg-yellow-500' }
  ]);

  // Navigation tabs
  const tabs = [
    { id: 'profile', icon: <FaUser className="mr-2" />, label: 'Profile' },
    { id: 'security', icon: <FaLock className="mr-2" />, label: 'Security' },
    { id: 'notifications', icon: <FaBell className="mr-2" />, label: 'Notifications' },
    { id: 'appearance', icon: <FaPalette className="mr-2" />, label: 'Appearance' },
    { id: 'data', icon: <FaDatabase className="mr-2" />, label: 'Data' },
    { id: 'privacy', icon: <FaShieldAlt className="mr-2" />, label: 'Privacy' }
  ];

  // Form handlers
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleColorSelect = (color) => {
    setFormData(prev => ({
      ...prev,
      accentColor: color
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSaving(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSaving(false);
      setSaveSuccess(true);
    }, 1500);
  };

  // Reset success message after timeout
  useEffect(() => {
    if (saveSuccess) {
      const timer = setTimeout(() => setSaveSuccess(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [saveSuccess]);

  // Section components
  const ProfileSection = () => (
    <form onSubmit={handleSubmit}>
      <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6">
        <h3 className="text-lg font-bold mb-6 flex items-center">
          <FaUser className={`mr-2 text-${formData.accentColor}-500`} />
          Profile Information
        </h3>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600/50 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-white"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600/50 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-white"
            />
          </div>
        </div>
        
        <FormSubmitButton isSaving={isSaving} />
      </div>
    </form>
  );

  const SecuritySection = () => (
    <form onSubmit={handleSubmit}>
      <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6">
        <h3 className="text-lg font-bold mb-6 flex items-center">
          <FaLock className={`mr-2 text-${formData.accentColor}-500`} />
          Security Settings
        </h3>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Current Password</label>
            <input
              type="password"
              name="currentPassword"
              value={formData.currentPassword}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600/50 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-white"
              placeholder="Enter current password"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">New Password</label>
            <input
              type="password"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600/50 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-white"
              placeholder="Enter new password"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Confirm New Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600/50 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-white"
              placeholder="Confirm new password"
            />
          </div>
          
          <ToggleSwitch
            name="twoFactorAuth"
            label="Enable Two-Factor Authentication"
            checked={formData.twoFactorAuth}
            onChange={handleChange}
          />
        </div>
        
        <FormSubmitButton isSaving={isSaving} label="Update Security" />
      </div>
    </form>
  );

  const NotificationsSection = () => (
    <form onSubmit={handleSubmit}>
      <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6">
        <h3 className="text-lg font-bold mb-6 flex items-center">
          <FaBell className={`mr-2 text-${formData.accentColor}-500`} />
          Notification Preferences
        </h3>
        
        <div className="space-y-6">
          <ToggleSwitch
            name="notifications"
            label="Email Notifications"
            description="Receive email alerts for important updates"
            checked={formData.notifications}
            onChange={handleChange}
          />
          
          <div className="pt-2">
            <h4 className="text-sm font-medium text-gray-300 mb-4">Notification Types</h4>
            
            <div className="space-y-4">
              <CheckboxInput
                id="new-content"
                name="new-content"
                label="New content added"
              />
              
              <CheckboxInput
                id="system-updates"
                name="system-updates"
                label="System updates"
              />
              
              <CheckboxInput
                id="promotional"
                name="promotional"
                label="Promotional offers"
              />
            </div>
          </div>
        </div>
        
        <FormSubmitButton isSaving={isSaving} label="Update Preferences" />
      </div>
    </form>
  );

  const AppearanceSection = () => (
    <form onSubmit={handleSubmit}>
      <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6">
        <h3 className="text-lg font-bold mb-6 flex items-center">
          <FaPalette className={`mr-2 text-${formData.accentColor}-500`} />
          Appearance
        </h3>
        
        <div className="space-y-6">
          <ToggleSwitch
            name="darkMode"
            label="Dark Mode"
            description="Switch between light and dark theme"
            checked={formData.darkMode}
            onChange={handleChange}
          />
          
          <div>
            <h4 className="text-sm font-medium text-gray-300 mb-4">Accent Color</h4>
            <div className="flex space-x-4">
              {accentColors.map(color => (
                <button
                  key={color.name}
                  type="button"
                  onClick={() => handleColorSelect(color.name)}
                  className={`w-10 h-10 rounded-full ${color.value} border-2 ${
                    formData.accentColor === color.name 
                      ? 'border-white' 
                      : 'border-transparent hover:border-gray-400'
                  }`}
                >
                  {formData.accentColor === color.name && (
                    <FaCheck className="mx-auto text-white" />
                  )}
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-medium text-gray-300 mb-2">Font Size</h4>
            <select
              className="bg-gray-700/50 border border-gray-600/50 text-white rounded-lg px-4 py-2 w-full"
            >
              <option>Small</option>
              <option selected>Medium</option>
              <option>Large</option>
            </select>
          </div>
        </div>
        
        <FormSubmitButton isSaving={isSaving} label="Update Appearance" />
      </div>
    </form>
  );

  const DataSection = () => (
    <form onSubmit={handleSubmit}>
      <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6">
        <h3 className="text-lg font-bold mb-6 flex items-center">
          <FaDatabase className={`mr-2 text-${formData.accentColor}-500`} />
          Data Management
        </h3>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Data Retention Period</label>
            <select
              name="dataRetention"
              value={formData.dataRetention}
              onChange={handleChange}
              className="bg-gray-700/50 border border-gray-600/50 text-white rounded-lg px-4 py-2 w-full"
            >
              <option value="7">7 days</option>
              <option value="30">30 days</option>
              <option value="90">90 days</option>
              <option value="365">1 year</option>
              <option value="0">Forever</option>
            </select>
            <p className="text-xs text-gray-400 mt-2">
              How long we should keep your activity data before automatically deleting it
            </p>
          </div>
          
          <div className="pt-2">
            <h4 className="text-sm font-medium text-gray-300 mb-2">Export Data</h4>
            <button
              type="button"
              className="px-4 py-2 border border-gray-600/50 rounded-lg text-gray-300 hover:bg-gray-700/50 transition-colors text-sm flex items-center"
            >
              <FaFileExport className="mr-2" />
              Download all your data
            </button>
            <p className="text-xs text-gray-400 mt-2">
              Request a copy of all your personal data stored on our servers
            </p>
          </div>
          
          <div className="pt-2">
            <h4 className="text-sm font-medium text-gray-300 mb-2">Delete Account</h4>
            <button
              type="button"
              className="px-4 py-2 border border-red-600/50 rounded-lg text-red-400 hover:bg-red-900/20 transition-colors text-sm"
            >
              Delete my account and all data
            </button>
            <p className="text-xs text-gray-400 mt-2">
              This action cannot be undone. All your data will be permanently deleted.
            </p>
          </div>
        </div>
        
        <FormSubmitButton isSaving={isSaving} />
      </div>
    </form>
  );

  const PrivacySection = () => (
    <form onSubmit={handleSubmit}>
      <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6">
        <h3 className="text-lg font-bold mb-6 flex items-center">
          <FaShieldAlt className={`mr-2 text-${formData.accentColor}-500`} />
          Privacy Settings
        </h3>
        
        <div className="space-y-6">
          <ToggleSwitch
            name="activityTracking"
            label="Activity Tracking"
            description="Allow us to track your activity to improve recommendations"
            checked={true}
            onChange={handleChange}
          />
          
          <ToggleSwitch
            name="personalizedAds"
            label="Personalized Ads"
            description="Show ads based on your viewing activity"
            checked={true}
            onChange={handleChange}
          />
          
          <ToggleSwitch
            name="publicProfile"
            label="Public Profile"
            description="Make your profile visible to other users"
            checked={false}
            onChange={handleChange}
          />
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-700/50 flex justify-between items-center">
          <button
            type="button"
            className="flex items-center text-gray-300 hover:text-white text-sm"
          >
            <FaSignOutAlt className="mr-2" />
            View Full Privacy Policy
          </button>
          
          <FormSubmitButton isSaving={isSaving} label="Update Privacy" />
        </div>
      </div>
    </form>
  );

  // Reusable components
  const ToggleSwitch = ({ name, label, description, checked, onChange }) => (
    <div className="flex items-center justify-between">
      <div>
        <h4 className="text-sm font-medium text-gray-300">{label}</h4>
        {description && <p className="text-xs text-gray-400">{description}</p>}
      </div>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          name={name}
          checked={checked}
          onChange={onChange}
          className="sr-only peer"
        />
        <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-pink-600"></div>
      </label>
    </div>
  );

  const CheckboxInput = ({ id, name, label }) => (
    <div className="flex items-center">
      <input
        id={id}
        name={name}
        type="checkbox"
        className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-600 rounded"
      />
      <label htmlFor={id} className="ml-2 block text-sm text-gray-300">
        {label}
      </label>
    </div>
  );

  const FormSubmitButton = ({ isSaving, label = "Save Changes" }) => (
    <div className="mt-8 pt-6 border-t border-gray-700/50 flex justify-end">
      <button
        type="submit"
        disabled={isSaving}
        className={`px-6 py-2 bg-gradient-to-r from-${formData.accentColor}-600 to-yellow-500 rounded-lg text-white font-medium hover:shadow-lg hover:shadow-${formData.accentColor}-500/30 transition-all flex items-center`}
      >
        {isSaving ? (
          <>
            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Saving...
          </>
        ) : (
          <>
            <FaSave className="mr-2" />
            {label}
          </>
        )}
      </button>
    </div>
  );

  const SuccessNotification = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="fixed bottom-4 right-4 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg flex items-center"
    >
      <FaCheck className="mr-2" />
      Settings saved successfully!
    </motion.div>
  );

  return (
    <div className="flex h-screen bg-gray-900 text-white overflow-hidden">
      {/* Settings Content */}
      <div className="flex-1 flex flex-col overflow-hidden mt-10">
        {/* Settings Header */}
        <div className="p-6 border-b border-gray-700/50">
          <h2 className="text-2xl font-bold flex items-center">
            <FaCog className={`mr-2 text-${formData.accentColor}-500`} />
            Account Settings
          </h2>
          <p className="text-gray-400 text-sm mt-1">
            Manage your account preferences and security
          </p>
        </div>

        {/* Settings Content Area */}
        <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
          {/* Settings Sidebar */}
          <div className="w-full md:w-64 border-b md:border-b-0 md:border-r border-gray-700/50 bg-gray-800/50">
            <nav className="flex md:flex-col overflow-x-auto md:overflow-x-visible">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center w-full px-4 py-3 rounded-lg transition-colors ${
                    activeTab === tab.id 
                      ? `bg-gradient-to-r from-${formData.accentColor}-600/30 to-yellow-500/30 text-white` 
                      : 'text-gray-300 hover:bg-gray-700/50'
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Settings Main Content */}
          <div className="flex-1 overflow-y-auto p-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                className="max-w-3xl mx-auto"
              >
                {activeTab === 'profile' && <ProfileSection />}
                {activeTab === 'security' && <SecuritySection />}
                {activeTab === 'notifications' && <NotificationsSection />}
                {activeTab === 'appearance' && <AppearanceSection />}
                {activeTab === 'data' && <DataSection />}
                {activeTab === 'privacy' && <PrivacySection />}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Save Success Notification */}
      <AnimatePresence>
        {saveSuccess && <SuccessNotification />}
      </AnimatePresence>
    </div>
  );
};

export default SettingsPage;