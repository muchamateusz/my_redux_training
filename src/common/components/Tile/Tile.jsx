import React from "react";
import PropTypes from "prop-types";

import "./Tile.less";

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.any
};

const Tile = ({ className, children, ...rest }) => {
  return <div className="tile">{children}</div>;
};

Tile.propTypes = propTypes;

export default Tile;
