import React from "react";
import PropTypes from "prop-types";
import './Workspace.less';

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
};

const Workspace = ({ className, children, ...rest }) => {
  return (
    <div className="workspace" {...rest}>
      {children}
    </div>
  );
};

Workspace.propTypes = propTypes;

export default Workspace;
