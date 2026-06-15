import PropTypes from 'prop-types';

const JobBadges = ({ badges }) => {
  if (!badges || badges.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {badges.map((badge, index) => {
        let bgColor = 'bg-gray-100';
        let textColor = 'text-gray-700';

        if (badge.includes('Actively Hiring')) {
          bgColor = 'bg-green-50';
          textColor = 'text-green-700';
        } else if (badge.includes('Urgently Hiring')) {
          bgColor = 'bg-yellow-50';
          textColor = 'text-yellow-700';
        } else if (badge.includes('Walk-in')) {
          bgColor = 'bg-blue-50';
          textColor = 'text-blue-700';
        }

        return (
          <span
            key={index}
            className={`px-3 py-1 rounded-full text-xs font-medium border border-transparent ${bgColor} ${textColor}`}
          >
            {badge}
          </span>
        );
      })}
    </div>
  );
};

JobBadges.propTypes = {
  badges: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default JobBadges;
