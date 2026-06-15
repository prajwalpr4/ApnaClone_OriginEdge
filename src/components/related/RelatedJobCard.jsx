import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { MapPin, Wallet, Building2, Clock, Briefcase, MessageCircle, ChevronRight } from 'lucide-react';

const RelatedJobCard = ({ job }) => {
  const companyInitial = job.company.name.charAt(0).toUpperCase();

  return (
    <Link to={`/jobs/${job.id}`} className="block w-full bg-white rounded-2xl border border-gray-200 p-4 cursor-pointer hover:shadow-md transition-shadow duration-200 mb-3 group">
      <div className="flex justify-between items-start">
        <div className="flex items-start gap-4">
          <div className="w-[45px] h-[45px] rounded-md border border-gray-100 bg-gray-50 flex items-center justify-center flex-shrink-0 text-gray-500 font-bold text-sm overflow-hidden">
            {job.company.logo ? (
              <img src={job.company.logo} alt={job.company.name} className="w-full h-full object-cover" />
            ) : (
              companyInitial
            )}
          </div>
          <div>
            <h4 className="text-[16px] font-bold text-gray-900 leading-tight mb-0.5 group-hover:text-brand-primary transition-colors">{job.title}</h4>
            <p className="text-[13px] text-gray-500 mb-2">{job.company.name}</p>
            
            <div className="flex items-center gap-1.5 text-[13px] text-gray-500 mb-1">
              <MapPin size={14} className="text-gray-400" />
              <span className="truncate">{job.location}</span>
            </div>
            
            <div className="flex items-center gap-1.5 text-[13px] text-gray-700 font-medium mb-3">
              <Wallet size={14} className="text-gray-400" />
              <span>₹{job.salary.min.toLocaleString()} - ₹{job.salary.max.toLocaleString()}</span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <div className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded text-[12px] text-gray-600 font-medium">
                <Building2 size={12} className="text-gray-500" />
                <span>Work from Office</span>
              </div>
              <div className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded text-[12px] text-gray-600 font-medium">
                <Clock size={12} className="text-gray-500" />
                <span>{job.jobType}</span>
              </div>
              <div className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded text-[12px] text-gray-600 font-medium">
                <Briefcase size={12} className="text-gray-500" />
                <span>Min. {job.experience.min} year</span>
              </div>
              <div className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded text-[12px] text-gray-600 font-medium hidden md:flex">
                <MessageCircle size={12} className="text-gray-500" />
                <span>Good (Intermediate / Advanced) English</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-2">
          <ChevronRight size={20} className="text-brand-primary" />
        </div>
      </div>
    </Link>
  );
};

RelatedJobCard.propTypes = {
  job: PropTypes.object.isRequired,
};

export default RelatedJobCard;
