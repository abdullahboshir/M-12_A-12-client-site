import { useEffect, useState } from 'react';
import './App.css';
import AllRoutes from './Components/AllRoutes';
import { AuthContextProvider } from './Components/AuthContextProvider';
import Loading from './Components/Shared/Loading/Loading';

function App() {

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 800)
  }, [])

  return (
    <div className="App">
          <AllRoutes />
    </div>
  );
}

export default App;
