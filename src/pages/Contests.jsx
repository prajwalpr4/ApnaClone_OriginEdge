import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Filter, Mic, Trophy, Clock, Star, Download, Play, Apple } from 'lucide-react';

const Contests = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#f8f9fa]">
      <Header />

      <main className="flex-1 max-w-[1280px] w-full mx-auto px-4 py-8">
        <h1 className="text-[24px] font-bold text-gray-900 mb-6">All contests</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Sidebar (Filters & Promo) */}
          <div className="lg:col-span-3 space-y-6">
            {/* Filters Card */}
            <div className="bg-white rounded-2xl p-5 shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-gray-100">
              <div className="flex items-center gap-2 mb-6">
                <Filter size={18} className="text-gray-500" />
                <h3 className="font-bold text-gray-900 text-[16px]">Filters</h3>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold text-gray-800 mb-3">Contest Status</h4>
                <div className="flex flex-wrap gap-2">
                  <button className="px-4 py-1.5 rounded-full border border-brand-primary text-brand-primary text-sm font-medium bg-[#e6f4f1]">
                    All
                  </button>
                  <button className="px-4 py-1.5 rounded-full border border-gray-200 text-gray-600 text-sm font-medium hover:bg-gray-50 flex items-center gap-1.5">
                    Live <span className="bg-gray-100 text-gray-500 text-xs px-1.5 rounded font-bold">1</span>
                  </button>
                  <button className="px-4 py-1.5 rounded-full border border-gray-200 text-gray-600 text-sm font-medium hover:bg-gray-50 flex items-center gap-1.5 mt-2">
                    Closed <span className="bg-gray-100 text-gray-500 text-xs px-1.5 rounded font-bold">42</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Contests Promo Card */}
            <div className="bg-[#fff0f0] rounded-2xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-red-50 text-center relative overflow-hidden">
              <h2 className="text-[#8c2020] font-bold text-[22px] mb-2 text-left relative z-10">Contests</h2>
              <p className="text-[#8c2020] text-[15px] font-medium leading-snug text-left mb-6 relative z-10">
                Unlock opportunities,<br/>one challenge at a time
              </p>
              
              <ul className="text-left space-y-2 mb-8 relative z-10">
                <li className="flex items-start gap-2 text-[13px] text-gray-800 font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-1.5 shrink-0"></div>
                  Explore free competitions
                </li>
                <li className="flex items-start gap-2 text-[13px] text-gray-800 font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-1.5 shrink-0"></div>
                  Showcase your skills
                </li>
                <li className="flex items-start gap-2 text-[13px] text-gray-800 font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-1.5 shrink-0"></div>
                  Win exciting rewards
                </li>
              </ul>
              
              {/* Mock Illustration */}
              <div className="relative h-[120px] w-full flex justify-center items-end mt-4">
                 {/* Target circles */}
                 <div className="absolute w-[160px] h-[160px] rounded-full border-[12px] border-pink-200/50 bottom-[-40px]"></div>
                 <div className="absolute w-[120px] h-[120px] rounded-full border-[10px] border-pink-300/50 bottom-[-20px]"></div>
                 
                 {/* Podium */}
                 <div className="w-[120px] flex items-end justify-center z-10">
                   <div className="w-[30px] h-[40px] bg-[#005a9c] rounded-t-sm"></div>
                   <div className="w-[40px] h-[60px] bg-[#d11141] rounded-t-sm mx-0.5 relative flex justify-center">
                     <div className="absolute -top-10 text-[36px] drop-shadow-md">🏆</div>
                   </div>
                   <div className="w-[30px] h-[30px] bg-[#005a9c] rounded-t-sm"></div>
                 </div>
              </div>
            </div>
          </div>

          {/* Main Content (Tabs & Cards) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Tabs */}
            <div className="flex bg-white rounded-xl shadow-sm border border-gray-100">
              <button className="flex-1 py-4 text-center text-[15px] font-bold text-brand-primary border-b-[3px] border-brand-primary">
                All Contests
              </button>
              <button className="flex-1 py-4 text-center text-[15px] font-semibold text-gray-500 border-b-[3px] border-transparent hover:text-gray-700">
                Registered Contests
              </button>
            </div>

            {/* Contest Card 1 */}
            <div className="bg-white rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.08)] border border-gray-200 overflow-hidden">
              
              {/* Banner Image Mockup */}
              <div className="w-full h-[140px] bg-[#0f172a] relative flex items-center px-6 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#1e3a8a] to-[#3b82f6] opacity-80"></div>
                <div className="relative z-10 w-full flex justify-between items-center">
                  <div>
                    <div className="flex items-center gap-1 text-white text-[10px] font-bold mb-2 uppercase tracking-wide">
                      <span className="text-blue-400">◆</span> Arctic Engines
                    </div>
                    <p className="text-blue-200 text-xs font-bold uppercase mb-0.5">BE FAMOUS</p>
                    <h2 className="text-white text-2xl font-black leading-tight">Be the Voice<br/>of AI.</h2>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-bold text-lg mb-1">₹ Earn up to ₹8,000</p>
                    <p className="text-blue-200 text-[10px] mb-3">Share a 2-min voice sample (no background noise)</p>
                    <button className="bg-blue-500 text-white text-[10px] font-bold px-4 py-1.5 rounded-full">APPLY NOW</button>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-[50px] h-[50px] bg-blue-50 rounded-lg flex items-center justify-center shrink-0 border border-blue-100">
                    <div className="text-3xl">🧊</div>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg flex items-center gap-2">
                      <Mic size={18} className="text-gray-600" /> Be the Voice of AI <span className="text-gray-400 ml-1">&gt;</span>
                    </h3>
                    <div className="flex items-center gap-3 mt-2">
                      <span className="text-[#127b6c] border border-[#127b6c]/30 bg-[#e6f4f1] text-[11px] font-bold px-2 py-0.5 rounded">Live</span>
                      <span className="text-gray-600 text-[13px] font-medium"><b>7,846+</b> Participants</span>
                    </div>
                  </div>
                </div>

                <div className="bg-[#fffdf0] border border-[#fef08a] rounded-xl p-4 flex items-start gap-3 mb-6">
                  <Trophy size={18} className="text-yellow-600 shrink-0 mt-0.5" />
                  <p className="text-[13px] text-gray-800 leading-relaxed">
                    <b>Paid AI Voice Project</b> Get paid to contribute your voice to multilingual AI technology.
                  </p>
                </div>

                <div className="flex items-center justify-center gap-3 mb-6">
                  <span className="text-[13px] text-gray-600 font-semibold">Registration Ends in</span>
                  <div className="flex items-center gap-1.5 text-red-500 border border-red-200 bg-red-50 px-2 py-1 rounded text-[12px] font-bold">
                    <Clock size={14} /> 48:11:06:27
                  </div>
                </div>

                <button className="w-full bg-brand-primary text-white font-bold py-3.5 rounded-lg hover:bg-teal-700 transition shadow-md">
                  Register Now
                </button>
              </div>
            </div>

            {/* Contest Card 2 (Cut off) */}
            <div className="bg-white rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.08)] border border-gray-200 overflow-hidden h-[150px]">
              <div className="w-full h-full bg-[#fdf2f8] relative px-6 py-4 flex flex-col justify-center">
                 <h2 className="text-[#831843] text-xl font-black leading-tight mb-2">Future Hospitality<br/>Leaders Quiz</h2>
                 <p className="text-[#9d174d] text-[10px] max-w-[200px]">Take a short quiz to unlock your hospitality career and scholarships</p>
              </div>
            </div>

          </div>

          {/* Right Sidebar (App Promo) */}
          <div className="lg:col-span-3">
            <div className="bg-[#fcfaff] rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.08)] border border-purple-100">
              <h3 className="text-brand-primary font-bold text-[18px] mb-4">Download Apna app!</h3>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-[13px] text-gray-800 font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#1e40af] mt-1.5 shrink-0"></div>
                  Unlimited job applications
                </li>
                <li className="flex items-start gap-2 text-[13px] text-gray-800 font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#1e40af] mt-1.5 shrink-0"></div>
                  Connect with HRs, directly
                </li>
                <li className="flex items-start gap-2 text-[13px] text-gray-800 font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#1e40af] mt-1.5 shrink-0"></div>
                  Track your applications
                </li>
              </ul>

              <div className="flex items-center gap-4 mb-6">
                <div className="bg-white border border-gray-100 rounded-lg p-3 text-center shadow-sm w-1/2">
                  <div className="flex items-center justify-center gap-1 text-orange-400 font-bold text-[16px] mb-1">
                    4.5 <Star size={16} className="fill-orange-400" />
                  </div>
                  <p className="text-[10px] text-gray-500 font-medium">6L reviews</p>
                </div>
                <div className="bg-white border border-gray-100 rounded-lg p-3 text-center shadow-sm w-1/2">
                  <div className="flex items-center justify-center gap-1 text-[#1e40af] font-bold text-[16px] mb-1">
                    <Download size={16} /> 5 cr+
                  </div>
                  <p className="text-[10px] text-gray-500 font-medium">App downloads</p>
                </div>
              </div>

              {/* Mock Phone */}
              <div className="w-[140px] h-[200px] bg-white border-4 border-gray-800 rounded-[20px] shadow-xl mx-auto mb-8 relative overflow-hidden flex flex-col p-2">
                <div className="w-1/2 h-3 bg-gray-800 rounded-b-xl absolute top-0 left-1/2 -translate-x-1/2"></div>
                <div className="w-full h-[60px] bg-blue-50 rounded mb-2 mt-4 flex items-center justify-center">
                   <div className="w-8 h-8 bg-blue-200 rounded-full"></div>
                </div>
                <div className="w-3/4 h-2 bg-gray-200 rounded mb-2"></div>
                <div className="w-full h-12 bg-gray-100 rounded border border-gray-200 mt-auto"></div>
              </div>

              <p className="text-[11px] font-bold text-gray-800 mb-3">Download it from<br/>Play Store</p>
              <div className="bg-black text-white rounded-md px-3 py-2 flex items-center gap-2 cursor-pointer w-fit">
                <Play size={18} className="text-gray-200 fill-current" />
                <span className="text-[9px] leading-[1.1] font-medium">GET IT ON<br/><span className="text-[13px] font-semibold">Google Play</span></span>
              </div>
            </div>
          </div>
          
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contests;
