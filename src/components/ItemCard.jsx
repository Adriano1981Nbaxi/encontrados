import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ItemCard = ({ item }) => {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-xl mb-2">{item.name}</CardTitle>
        <p className="text-gray-600 mb-2">{item.description}</p>
        <div className="flex justify-between items-center">
          <Badge variant={item.status === 'lost' ? 'destructive' : 'success'}>
            {item.status === 'lost' ? 'Perdido' : 'Achado'}
          </Badge>
          <span className="text-sm text-gray-500">{item.date}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default ItemCard;