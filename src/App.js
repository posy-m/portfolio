
import './App.css';
import About from './components/about/about';
import Header from './components/header/header';
import Profile from './components/profile/profile';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='container'>
        <div className='profile'>
          <Profile />
        </div>
        <div className='contents'>
          <About />

        </div>
      </div>
    </div>
  );
}

export default App;
