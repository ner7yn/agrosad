import React, { useEffect, useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme'; // Укажите правильный путь к вашей теме
import Header from './components/Header';
import Table from './components/Table';
import Footer from './components/Footer';

function App() {
  const [filter, setFilter] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Проверяем, существуют ли уже данные в localStorage
    const existingData = JSON.parse(localStorage.getItem('testData'));
    if (!existingData) {
      // Если данных нет, создаем тестовый массив
      const testData = [
        { id: 1, fio: 'Иванов Иван', company: 'Компания А', group: 'Группа 1', presence: true },
        { id: 2, fio: 'Петров Петр', company: 'Компания Б', group: 'Группа 2', presence: false },
      ];
      // Записываем тестовый массив в localStorage
      localStorage.setItem('testData', JSON.stringify(testData));
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Header setSearchQuery={setSearchQuery} />
      <Table filter={filter} searchQuery={searchQuery} />
      <Footer setFilter={setFilter} />
    </ThemeProvider>
  );
}

export default App;