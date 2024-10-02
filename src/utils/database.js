import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';

// Função para inicializar a base de dados com dados padrão
const initializeDatabase = () => {
  const defaultItems = [
    {
      id: 1,
      name: "Carteira marrom",
      description: "Carteira de couro marrom encontrada no parque central.",
      image: "https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
      status: "found",
      date: "2023-05-15"
    },
    {
      id: 2,
      name: "Celular iPhone",
      description: "iPhone 12 perdido na praça principal. Capa azul.",
      image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2329&q=80",
      status: "lost",
      date: "2023-05-18"
    },
    // ... outros itens padrão ...
  ];

  if (!localStorage.getItem('lostAndFoundItems')) {
    localStorage.setItem('lostAndFoundItems', JSON.stringify(defaultItems));
  }
};

// Função para obter todos os itens
export const getAllItems = () => {
  initializeDatabase();
  return JSON.parse(localStorage.getItem('lostAndFoundItems'));
};

// Função para formatar o dia da semana em português
const formatDayOfWeek = (date) => {
  const daysOfWeek = {
    'Monday': 'segunda-feira',
    'Tuesday': 'terça-feira',
    'Wednesday': 'quarta-feira',
    'Thursday': 'quinta-feira',
    'Friday': 'sexta-feira',
    'Saturday': 'sabado',
    'Sunday': 'domingo'
  };
  const dayOfWeek = format(date, 'EEEE', { locale: ptBR });
  return daysOfWeek[dayOfWeek] || dayOfWeek;
};

// Função para adicionar um novo item
export const addItem = (item) => {
  const items = getAllItems();
  const newDate = new Date();
  const formattedDate = format(newDate, "yyyy-MM-dd", { locale: ptBR });
  const dayOfWeek = formatDayOfWeek(newDate);
  const newItem = {
    ...item,
    id: Date.now(),
    date: `${formattedDate} em ${dayOfWeek}`
  };
  items.push(newItem);
  localStorage.setItem('lostAndFoundItems', JSON.stringify(items));
  return newItem;
};

// Função para atualizar um item existente
export const updateItem = (updatedItem) => {
  const items = getAllItems();
  const index = items.findIndex(item => item.id === updatedItem.id);
  if (index !== -1) {
    items[index] = updatedItem;
    localStorage.setItem('lostAndFoundItems', JSON.stringify(items));
    return true;
  }
  return false;
};

// Função para remover um item
export const removeItem = (id) => {
  const items = getAllItems();
  const filteredItems = items.filter(item => item.id !== id);
  localStorage.setItem('lostAndFoundItems', JSON.stringify(filteredItems));
};