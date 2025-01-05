import React from 'react';

function Filters({ filters, setFilters }) {
  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="mb-4">
      <select name="region" onChange={handleFilterChange} className="mr-2 p-2 border border-gray-300">
        <option value="">All Regions</option>
        <option value="Eastern">Eastern</option>
        <option value="Central">Central</option>
        <option value="Western">Western</option>
        <option value="Mid-Western">Mid-Western</option>
      </select>
      <select name="type" onChange={handleFilterChange} className="mr-2 p-2 border border-gray-300">
        <option value="">All Types</option>
        <option value="Trekking">Trekking</option>
        <option value="Cultural">Cultural</option>
        <option value="Adventure">Adventure</option>
        <option value="Historical">Historical</option>
      </select>
      <select name="rating" onChange={handleFilterChange} className="mr-2 p-2 border border-gray-300">
        <option value="">All Ratings</option>
        <option value="5">5 Stars</option>
        <option value="4.5">4.5 Stars</option>
        <option value="4">4 Stars</option>
      </select>
    </div>
  );
}

export default Filters;
