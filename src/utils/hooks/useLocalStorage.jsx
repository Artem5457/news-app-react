import { useState, useEffect } from 'react';

export function useLocalStorage(key, initialValue) {
  const [ storedValue, setStoredValue ] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error('Ошибка при чтении localStorage', error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      if (storedValue !== undefined) {
        window.localStorage.setItem(key, JSON.stringify(storedValue));
      }
    } catch (error) {
      console.error('Ошибка при записи в localStorage', error);
    }
  }, [ key, storedValue ]);

  return [ storedValue, setStoredValue ];
}
