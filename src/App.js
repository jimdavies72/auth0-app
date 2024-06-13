import Navbar from './components/navbar/navbar';
import HomePage from './pages/home/homePage';



const App = () => {
  return (
    <div className="app-container">
      <header>
        <Navbar />
      </header>
      <main className="container">
        <HomePage />
      </main>

    </div>
  )
}

export default App;
