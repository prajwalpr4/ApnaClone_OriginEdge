import PropTypes from 'prop-types';
import { MapPin, Wallet, Building2, Clock, Briefcase, MessageCircle, AlertCircle } from 'lucide-react';

const JobHeader = ({ job }) => {
  return (
    <div className="bg-white rounded-2xl p-4 md:p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)] mb-6">
      <div className="flex items-start gap-4 mb-4">
        {/* Company Logo */}
        <div className="w-[60px] h-[60px] rounded-lg border border-gray-100 flex items-center justify-center flex-shrink-0 bg-blue-700 text-white font-bold overflow-hidden shadow-sm">
          {job.company.logo ? (
            <img src={job.company.logo} alt={job.company.name} className="w-full h-full object-cover" />
          ) : (
            <span className="text-[10px] text-center leading-tight px-1">TETRA EDGE INFRA</span>
          )}
        </div>

        <div className="flex-1">
          <h1 className="text-[22px] font-bold text-gray-900 mb-1">{job.title}</h1>
          <p className="text-[15px] text-gray-600 mb-4">{job.company.name}</p>
          
          <div className="flex flex-col gap-2 mb-4">
            <div className="flex items-center gap-2 text-[15px] text-gray-500">
              <MapPin size={18} className="text-gray-400" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center gap-2 text-[15px] text-gray-500">
              <Wallet size={18} className="text-gray-400" />
              <span>₹{job.salary.min.toLocaleString()} - ₹{job.salary.max.toLocaleString()} {job.salary.period}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Salary Details Box */}
      <div className="bg-[#f8f9fa] rounded-xl p-4 flex flex-col md:flex-row gap-8 mb-4 border border-gray-100">
        <div className="flex-1">
          <p className="text-[13px] text-gray-500 mb-1 font-medium">Fixed</p>
          <p className="text-[15px] font-semibold text-gray-800">₹{job.salary.min.toLocaleString()} - ₹{job.salary.max.toLocaleString()}</p>
        </div>
        <div className="flex-1">
          <p className="text-[13px] text-gray-500 mb-1 font-medium">Earning Potential</p>
          <p className="text-[15px] font-semibold text-gray-800">₹{job.salary.max.toLocaleString()}</p>
        </div>
      </div>

      {/* Tags Row */}
      <div className="flex flex-wrap gap-2 mb-6">
        <div className="flex items-center gap-1.5 bg-gray-100/80 px-2.5 py-1.5 rounded-md text-[13px] text-gray-600 font-medium border border-gray-200/60">
          <Building2 size={14} className="text-gray-500" />
          <span>Work from Office</span>
        </div>
        <div className="flex items-center gap-1.5 bg-gray-100/80 px-2.5 py-1.5 rounded-md text-[13px] text-gray-600 font-medium border border-gray-200/60">
          <Clock size={14} className="text-gray-500" />
          <span>{job.jobType}</span>
        </div>
        <div className="flex items-center gap-1.5 bg-gray-100/80 px-2.5 py-1.5 rounded-md text-[13px] text-gray-600 font-medium border border-gray-200/60">
          <Briefcase size={14} className="text-gray-500" />
          <span>Min. {job.experience.min} year</span>
        </div>
        <div className="flex items-center gap-1.5 bg-gray-100/80 px-2.5 py-1.5 rounded-md text-[13px] text-gray-600 font-medium border border-gray-200/60">
          <MessageCircle size={14} className="text-gray-500" />
          <span>Good (Intermediate / Advanced) English</span>
        </div>
      </div>

      {/* Expired Banner */}
      <div className="bg-[#fef2f2] rounded-xl p-4 flex items-start gap-3 border border-red-100">
        <div className="bg-brand-red rounded-full p-1 mt-0.5">
          <AlertCircle size={14} className="text-white fill-brand-red" />
        </div>
        <div>
          <h4 className="text-[16px] font-bold text-gray-900 mb-1">This job has expired</h4>
          <p className="text-[14px] text-gray-500">They are no longer accepting applications</p>
        </div>
      </div>
    </div>
  );
};

JobHeader.propTypes = {
  job: PropTypes.object.isRequired,
};

export default JobHeader;
