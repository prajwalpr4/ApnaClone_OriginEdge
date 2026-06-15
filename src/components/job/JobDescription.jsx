import { useState } from 'react';
import PropTypes from 'prop-types';
import { ChevronDown, ChevronUp } from 'lucide-react';

const JobDescription = ({ job }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-gray-200 mb-6 overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 focus:outline-none"
      >
        <h2 className="text-[18px] font-bold text-gray-900">Job Description</h2>
        {isOpen ? <ChevronUp size={20} className="text-gray-500" /> : <ChevronDown size={20} className="text-gray-500" />}
      </button>
      
      {isOpen && (
        <div className="px-5 pb-5 border-t border-gray-100 pt-4">
          <div className="text-[14px] text-gray-600 leading-relaxed whitespace-pre-wrap">
            {job.description}
          </div>
          
          <div className="mt-6">
            <h3 className="text-[15px] font-semibold text-gray-900 mb-3">Skills Required</h3>
            <div className="flex flex-wrap gap-2">
              {job.skills.map((skill, index) => (
                <span 
                  key={index}
                  className="bg-gray-100 text-gray-700 border border-gray-200 rounded-full px-3 py-1 text-xs font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

JobDescription.propTypes = {
  job: PropTypes.object.isRequired,
};

export default JobDescription;
