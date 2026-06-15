import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { PlayCircle, ChevronDown, Link2, ChevronLeft, ChevronRight } from 'lucide-react';

const JobPrep = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">
      <Header />

      <main className="flex-1 w-full">
        {/* Hero Section */}
        <div className="w-full bg-gradient-to-b from-[#e3f4e8] to-[#f0f9f3] pt-20 pb-40 px-4 relative overflow-hidden">
          <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            
            {/* Left Content */}
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-white rounded-xl shadow-sm px-3 py-1.5 flex items-center justify-center border border-gray-100">
                  <span className="text-2xl font-bold text-brand-primary">ai</span>
                </div>
                <h1 className="text-[44px] font-bold text-gray-900 tracking-tight">Job Prep</h1>
              </div>
              
              <h2 className="text-[28px] text-gray-800 mb-8 leading-snug font-medium max-w-[480px]">
                Practice interviews with Free AI Interview Coach
              </h2>
              
              <div className="flex items-center gap-2 mb-8 text-[#b8860b] font-bold text-sm bg-[#fcf8e3] px-4 py-2 rounded-full shadow-sm border border-[#f0e68c]">
                <Link2 size={16} className="transform -rotate-45" />
                45.7K PREPS DONE
                <Link2 size={16} className="transform -rotate-45" />
              </div>
              
              <button className="flex items-center gap-2 bg-white text-gray-900 font-bold px-6 py-3 rounded-lg shadow-md border border-gray-100 hover:bg-gray-50 transition-colors">
                Watch Demo <PlayCircle size={20} className="text-gray-900" />
              </button>
            </div>
            
            {/* Right Content - Static Card Carousel Mockup */}
            <div className="relative h-[380px] w-full flex justify-center items-center mt-10 lg:mt-0">
              
              {/* Back Left Card */}
              <div className="absolute left-[10%] lg:left-0 top-[10%] w-[220px] h-[300px] bg-gradient-to-b from-purple-800 to-purple-600 rounded-3xl shadow-lg opacity-80 transform scale-90 -rotate-3 z-0"></div>
              
              {/* Back Right Card */}
              <div className="absolute right-[10%] lg:right-0 top-[10%] w-[220px] h-[300px] bg-gradient-to-b from-orange-500 to-yellow-500 rounded-3xl shadow-lg opacity-80 transform scale-90 rotate-3 z-0"></div>
              
              {/* Middle Left Card */}
              <div className="absolute left-[15%] lg:left-[10%] top-[5%] w-[240px] h-[320px] bg-[#312a40] rounded-3xl shadow-xl opacity-95 transform scale-95 z-10 border border-gray-700"></div>
              
              {/* Middle Right Card */}
              <div className="absolute right-[15%] lg:right-[10%] top-[5%] w-[240px] h-[320px] bg-gradient-to-br from-red-800 to-red-600 rounded-3xl shadow-xl opacity-95 transform scale-95 z-10 border border-red-500"></div>
              
              {/* Chevron Buttons */}
              <button className="absolute left-0 lg:-left-6 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/40 text-white rounded-full flex items-center justify-center z-30 hover:bg-black/60 transition shadow-lg backdrop-blur-sm">
                <ChevronLeft size={24} />
              </button>
              
              <button className="absolute right-0 lg:-right-6 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/40 text-gray-800 rounded-full flex items-center justify-center z-30 hover:bg-white/70 transition shadow-lg backdrop-blur-sm border border-gray-200">
                <ChevronRight size={24} />
              </button>

              {/* Main Front Card */}
              <div className="relative w-[300px] h-[380px] bg-[#0c4a6e] rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] z-20 border-4 border-white overflow-hidden flex flex-col justify-between">
                {/* Background Gradient matching image */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0c4a6e] via-[#059669] to-[#0f172a] z-0 opacity-90"></div>
                
                {/* Mock image placeholder */}
                <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80')] bg-cover bg-center mix-blend-overlay opacity-60"></div>
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/80 to-transparent z-0"></div>
                
                {/* Card Content */}
                <div className="relative z-10 flex flex-col items-center pt-8 px-4 h-full">
                  <h3 className="text-white font-bold text-lg mb-3 drop-shadow-md text-center">Software Engineer</h3>
                  <div className="flex items-center gap-2 mb-auto">
                     <div className="bg-red-600 w-8 h-8 flex items-center justify-center rounded">
                       <span className="text-white font-bold text-xl leading-none block transform scale-y-150">T</span>
                     </div>
                     <span className="text-white font-bold text-2xl drop-shadow-md">Tesla</span>
                  </div>
                  
                  <div className="w-full pb-8 flex flex-col items-center">
                    <button className="w-4/5 bg-brand-primary text-white font-bold py-3 rounded-full mb-2 shadow-lg hover:bg-teal-700 transition">
                      Practice Interview
                    </button>
                    <p className="text-gray-300 text-xs font-medium drop-shadow-md">5 min AI Interview</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Search Section */}
        <div className="max-w-[1000px] mx-auto px-4 relative z-20 -mt-24 mb-20">
          <div className="bg-white rounded-t-[40px] rounded-b-[20px] shadow-[0_10px_40px_rgba(0,0,0,0.08)] p-8 lg:p-12 w-full border border-gray-100">
            <h3 className="text-gray-900 font-bold text-[20px] tracking-wide mb-6 uppercase">
              FIND THE PERFECT PREP FOR YOU
            </h3>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1 relative">
                <div className="w-full border border-gray-200 rounded-2xl px-6 py-4 flex justify-between items-center bg-white hover:border-gray-300 cursor-pointer transition shadow-sm">
                  <span className="text-gray-600 text-[18px]">Company</span>
                  <ChevronDown size={24} className="text-brand-primary" />
                </div>
              </div>
              <div className="flex-1 relative">
                <div className="w-full border border-gray-200 rounded-2xl px-6 py-4 flex justify-between items-center bg-white hover:border-gray-300 cursor-pointer transition shadow-sm">
                  <span className="text-gray-600 text-[18px]">Role</span>
                  <ChevronDown size={24} className="text-brand-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
};

export default JobPrep;
