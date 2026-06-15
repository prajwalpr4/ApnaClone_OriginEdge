import { useState } from 'react';
import PropTypes from 'prop-types';
import { Bookmark, Share2 } from 'lucide-react';

const ApplyButton = ({ job, isMobile = false }) => {
  const [isSaved, setIsSaved] = useState(job.isSaved || false);

  const toggleSave = () => {
    setIsSaved(!isSaved);
  };

  if (isMobile) {
    return (
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 z-50 flex items-center gap-3 animate-[slideUp_0.3s_ease-out]">
        <button 
          onClick={toggleSave}
          className="p-3 border border-gray-300 rounded-xl text-gray-600 hover:bg-gray-50 focus:outline-none transition-colors"
        >
          <Bookmark size={24} className={isSaved ? "fill-brand-primary text-brand-primary" : ""} />
        </button>
        <button className="flex-1 bg-brand-primary text-white py-3 rounded-xl font-semibold text-base hover:bg-brand-secondary active:scale-95 transition-all focus:ring-4 focus:ring-indigo-100">
          Apply Now
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 sticky top-24">
      <button className="w-full bg-brand-primary text-white py-3 rounded-xl font-semibold text-base hover:bg-brand-secondary active:scale-95 transition-all focus:ring-4 focus:ring-indigo-100 hover:shadow-lg shadow-indigo-200 mb-2">
        Apply Now
      </button>
      
      {job.isEasyApply && (
        <p className="text-center text-xs text-gray-500 mb-4">
          Easy Apply · 2 min
        </p>
      )}

      <div className="flex gap-3">
        <button 
          onClick={toggleSave}
          className="flex-1 flex items-center justify-center gap-2 py-2 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50 font-medium text-sm transition-colors"
        >
          <Bookmark size={18} className={isSaved ? "fill-brand-primary text-brand-primary" : ""} />
          {isSaved ? "Saved" : "Save Job"}
        </button>
        <button className="flex-1 flex items-center justify-center gap-2 py-2 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50 font-medium text-sm transition-colors">
          <Share2 size={18} />
          Share
        </button>
      </div>
    </div>
  );
};

ApplyButton.propTypes = {
  job: PropTypes.object.isRequired,
  isMobile: PropTypes.bool,
};

export default ApplyButton;
