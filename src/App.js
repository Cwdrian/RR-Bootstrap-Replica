import './App.css';
import NavBar from './components/NavBar'
import Background from './components/Background'
import StoreListings from './components/Stores'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Background />\
      <StoreListings />
    </div>
  );
}

export default App;
