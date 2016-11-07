import React from 'react';
import NeighborhoodResultItem from './neighborhood_result_item';

const Region = ({region}) => {
  const containsNeighborhoodImage = (neighborhoodId) => {
    if (region.images) {
      let allImages = region.images.filter(image => (image.neighborhood_id === neighborhoodId));
      if (allImages.length > 0) {
        return allImages;
      } else {
        return null;
      }
    } else {
      return null;
    }
  };

  if (region.neighborhoods) {
    let neighborhoods = region.neighborhoods.map((neighborhood, idx) => {
      let image = containsNeighborhoodImage(neighborhood.id);

      let imageItem = <div></div>;
      if (image) {
        let style = {
          backgroundImage: 'url(' + image[0].url + ')'
        };
        imageItem = <div style={style}></div>;
      }

      return (
        <div className="neighborhood-result-item" key={idx}>
          {imageItem}
          <NeighborhoodResultItem neighborhood={neighborhood}/>
        </div>
      );
    });

    return (
        <div className="region-results">
          <h3>Search results for {region.name}, {region.state}:</h3>
          <div className="region-results-content">
            <div className="neighborhood-results">
              {neighborhoods}
            </div>
            <div className="region-map">This is the region map.</div>
          </div>
        </div>
    );
  } else {
    return (<div></div>);
  }
};

export default Region;
