import React, { useState } from 'react';
import CoffeeCard from './components/CoffeeCard';
import SearchForm from './components/SearchForm';
import './styles/App.css';

const App = () => {
  const [coffees, setCoffees] = useState([]);

  const handleSearch = async (query) => {
    const response = await fetch('/api/search?query=${query}');
    const data = await response.json();
    setCoffees(data.results);
  };

  return (
    <div className="app">
      <h1>Coffee Finder</h1>
      <SearchForm onSearch={handleSearch} />
      <div className="coffee-list">
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </div>
    </div>
  );
};

export default App;