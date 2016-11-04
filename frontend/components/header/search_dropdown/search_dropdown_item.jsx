import React from 'react';

const SearchDropdownItem = ({region}) => (
  <option value={region.id}>{region.name}, {region.state}</option>
);

export default SearchDropdownItem;
