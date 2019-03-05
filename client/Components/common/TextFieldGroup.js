import React from 'react';
import PropTypes from 'prop-types';

const TextFieldGroup = ({
  placeholder,
  onChange,
  pattern,
  value,
  name,
  title,
  type
}) => (
      <div>
          <input
                type={type}
                name={name}
                placeholder={placeholder}
                pattern={pattern}
                title={title}
                onChange={onChange}
                value={value}
              />
                 </div>
);
TextFieldGroup.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  title: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};
TextFieldGroup.defaultProps = {
  type: 'text'
};
export default TextFieldGroup;
