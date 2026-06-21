import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaLock, FaUpload, FaSignOutAlt, FaArrowLeft, FaCheckCircle, FaFilePdf, FaFileWord } from 'react-icons/fa';
import toast from 'react-hot-toast';

export default function AdminPanel() {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  // Resume state
  const [currentInfo, setCurrentInfo] = useState({
    url: '',
    filename: '',
    date: '',
    type: ''
  });

  const [newUrl, setNewUrl] = useState('');
  const [newFilename, setNewFilename] = useState('');
  const [newType, setNewType] = useState('PDF');
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    // Check if user is already logged in for this session
    const loggedIn = sessionStorage.getItem('portfolio_admin_logged_in') === 'true';
    setIsAuthenticated(loggedIn);

    // Load current resume details
    const customUrl = localStorage.getItem('portfolio_resume_url');
    const customFilename = localStorage.getItem('portfolio_resume_filename');
    const customDate = localStorage.getItem('portfolio_resume_date');
    const customType = localStorage.getItem('portfolio_resume_type');
    
    const defaultUrl = import.meta.env.VITE_RESUME_URL || '';

    const info = {
      url: customUrl || defaultUrl,
      filename: customFilename || 'Sagar_Resume.pdf',
      date: customDate || 'June 2026',
      type: customType || 'PDF'
    };

    setCurrentInfo(info);
    setNewUrl(info.url);
    setNewFilename(info.filename);
    setNewType(info.type);
  }, [isAuthenticated]);

  const handleLogin = (e) => {
    e.preventDefault();
    const adminPassword = import.meta.env.VITE_ADMIN_PASSWORD || 'sagar_admin_123';
    
    if (password === adminPassword) {
      sessionStorage.setItem('portfolio_admin_logged_in', 'true');
      setIsAuthenticated(true);
      toast.success("Welcome back, Sagar!");
    } else {
      toast.error("Incorrect password. Please try again.");
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('portfolio_admin_logged_in');
    setIsAuthenticated(false);
    toast.success("Logged out successfully.");
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      validateFile(files[0]);
    }
  };

  const handleFileSelect = (e) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      validateFile(files[0]);
    }
  };

  const validateFile = (file) => {
    const extension = file.name.split('.').pop().toLowerCase();
    if (extension !== 'pdf' && extension !== 'docx') {
      toast.error("Only PDF and DOCX files are allowed!");
      return;
    }
    
    setSelectedFile(file);
    setNewFilename(file.name);
    setNewType(extension.toUpperCase());
    toast.success(`Validated: ${file.name}`);
  };

  const handleSaveSettings = (e) => {
    e.preventDefault();
    if (!newUrl) {
      toast.error("Please enter a valid Google Drive direct download URL.");
      return;
    }

    // Save to localStorage so static download routes pick this URL
    localStorage.setItem('portfolio_resume_url', newUrl);
    localStorage.setItem('portfolio_resume_filename', newFilename);
    localStorage.setItem('portfolio_resume_type', newType);
    
    const today = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    localStorage.setItem('portfolio_resume_date', today);

    setCurrentInfo({
      url: newUrl,
      filename: newFilename,
      date: today,
      type: newType
    });

    toast.success("Resume updated successfully!");
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brown-50 dark:bg-brown-900 px-6">
        <div className="w-full max-w-md p-8 sm:p-10 rounded-2xl bg-white dark:bg-brown-800 border border-brown-200/50 dark:border-brown-700/60 shadow-lg flex flex-col space-y-6">
          
          <div className="flex flex-col items-center text-center">
            <div className="p-4 rounded-full bg-brown-100 dark:bg-brown-900 text-brown-500 mb-4">
              <FaLock size={26} />
            </div>
            <h1 className="text-2xl font-bold font-serif text-brown-900 dark:text-white">
              Admin Login
            </h1>
            <p className="text-sm text-brown-500 dark:text-brown-400 mt-1.5">
              Enter password to access CV management panel.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="flex flex-col space-y-2">
              <label htmlFor="adminPasswordInput" className="text-xs font-bold font-mono uppercase tracking-wider text-brown-500">
                Password
              </label>
              <input
                type="password"
                id="adminPasswordInput"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="px-4 py-3 rounded-xl border border-brown-200 dark:border-brown-700 bg-brown-50/50 dark:bg-brown-900/40 text-brown-900 dark:text-white focus:outline-none focus:border-brown-500 dark:focus:border-brown-400 font-medium"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-brown-500 hover:bg-brown-600 text-white font-bold transition-all duration-200 shadow-sm cursor-pointer"
            >
              Authenticate
            </button>
          </form>

          <button
            onClick={() => navigate('/')}
            className="flex items-center justify-center space-x-2 text-sm text-brown-600 hover:text-brown-800 dark:text-brown-400 dark:hover:text-brown-200 font-bold transition-colors cursor-pointer"
          >
            <FaArrowLeft size={12} />
            <span>Return to Portfolio</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brown-50 dark:bg-brown-900 py-16 px-6">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Header Action Bar */}
        <div className="flex items-center justify-between p-6 rounded-2xl bg-white dark:bg-brown-800 border border-brown-200/40 dark:border-brown-700/60 shadow-sm">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigate('/')}
              className="p-3 rounded-xl bg-brown-50 dark:bg-brown-900 text-brown-700 dark:text-brown-300 hover:text-brown-500 transition-colors shadow-inner cursor-pointer"
              title="Return to Home"
            >
              <FaArrowLeft size={16} />
            </button>
            <div>
              <h1 className="text-xl font-bold font-serif text-brown-900 dark:text-white">
                Resume Administrator
              </h1>
              <p className="text-xs text-brown-500 dark:text-brown-400 font-medium">
                Update dynamic file parameters for public downloads.
              </p>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white font-bold text-sm transition-all duration-300 cursor-pointer"
          >
            <FaSignOutAlt />
            <span>Logout</span>
          </button>
        </div>

        {/* Status and Edit Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Current file status (Left Column) */}
          <div className="lg:col-span-4 p-6 rounded-2xl bg-white dark:bg-brown-800 border border-brown-200/40 dark:border-brown-700/60 shadow-sm space-y-6">
            <h2 className="text-lg font-bold font-serif text-brown-900 dark:text-white border-b border-brown-100 dark:border-brown-700 pb-2">
              Active Document
            </h2>

            <div className="flex justify-center py-4 bg-brown-50 dark:bg-brown-900/60 border border-dashed border-brown-200/50 dark:border-brown-700/60 rounded-xl">
              {currentInfo.type === 'DOCX' ? (
                <FaFileWord size={48} className="text-blue-500" />
              ) : (
                <FaFilePdf size={48} className="text-red-500" />
              )}
            </div>

            <div className="space-y-4 text-sm font-medium">
              <div>
                <span className="text-xs font-bold font-mono text-brown-400 block uppercase">
                  Filename
                </span>
                <span className="text-brown-800 dark:text-brown-200 font-bold block truncate">
                  {currentInfo.filename}
                </span>
              </div>

              <div>
                <span className="text-xs font-bold font-mono text-brown-400 block uppercase">
                  Format Type
                </span>
                <span className="text-brown-800 dark:text-brown-200 font-bold block">
                  {currentInfo.type}
                </span>
              </div>

              <div>
                <span className="text-xs font-bold font-mono text-brown-400 block uppercase">
                  Last Updated
                </span>
                <span className="text-brown-800 dark:text-brown-200 font-bold block">
                  {currentInfo.date}
                </span>
              </div>
            </div>
          </div>

          {/* Form and file update (Right Column) */}
          <form
            onSubmit={handleSaveSettings}
            className="lg:col-span-8 p-8 rounded-2xl bg-white dark:bg-brown-800 border border-brown-200/40 dark:border-brown-700/60 shadow-sm space-y-6"
          >
            <h2 className="text-lg font-bold font-serif text-brown-900 dark:text-white">
              Update Document Settings
            </h2>

            {/* Drag & Drop simulated upload zone */}
            <div className="flex flex-col space-y-2">
              <span className="text-xs font-bold font-mono uppercase tracking-wider text-brown-500 dark:text-brown-400">
                Drag & Drop Upload Zone
              </span>
              <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => document.getElementById('fileUploadInput').click()}
                className={`py-8 px-6 rounded-2xl border-2 border-dashed flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300 ${
                  isDragging
                    ? 'border-brown-500 bg-brown-100/40 dark:bg-brown-800/40'
                    : 'border-brown-200 dark:border-brown-700 hover:border-brown-400 bg-brown-50/20'
                }`}
              >
                <input
                  type="file"
                  id="fileUploadInput"
                  accept=".pdf,.docx"
                  onChange={handleFileSelect}
                  className="hidden"
                />
                <FaUpload size={28} className="text-brown-400 dark:text-brown-500 mb-3" />
                <p className="text-sm font-bold text-brown-700 dark:text-brown-300">
                  {selectedFile ? `Selected: ${selectedFile.name}` : "Drag & drop resume here or click to browse"}
                </p>
                <p className="text-xs text-brown-400 mt-1">
                  Supports PDF or DOCX format only
                </p>
              </div>
            </div>

            {/* Manual Form Controls */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col space-y-2">
                <label htmlFor="adminFilenameInput" className="text-xs font-bold font-mono uppercase tracking-wider text-brown-500 dark:text-brown-400">
                  Filename
                </label>
                <input
                  type="text"
                  id="adminFilenameInput"
                  required
                  value={newFilename}
                  onChange={(e) => setNewFilename(e.target.value)}
                  placeholder="e.g. Sagar_Resume.pdf"
                  className="px-4 py-3 rounded-xl border border-brown-200 dark:border-brown-700 bg-brown-50/50 dark:bg-brown-900/40 text-brown-900 dark:text-white focus:outline-none focus:border-brown-500 font-medium"
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label htmlFor="adminTypeSelect" className="text-xs font-bold font-mono uppercase tracking-wider text-brown-500 dark:text-brown-400">
                  File Format
                </label>
                <select
                  id="adminTypeSelect"
                  value={newType}
                  onChange={(e) => setNewType(e.target.value)}
                  className="px-4 py-3 rounded-xl border border-brown-200 dark:border-brown-700 bg-brown-50/50 dark:bg-brown-900/40 text-brown-900 dark:text-white focus:outline-none focus:border-brown-500 font-medium"
                >
                  <option value="PDF">PDF Document</option>
                  <option value="DOCX">Word Document (DOCX)</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="adminGoogleDriveUrlInput" className="text-xs font-bold font-mono uppercase tracking-wider text-brown-500 dark:text-brown-400">
                Google Drive Shareable Link
              </label>
              <input
                type="url"
                id="adminGoogleDriveUrlInput"
                required
                value={newUrl}
                onChange={(e) => setNewUrl(e.target.value)}
                placeholder="https://drive.google.com/uc?export=download&id=..."
                className="px-4 py-3 rounded-xl border border-brown-200 dark:border-brown-700 bg-brown-50/50 dark:bg-brown-900/40 text-brown-900 dark:text-white focus:outline-none focus:border-brown-500 font-medium"
              />
              <span className="text-[10px] text-brown-400 flex items-center space-x-1">
                <FaCheckCircle className="text-green-500" />
                <span>Tip: For direct downloads, use direct-link formatting like: <code>/uc?export=download&amp;id=...</code></span>
              </span>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-brown-500 hover:bg-brown-600 text-white font-bold transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>Save Dynamic Updates</span>
              </button>
            </div>
            
            <p className="text-xs text-brown-400 italic text-center pt-2">
              Note: This tool writes changes to localStorage to override .env defaults. For permanent deployment updates, update your VITE_RESUME_URL variable.
            </p>
          </form>
        </div>

      </div>
    </div>
  );
}
