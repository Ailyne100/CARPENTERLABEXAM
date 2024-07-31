import React from 'react';

const CoffeeCard = ({ coffee }) => {
  return (
    <div className="coffee-card">
      <h2>{coffee.name}</h2>
      <p>{coffee.description}</p>
      <img src={coffee.image} alt={coffee.name} />
    </div>
  );
};

export default CoffeeCard;