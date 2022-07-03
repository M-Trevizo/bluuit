import './App.css';
import { NavBar } from '../components/navBar/NavBar';
import { Post } from '../components/posts/Post';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Post />
      <header className="App-header">
        <p>This will be Bluuit</p>
      </header>
    </div>
  );
}

export default App;
