import { useState, useEffect } from 'react';

export default function WindowResize(size, objs, arrayId) {
  const [items, setItems] = useState(objs);

  const handleResize = () => {
    if (window.innerWidth < size) {
      setItems(prevItems => prevItems.filter(item => item !== item[3]));
    } else {
      setItems(objs);
    }
  };

  // add event listener for window resize
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

}