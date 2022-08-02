import './App.css';
import AllRoutes from './Components/AllRoutes';
import { AuthContextProvider } from './Components/AuthContextProvider';
import Loading from './Components/Shared/Loading/Loading';

function App() {
  return (
    <div className="App">
    <AuthContextProvider>
  <AllRoutes/>
    </AuthContextProvider>
    </div>
  );
}

export default App;
