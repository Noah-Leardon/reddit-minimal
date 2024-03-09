import './App.css';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar.js'

function App() {
  return (
    <div>
      <div data-testid='App' className="App">
        <Header />
        <SearchBar />
      </div>
    </div>
   
  );
}

export default App;
