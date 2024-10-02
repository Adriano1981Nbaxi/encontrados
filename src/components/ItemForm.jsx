import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { addItem } from '../utils/database';

const ItemForm = ({ onItemAdded }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [status, setStatus] = useState('lost');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      name,
      description,
      image,
      status
    };
    addItem(newItem);
    onItemAdded();
    // Reset form
    setName('');
    setDescription('');
    setImage('');
    setStatus('lost');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name">Nome do Item</Label>
        <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <Label htmlFor="description">Descrição</Label>
        <Textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} required />
      </div>
      <div>
        <Label htmlFor="image">URL da Imagem</Label>
        <Input id="image" value={image} onChange={(e) => setImage(e.target.value)} required />
      </div>
      <RadioGroup value={status} onValueChange={setStatus}>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="lost" id="lost" />
          <Label htmlFor="lost">Perdido</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="found" id="found" />
          <Label htmlFor="found">Encontrado</Label>
        </div>
      </RadioGroup>
      <Button type="submit">Adicionar Item</Button>
    </form>
  );
};

export default ItemForm;