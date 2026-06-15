import PropTypes from 'prop-types';
import { IndianRupee, Briefcase, Clock, Calendar } from 'lucide-react';

const JobHighlights = ({ job }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {/* Salary Card */}
      <div className="bg-white border border-gray-200 rounded-xl p-3 flex flex-col gap-1 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center gap-2 text-gray-500 mb-1">
          <div className="bg-indigo-50 p-1.5 rounded-lg text-brand-primary">
            <IndianRupee size={16} />
          </div>
          <span className="text-xs font-medium uppercase tracking-wider">Salary</span>
        </div>
        <span className="text-sm font-semibold text-gray-900">
          ₹{job.salary.min.toLocaleString()} - ₹{job.salary.max.toLocaleString()}/{job.salary.period}
        </span>
      </div>

      {/* Experience Card */}
      <div className="bg-white border border-gray-200 rounded-xl p-3 flex flex-col gap-1 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center gap-2 text-gray-500 mb-1">
          <div className="bg-indigo-50 p-1.5 rounded-lg text-brand-primary">
            <Briefcase size={16} />
          </div>
          <span className="text-xs font-medium uppercase tracking-wider">Experience</span>
        </div>
        <span className="text-sm font-semibold text-gray-900">
          {job.experience.min} - {job.experience.max} {job.experience.unit}
        </span>
      </div>

      {/* Job Type Card */}
      <div className="bg-white border border-gray-200 rounded-xl p-3 flex flex-col gap-1 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center gap-2 text-gray-500 mb-1">
          <div className="bg-indigo-50 p-1.5 rounded-lg text-brand-primary">
            <Calendar size={16} />
          </div>
          <span className="text-xs font-medium uppercase tracking-wider">Job Type</span>
        </div>
        <span className="text-sm font-semibold text-gray-900">{job.jobType}</span>
      </div>

      {/* Shift Card */}
      <div className="bg-white border border-gray-200 rounded-xl p-3 flex flex-col gap-1 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center gap-2 text-gray-500 mb-1">
          <div className="bg-indigo-50 p-1.5 rounded-lg text-brand-primary">
            <Clock size={16} />
          </div>
          <span className="text-xs font-medium uppercase tracking-wider">Shift</span>
        </div>
        <span className="text-sm font-semibold text-gray-900">{job.shift}</span>
      </div>
    </div>
  );
};

JobHighlights.propTypes = {
  job: PropTypes.object.isRequired,
};

export default JobHighlights;
