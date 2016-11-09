import React from 'react';
import NeighborhoodResultItem from './neighborhood_result_item';
import SearchResultsMap from './search_results_map';
import SearchFilters from './search_filters';

const Region = ({region, router, query}) => {
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
          <SearchFilters region={region} router={router} query={query}/>
          <h3>Search results for {region.name}, {region.state}:</h3>
          <div className="region-results-content">
            <div className="neighborhood-results">
              {neighborhoods}
            </div>
            <SearchResultsMap region={region} router={router}/>
          </div>
        </div>
    );
  } else {
    return (<div></div>);
  }
};

export default Region;
