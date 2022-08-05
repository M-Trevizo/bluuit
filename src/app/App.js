import './App.css';
import { NavBar } from '../components/navBar/NavBar';
import { Posts } from '../components/posts/Posts';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Posts />
      <header className="App-header">
        <p>This will be Bluuit</p>
      </header>
    </div>
  );
}

export default App;
