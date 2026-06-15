import { ChevronDown, ArrowUpRight, PlayCircle, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const EmployerLogin = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">
      {/* Top Banner */}
      <div className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 py-2 flex justify-center items-center gap-4 text-white text-[13px] font-medium px-4 text-center">
        <span className="flex items-center gap-2">
          Introducing 
          <span className="bg-white/20 p-0.5 rounded-full inline-flex w-5 h-5 items-center justify-center text-[10px]">👩🏽</span>
          <b>AI Calling Agent!</b> 
          <span className="hidden sm:inline">AI calls and shortlists applicants 24/7 — Enjoy 25% off, launch offer live!</span>
        </span>
        <button className="bg-white text-purple-700 px-3 py-1 rounded-full text-[11px] font-bold hover:bg-gray-100 whitespace-nowrap shrink-0">
          Know more →
        </button>
      </div>

      {/* Header */}
      <header className="w-full bg-[#201533] border-b border-gray-800 text-white py-4 px-4 sm:px-8 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center gap-8">
          <Link to="/" className="bg-white rounded w-[50px] h-[36px] flex flex-col items-center justify-center shrink-0">
             <span className="text-[14px] font-bold text-gray-900 tracking-tight leading-none mb-0.5">apna</span>
             <div className="flex h-0.5 w-[20px] rounded-full overflow-hidden">
                <div className="bg-green-500 w-1/3"></div>
                <div className="bg-yellow-400 w-1/3"></div>
                <div className="bg-blue-500 w-1/3"></div>
             </div>
          </Link>
          <nav className="hidden lg:flex gap-6 text-[14px] font-medium text-gray-200">
            <div className="flex items-center gap-1 cursor-pointer hover:text-white transition-colors">Product <ChevronDown size={14}/></div>
            <div className="cursor-pointer hover:text-white transition-colors">Enterprise</div>
            <div className="cursor-pointer hover:text-white transition-colors">Blogs</div>
            <div className="cursor-pointer hover:text-white transition-colors">Pricing</div>
            <div className="flex items-center gap-1 cursor-pointer hover:text-white transition-colors">Looking for a job <ArrowUpRight size={14}/></div>
          </nav>
        </div>
        <div className="flex gap-4">
          <button className="border border-gray-400 text-white px-4 py-2 rounded text-sm font-semibold hover:bg-white/10 transition-colors hidden sm:block">
            Contact us
          </button>
          <button className="bg-brand-primary text-white px-5 py-2 rounded text-sm font-semibold hover:bg-teal-700 transition-colors">
            Login/Sign up
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full bg-[#201533] min-h-[550px] flex justify-center items-center relative overflow-hidden flex-1">
        {/* Subtle Background Gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-orange-900/10 z-0"></div>
        <div className="absolute top-0 right-0 w-[50%] h-full bg-gradient-to-l from-white/5 to-transparent z-0 hidden lg:block"></div>
        
        <div className="max-w-[1100px] w-full mx-auto px-4 py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 z-10">
          
          {/* Left Text Block */}
          <div className="flex flex-col justify-center text-white">
            <h1 className="text-[36px] sm:text-[44px] font-bold leading-tight mb-5 tracking-tight">
              Hire top talent in 48 hours with apna.
            </h1>
            <p className="text-[16px] text-gray-300 mb-8 max-w-[480px] leading-relaxed">
              Streamline your recruitment with AI-driven precision. Single solution from fresher to experienced hiring.
            </p>
            
            <button className="flex items-center gap-2 font-bold mb-14 hover:text-gray-300 w-fit transition-colors">
              <PlayCircle size={22} className="text-white" /> Watch video
            </button>
            
            <div className="flex flex-wrap gap-8 sm:gap-14">
              <div>
                <h3 className="text-2xl font-bold mb-1">6 Crore <span className="text-brand-orange">+</span></h3>
                <p className="text-sm text-gray-400 font-medium">Qualified candidates</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-1">7 Lakh <span className="text-brand-orange">+</span></h3>
                <p className="text-sm text-gray-400 font-medium">Employers use apna</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-1">900 <span className="text-brand-orange">+</span></h3>
                <p className="text-sm text-gray-400 font-medium">Available cities</p>
              </div>
            </div>
          </div>
          
          {/* Form Card */}
          <div className="flex lg:justify-end w-full">
            <div className="bg-[#332a45] rounded-[16px] p-8 w-full max-w-[420px] shadow-2xl border border-white/5 mx-auto lg:mx-0">
              <h2 className="text-white text-[22px] font-bold mb-1">Let's get started</h2>
              <p className="text-gray-300 text-[13px] mb-6 font-medium">Hire top talent faster with apna</p>
              
              <div className="mb-6">
                <label className="text-white font-bold text-[13px] mb-2 block">Mobile number</label>
                <input 
                  type="text" 
                  placeholder="Enter 10 digit mobile number" 
                  className="w-full px-4 py-3 rounded text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary placeholder:text-gray-400 font-medium" 
                />
              </div>
              
              <button className="w-full bg-brand-primary text-white font-bold py-3.5 rounded mb-6 hover:bg-teal-700 transition-colors text-[15px]">
                Continue
              </button>
              
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-px bg-gray-600 flex-1"></div>
                <span className="text-gray-400 text-xs font-semibold tracking-wide">OR</span>
                <div className="h-px bg-gray-600 flex-1"></div>
              </div>
              
              <div className="flex justify-center mb-6">
                <button className="flex items-center gap-2 text-white font-bold text-sm hover:text-gray-300 transition-colors">
                   <Building2 size={16} /> <span className="underline underline-offset-4 decoration-1 decoration-gray-400">Click here for Enterprise login</span>
                </button>
              </div>
              
              <p className="text-gray-400 text-[11px] text-center leading-relaxed">
                By clicking continue, you agree to the apna <Link to="#" className="text-[#3b82f6] underline hover:text-blue-400">Terms of service</Link> & <Link to="#" className="text-[#3b82f6] underline hover:text-blue-400">Privacy policy</Link>
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Strip */}
      <div className="w-full bg-white py-8 text-center border-t border-gray-200">
        <h3 className="text-[#1a0f2e] text-[18px] font-bold">
          Trusted by 1000+ enterprises and 7 lakhs+ MSMEs for <span className="text-gray-500 font-medium">hiring</span>
        </h3>
      </div>
    </div>
  );
};

export default EmployerLogin;
