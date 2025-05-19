import type { FunctionDeclaration } from '@babel/types';
import { useEffect } from 'react';

const sleep = (ms: number | undefined) => new Promise(resolve => setTimeout(resolve, ms));

function App() {
  useEffect(() => {
    function handleLoad(e) {
      console.log("page fully loaded");
    }
    window.addEventListener('load', handleLoad);
    return () => window.removeEventListener('load', handleLoad);
  }, []);
}

export default App







