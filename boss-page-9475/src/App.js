import logo from './logo.svg';
import './App.css';
import Footer from './pages/Footer';
import AllRoutes from './pages/AllRoutes';
import Navbar from './pages/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
