import { Link } from 'react-router-dom';
import { FaFacebook, FaLinkedinIn, FaTwitter, FaInstagram, FaYoutube, FaApple, FaGooglePlay } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full bg-[#f8f9fa] mt-0 border-t border-gray-100">
      <div className="max-w-[1280px] mx-auto px-4 pb-16 pt-12">
        {/* Links, Legal, Resources */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:w-3/4 lg:w-[60%] md:ml-[76px]">
          <div>
            <h3 className="text-[15px] font-bold text-gray-900 mb-5">Links</h3>
            <ul className="space-y-4">
              <li><Link to="#" className="text-[13px] text-[#4b5563] hover:text-brand-primary font-medium">Download Apna App</Link></li>
              <li><Link to="#" className="text-[13px] text-[#4b5563] hover:text-brand-primary font-medium">Free Job Alerts</Link></li>
              <li><Link to="#" className="text-[13px] text-[#4b5563] hover:text-brand-primary font-medium">Careers</Link></li>
              <li><Link to="#" className="text-[13px] text-[#4b5563] hover:text-brand-primary font-medium">Contact Us</Link></li>
              <li><Link to="#" className="text-[13px] text-[#4b5563] hover:text-brand-primary font-medium">Vulnerability Disclosure Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-[15px] font-bold text-gray-900 mb-5">Legal</h3>
            <ul className="space-y-4">
              <li><Link to="#" className="text-[13px] text-[#4b5563] hover:text-brand-primary font-medium">Privacy Policy</Link></li>
              <li><Link to="#" className="text-[13px] text-[#4b5563] hover:text-brand-primary font-medium">User Terms & Conditions</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-[15px] font-bold text-gray-900 mb-5">Resources</h3>
            <ul className="space-y-4">
              <li><Link to="#" className="text-[13px] text-[#4b5563] hover:text-brand-primary font-medium">Blog</Link></li>
              <li><Link to="#" className="text-[13px] text-[#4b5563] hover:text-brand-primary font-medium">Sitemap</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Dark Section */}
      <div className="bg-[#1a0f2e] w-full py-10 text-white">
        <div className="max-w-[1280px] mx-auto px-4 flex flex-col md:flex-row justify-between items-start md:items-center">
          
          {/* Left Side: Social & Copyright */}
          <div className="md:ml-[76px] flex flex-col w-full md:w-auto">
            <div className="flex items-center gap-6 mb-6">
              {/* Logo */}
              <div className="bg-white rounded-2xl w-[72px] h-[72px] flex flex-col items-center justify-center shrink-0">
                <span className="text-[20px] font-bold text-gray-900 tracking-tight leading-none mb-0.5">apna</span>
                <div className="flex h-[3px] w-[34px] mt-1 rounded-full overflow-hidden">
                  <div className="bg-green-500 w-1/3"></div>
                  <div className="bg-yellow-400 w-1/3"></div>
                  <div className="bg-[#1e40af] w-1/3"></div>
                </div>
              </div>
              
              <div>
                <h4 className="font-bold text-[16px] mb-3">Follow us on social media</h4>
                <div className="flex gap-3 text-white">
                  <a href="#" className="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-[#1a0f2e] transition-colors"><FaFacebook size={12} /></a>
                  <a href="#" className="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-[#1a0f2e] transition-colors"><FaLinkedinIn size={12} /></a>
                  <a href="#" className="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-[#1a0f2e] transition-colors"><FaTwitter size={12} /></a>
                  <a href="#" className="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-[#1a0f2e] transition-colors"><FaInstagram size={12} /></a>
                  <a href="#" className="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-[#1a0f2e] transition-colors"><FaYoutube size={12} /></a>
                </div>
              </div>
            </div>
            
            {/* Short border above copyright */}
            <div className="w-full max-w-[500px] border-t border-gray-700/60 pt-3 text-[11px] text-gray-300 flex flex-wrap gap-x-2 gap-y-1 font-medium tracking-wide">
              <span>© {new Date().getFullYear()} Apna | All rights reserved</span>
              <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="#" className="hover:text-white transition-colors">Apna Advantage T&C</Link>
              <Link to="#" className="hover:text-white transition-colors">Rewards T&C</Link>
              <Link to="#" className="hover:text-white transition-colors">AI Prep T&C</Link>
            </div>
          </div>

          {/* Right Side: App Download */}
          <div className="bg-white text-gray-900 rounded-[20px] p-5 flex items-center gap-6 mt-10 md:mt-0 shadow-lg shrink-0">
             <div className="flex-1">
                <h4 className="font-bold text-[16px] mb-1">Apply on the go</h4>
                <p className="text-[12px] text-gray-600 mb-3 font-medium">Get real time job updates on our App</p>
                <div className="flex gap-2">
                  <div className="bg-black text-white rounded-[6px] px-2.5 py-1.5 flex items-center gap-2 cursor-pointer hover:bg-gray-800 transition-colors">
                    <FaApple size={22} className="mb-1" />
                    <span className="text-[8px] leading-[1.1] font-medium">Download on the<br/><span className="text-[13px] font-semibold">App Store</span></span>
                  </div>
                  <div className="bg-black text-white rounded-[6px] px-2.5 py-1.5 flex items-center gap-2 cursor-pointer hover:bg-gray-800 transition-colors">
                    <FaGooglePlay size={18} className="text-gray-200" />
                    <span className="text-[8px] leading-[1.1] font-medium">GET IT ON<br/><span className="text-[13px] font-semibold">Google Play</span></span>
                  </div>
                </div>
             </div>
             <div className="w-[85px] h-[85px] shrink-0 border border-gray-200 rounded-lg p-1 bg-white">
               {/* Realistic QR Code Mockup via inline SVG */}
               <svg viewBox="0 0 100 100" className="w-full h-full text-black">
                 <rect x="0" y="0" width="100" height="100" fill="white" />
                 {/* Top left eye */}
                 <rect x="10" y="10" width="20" height="20" fill="none" stroke="black" strokeWidth="3" />
                 <rect x="15" y="15" width="10" height="10" fill="black" />
                 {/* Top right eye */}
                 <rect x="70" y="10" width="20" height="20" fill="none" stroke="black" strokeWidth="3" />
                 <rect x="75" y="15" width="10" height="10" fill="black" />
                 {/* Bottom left eye */}
                 <rect x="10" y="70" width="20" height="20" fill="none" stroke="black" strokeWidth="3" />
                 <rect x="15" y="75" width="10" height="10" fill="black" />
                 {/* Random blocks */}
                 <rect x="40" y="10" width="10" height="10" fill="black" />
                 <rect x="55" y="20" width="5" height="15" fill="black" />
                 <rect x="40" y="30" width="20" height="5" fill="black" />
                 <rect x="10" y="40" width="15" height="15" fill="black" />
                 <rect x="35" y="45" width="15" height="10" fill="black" />
                 <rect x="60" y="40" width="10" height="20" fill="black" />
                 <rect x="80" y="40" width="10" height="10" fill="black" />
                 <rect x="40" y="60" width="10" height="15" fill="black" />
                 <rect x="55" y="65" width="15" height="10" fill="black" />
                 <rect x="75" y="60" width="15" height="15" fill="black" />
                 <rect x="40" y="80" width="20" height="10" fill="black" />
                 <rect x="70" y="85" width="20" height="5" fill="black" />
               </svg>
             </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
