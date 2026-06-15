import { Briefcase, UserPlus, Calendar, Rocket } from 'lucide-react';

const SidebarPromo = () => {
  return (
    <div className="space-y-6">
      {/* 3 Simple Steps Card */}
      <div className="bg-[#fff9f8] rounded-2xl p-5 border border-red-50">
        <h3 className="text-[#d84033] font-bold text-[15px] mb-5">
          Get your dream job in 3 simple steps:
        </h3>
        
        <div className="flex justify-between items-start relative px-1">
          <div className="absolute top-[15px] left-[12%] right-[12%] h-[2px] bg-red-100 z-0"></div>
          
          <div className="flex flex-col items-center gap-2 z-10 w-1/4">
            <div className="w-8 h-8 rounded-full bg-[#fdf2f1] border border-red-100 flex items-center justify-center text-red-500 bg-white">
              <Briefcase size={14} className="fill-[#e87a70] text-[#e87a70]" />
            </div>
            <span className="text-[11px] text-center text-[#d84033] leading-tight">Apply for<br/>job</span>
          </div>
          
          <div className="flex flex-col items-center gap-2 z-10 w-1/4">
            <div className="w-8 h-8 rounded-full bg-[#fdf2f1] border border-red-100 flex items-center justify-center text-red-500 bg-white">
              <UserPlus size={14} className="fill-[#e87a70] text-[#e87a70]" />
            </div>
            <span className="text-[11px] text-center text-[#d84033] leading-tight">Create<br/>profile</span>
          </div>
          
          <div className="flex flex-col items-center gap-2 z-10 w-1/4">
            <div className="w-8 h-8 rounded-full bg-[#fdf2f1] border border-red-100 flex items-center justify-center text-red-500 bg-white">
              <Calendar size={14} className="fill-[#e87a70] text-[#e87a70]" />
            </div>
            <span className="text-[11px] text-center text-[#d84033] leading-tight">Schedule<br/>Interview</span>
          </div>
          
          <div className="flex flex-col items-center gap-2 z-10 w-1/4">
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-2xl -mt-1 relative bottom-1">
              🚀
            </div>
            <span className="text-[11px] text-center text-[#d84033] leading-tight mt-1">Get hired</span>
          </div>
        </div>
      </div>

      {/* Login with Apna Promo Card */}
      <div className="bg-gradient-to-b from-[#f0f6ff] to-[#f4faff] rounded-2xl p-6 border border-blue-100 relative overflow-hidden">
        <h3 className="text-brand-blue font-bold text-[20px] mb-4 leading-snug">
          Login with Apna and<br/>experience more!
        </h3>
        
        <ul className="space-y-3 mb-6 relative z-10">
          <li className="flex items-center gap-2 text-[14px] text-brand-blue font-medium">
            <div className="w-4 h-4 rounded-full bg-brand-blue text-white flex items-center justify-center text-[10px]">✓</div>
            Personalised job matches
          </li>
          <li className="flex items-center gap-2 text-[14px] text-brand-blue font-medium">
            <div className="w-4 h-4 rounded-full bg-brand-blue text-white flex items-center justify-center text-[10px]">✓</div>
            Direct connect with HRs
          </li>
          <li className="flex items-center gap-2 text-[14px] text-brand-blue font-medium">
            <div className="w-4 h-4 rounded-full bg-brand-blue text-white flex items-center justify-center text-[10px]">✓</div>
            Latest updates on the job
          </li>
        </ul>

        <div className="relative mx-auto w-[180px] h-[220px] bg-white rounded-t-3xl border-4 border-b-0 border-gray-800 shadow-xl overflow-hidden translate-y-4">
           {/* Mock Phone screen */}
           <div className="w-full h-full bg-gray-50 flex flex-col p-2">
              <div className="h-3 w-1/2 bg-black rounded-b-xl mx-auto mb-2"></div>
              <div className="w-10 h-10 bg-indigo-200 rounded-full mx-auto mb-2 mt-4"></div>
              <div className="w-3/4 h-2 bg-gray-200 rounded mx-auto mb-1"></div>
              <div className="w-1/2 h-2 bg-gray-200 rounded mx-auto mb-4"></div>
              
              <div className="bg-white rounded-lg shadow-sm p-2 mb-2">
                <div className="flex gap-2 mb-2">
                   <div className="w-6 h-6 bg-blue-100 rounded"></div>
                   <div className="flex-1">
                     <div className="w-full h-1.5 bg-gray-200 rounded mb-1"></div>
                     <div className="w-2/3 h-1.5 bg-gray-200 rounded"></div>
                   </div>
                </div>
              </div>
           </div>
        </div>

        <button className="w-full bg-brand-primary text-white font-semibold py-3 rounded-lg relative z-20 hover:bg-teal-700 transition-colors">
          Create profile {'>'}
        </button>
      </div>
    </div>
  );
};

export default SidebarPromo;
