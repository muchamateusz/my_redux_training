import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./Tile.less";

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.any
};

const Tile = ({ className, children, ...rest }) => {
  return (
    <div className={classNames("tile", className)} {...rest}>
      {children}
    </div>
  );
};

Tile.propTypes = propTypes;

export default Tile;
