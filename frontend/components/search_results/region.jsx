import React from 'react';
import NeighborhoodResultItem from './neighborhood_result_item';

const Region = ({region}) => {
  if (region.neighborhoods) {
    let neighborhoods = region.neighborhoods.map((neighborhood, idx) => (
      <NeighborhoodResultItem neighborhood={neighborhood} key={idx}/>
    ));

    return (
      <div>
        {neighborhoods}
      </div>
    );
  } else {
    return (<div></div>);
  }
};

export default Region;
