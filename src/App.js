import logo from './logo.svg';
import './App.css';
import Header from './component/Layout/Header';
import Meals from './component/Meals/Meals';

function App() {
  return (
    <div >
    <Header/>
    <main>
      <Meals/>
    </main>
    </div>
  );
}

export default App;
