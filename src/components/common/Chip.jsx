import PropTypes from 'prop-types';

const Chip = ({ children, className = '', ...props }) => {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};

Chip.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Chip;
