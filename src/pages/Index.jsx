import React, { useState, useEffect } from 'react';
import ItemCard from '../components/ItemCard';
import ItemForm from '../components/ItemForm';
import { getAllItems } from '../utils/database';

const Index = () => {
  const [items, setItems] = useState([]);

  const loadItems = () => {
    const loadedItems = getAllItems();
    setItems(loadedItems);
  };

  useEffect(() => {
    loadItems();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Perdidos e Achados</h1>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Adicionar Novo Item</h2>
          <ItemForm onItemAdded={loadItems} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;