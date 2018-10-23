import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./Workspace.less";

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.any
};

const Workspace = ({ className, children, ...rest }) => {
  return (
    <div className={classNames("workspace", className)} {...rest}>
      {children}
    </div>
  );
};

Workspace.propTypes = propTypes;

export default Workspace;
