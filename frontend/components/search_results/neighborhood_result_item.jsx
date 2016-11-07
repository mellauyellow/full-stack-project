import React from 'react';
import { Link } from 'react-router';

const NeighborhoodResultItem = ({neighborhood}) => {
  let path = `neighborhood/${neighborhood.id}`;

  return (
    <div className="neighborhood-result-item">
      <img></img>
      <Link to={path}>
        <h3>{neighborhood.name}</h3>
      </Link>
    </div>
  );
};

export default NeighborhoodResultItem;
