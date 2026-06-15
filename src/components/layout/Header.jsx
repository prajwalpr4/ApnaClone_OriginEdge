import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu, X, ChevronDown, ChevronRight, FileText, FileSearch, FileSignature, BookOpen } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-200 ${
        isScrolled ? 'shadow-sm' : 'border-b border-gray-200'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex flex-col items-center justify-center mr-8">
          <span className="text-2xl font-bold text-gray-900 tracking-tight leading-none">apna</span>
          <div className="flex h-1 w-full mt-1 rounded-full overflow-hidden">
            <div className="bg-green-500 w-1/3"></div>
            <div className="bg-yellow-400 w-1/3"></div>
            <div className="bg-blue-500 w-1/3"></div>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 mr-6">
          <div className="relative group flex items-center text-sm font-semibold text-[#1a0f2e] hover:text-brand-primary cursor-pointer h-16">
            Jobs <ChevronDown size={16} className="ml-1 text-[#1a0f2e]" />
            
            {/* Jobs Dropdown Menu */}
            <div className="absolute top-[60px] left-[-20px] w-[480px] bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.1)] border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 overflow-hidden flex">
              {/* Left Column */}
              <div className="flex-1 py-4 px-2 border-r border-gray-100">
                <Link to="/" className="block px-4 py-2.5 text-[15px] text-gray-500 hover:text-[#1a0f2e] font-medium">Jobs For You</Link>
                <Link to="/" className="block px-4 py-2.5 text-[15px] text-gray-500 hover:text-[#1a0f2e] font-medium">Work From Home Jobs</Link>
                <Link to="/" className="block px-4 py-2.5 text-[15px] text-gray-500 hover:text-[#1a0f2e] font-medium">Part Time Jobs</Link>
                <Link to="/" className="block px-4 py-2.5 text-[15px] text-gray-500 hover:text-[#1a0f2e] font-medium">Freshers Jobs</Link>
                <Link to="/" className="block px-4 py-2.5 text-[15px] text-gray-500 hover:text-[#1a0f2e] font-medium">Women Jobs</Link>
                <Link to="/" className="block px-4 py-2.5 text-[15px] text-gray-500 hover:text-[#1a0f2e] font-medium">Full Time Jobs</Link>
                <Link to="/" className="block px-4 py-2.5 text-[15px] text-gray-500 hover:text-[#1a0f2e] font-medium">Night Shift Jobs</Link>
                <Link to="/" className="block px-4 py-2.5 text-[15px] text-gray-500 hover:text-[#1a0f2e] font-medium">International Jobs</Link>
              </div>
              {/* Right Column */}
              <div className="flex-1 py-4 px-2 bg-[#fcfcfc]">
                <Link to="/" className="flex items-center justify-between px-4 py-2.5 text-[15px] text-gray-500 hover:text-[#1a0f2e] font-medium group/item">
                  Jobs By City <ChevronRight size={16} className="text-brand-primary opacity-80" />
                </Link>
                <Link to="/" className="flex items-center justify-between px-4 py-2.5 text-[15px] text-gray-500 hover:text-[#1a0f2e] font-medium group/item">
                  Jobs By Department <ChevronRight size={16} className="text-brand-primary opacity-80" />
                </Link>
                <Link to="/" className="flex items-center justify-between px-4 py-2.5 text-[15px] text-gray-500 hover:text-[#1a0f2e] font-medium group/item">
                  Jobs By Company <ChevronRight size={16} className="text-brand-primary opacity-80" />
                </Link>
                <Link to="/" className="flex items-center justify-between px-4 py-2.5 text-[15px] text-gray-500 hover:text-[#1a0f2e] font-medium group/item">
                  Jobs By Qualification <ChevronRight size={16} className="text-brand-primary opacity-80" />
                </Link>
                <Link to="/" className="flex items-center justify-between px-4 py-2.5 text-[15px] text-gray-500 hover:text-[#1a0f2e] font-medium group/item">
                  Others <ChevronRight size={16} className="text-brand-primary opacity-80" />
                </Link>
              </div>
            </div>
          </div>
          
          <Link to="/job-prep" className="flex items-center text-sm font-semibold text-[#1a0f2e] hover:text-brand-primary relative">
            Job Prep 
            <span className="ml-1.5 bg-[#f97316] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-[4px]">New</span>
          </Link>
          <Link to="/contests" className="flex items-center text-sm font-semibold text-[#1a0f2e] hover:text-brand-primary">
            Contests
            <span className="ml-1.5 bg-[#f97316] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-[4px]">New</span>
          </Link>
          <Link to="#" className="flex items-center text-sm font-semibold text-[#1a0f2e] hover:text-brand-primary">
            Degree
            <span className="ml-1.5 bg-[#f97316] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-[4px]">New</span>
          </Link>
          <div className="relative group flex items-center text-sm font-semibold text-gray-800 hover:text-brand-primary cursor-pointer h-16">
            Resume Tools <ChevronDown size={16} className="ml-1 text-gray-500" />
            
            {/* Dropdown Menu */}
            <div className="absolute top-[60px] right-0 w-[320px] bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 overflow-hidden">
              <div className="flex flex-col py-2">
                
                <div className="flex items-start gap-4 px-5 py-3.5 hover:bg-gray-50 cursor-pointer">
                  <div className="w-[36px] h-[36px] shrink-0 text-purple-700 flex items-center justify-center rounded border border-purple-200">
                     <FileText size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1a0f2e] text-[15px] mb-0.5">AI Resume builder</h4>
                    <p className="text-[13px] text-gray-500">Create your best resume using AI</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 px-5 py-3.5 hover:bg-gray-50 cursor-pointer">
                  <div className="w-[36px] h-[36px] shrink-0 text-[#127b6c] flex items-center justify-center rounded border border-[#127b6c]/30">
                     <FileSearch size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1a0f2e] text-[15px] mb-0.5">AI Resume checker</h4>
                    <p className="text-[13px] text-gray-500">Get instant resume feedback</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 px-5 py-3.5 hover:bg-gray-50 cursor-pointer">
                  <div className="w-[36px] h-[36px] shrink-0 text-orange-600 flex items-center justify-center rounded border border-orange-200">
                     <FileSignature size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1a0f2e] text-[15px] mb-0.5">AI Cover letter generator</h4>
                    <p className="text-[13px] text-gray-500">Stand out and get hired faster</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 px-5 py-3.5 hover:bg-gray-50 cursor-pointer">
                  <div className="w-[36px] h-[36px] shrink-0 text-[#a0522d] flex items-center justify-center rounded border border-[#a0522d]/30">
                     <BookOpen size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1a0f2e] text-[15px] mb-0.5">Blog</h4>
                    <p className="text-[13px] text-gray-500">Guidance for securing your dream job</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </nav>

        {/* Search */}
        <div className="hidden md:flex flex-1 items-center max-w-sm mr-6">
          <div className="flex items-center w-full bg-gray-50 border border-gray-200 rounded-lg overflow-hidden px-3 py-1.5 focus-within:ring-1 focus-within:ring-gray-300">
            <Search size={18} className="text-gray-400" />
            <input
              type="text"
              placeholder="Search jobs..."
              className="w-full bg-transparent border-none focus:outline-none text-sm text-gray-800 ml-2"
            />
          </div>
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link to="/employer-login" className="text-sm font-semibold text-brand-primary hover:underline">
            Employer Login
          </Link>
          <Link to="/employer-login" className="bg-brand-primary text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors inline-block text-center">
            Candidate Login
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-gray-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 p-4 shadow-lg absolute w-full z-50">
          <div className="flex flex-col gap-4">
            <div className="flex items-center border border-gray-300 rounded-lg bg-gray-50 p-2">
              <Search size={18} className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Search jobs..."
                className="w-full bg-transparent text-sm focus:outline-none"
              />
            </div>
            <Link to="#" className="font-semibold text-gray-800 py-2 border-b border-gray-100">Jobs</Link>
            <Link to="#" className="font-semibold text-gray-800 py-2 border-b border-gray-100">Job Prep</Link>
            <Link to="#" className="font-semibold text-gray-800 py-2 border-b border-gray-100">Contests</Link>
            <Link to="/employer-login" className="font-semibold text-brand-primary py-2 border-b border-gray-100">Employer Login</Link>
            <Link to="/employer-login" className="w-full bg-brand-primary text-white text-sm font-semibold px-4 py-3 rounded-lg mt-2 text-center block">
              Candidate Login
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
