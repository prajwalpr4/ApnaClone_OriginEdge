const Divider = ({ className = '' }) => {
  return <hr className={`border-gray-200 my-6 ${className}`} />;
};

import PropTypes from 'prop-types';
Divider.propTypes = {
  className: PropTypes.string,
};

export default Divider;
