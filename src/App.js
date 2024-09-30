
import {useState} from 'react';
import Navbar from './components/navbar/navbar';
import HomePage from './pages/home/homePage';



const App = () => {
  const [auth, setAuth] = useState(null);

  return (
    <div className="app-container">
      <header>
        <Navbar />
      </header>
      <main className="container">
        <HomePage
          auth={auth} 
        />
      </main>

    </div>
  )
}

export default App;
