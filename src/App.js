
import './App.css';
import About from './components/about/about';
import Education from './components/education/education';
import Header from './components/header/header';
import Portfolio from './components/portfolio/portfolio';
import Profile from './components/profile/profile';
import Stack from './components/stack/stack';

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
          <Stack />
          <Portfolio />
          <Education />
        </div>
      </div>
    </div>
  );
}

export default App;
