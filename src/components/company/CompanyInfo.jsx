import { useState } from 'react';
import PropTypes from 'prop-types';
import SectionTitle from '../common/SectionTitle';
import { ExternalLink } from 'lucide-react';

const CompanyInfo = ({ company }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const companyInitial = company.name.charAt(0).toUpperCase();

  return (
    <div className="bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-gray-200" id="company">
      <SectionTitle title="About Company" className="mb-4" />
      
      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 rounded-xl border border-gray-100 bg-white flex items-center justify-center shadow-sm flex-shrink-0 text-brand-primary text-2xl font-bold">
          {company.logo ? (
            <img src={company.logo} alt={company.name} className="w-full h-full object-contain rounded-xl p-1" />
          ) : (
            companyInitial
          )}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{company.name}</h3>
          <p className="text-sm text-gray-500">{company.industry}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
        <div>
          <p className="text-gray-500 mb-1">Company Size</p>
          <p className="font-medium text-gray-900">{company.size}</p>
        </div>
        <div>
          <p className="text-gray-500 mb-1">Founded</p>
          <p className="font-medium text-gray-900">{company.founded}</p>
        </div>
      </div>

      <div 
        className={`text-sm text-gray-600 leading-relaxed overflow-hidden transition-all duration-300 ${
          isExpanded ? 'max-h-[1000px]' : 'max-h-20 relative'
        }`}
      >
        <p>{company.about}</p>
        {!isExpanded && (
          <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white to-transparent" />
        )}
      </div>
      
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="text-brand-primary font-semibold text-sm mt-2 mb-6 hover:underline focus:outline-none"
      >
        {isExpanded ? 'Read Less' : 'Read More'}
      </button>

      <div className="pt-4 border-t border-gray-100">
        <a href="#" className="flex items-center justify-between text-brand-primary font-semibold text-sm hover:text-brand-secondary transition-colors group">
          <span>View all jobs at {company.name}</span>
          <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  );
};

CompanyInfo.propTypes = {
  company: PropTypes.object.isRequired,
};

export default CompanyInfo;
