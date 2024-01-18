import './App.css';

import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';



function App() {
  return (
    <div className="wrapper clear">
      
        <Drawer />
      <Header />
      <div className="content p-40 ">
        <div className='d-flex align-center mb-40 justify-between' >
        <h1>All sneakers</h1>
        <div className='search-block d-flex'>
          <img className='search-button'src="/img/search.svg" alt="Search" />
          <input placeholder="Search..." />
        </div>
        </div>

        <div className='sneakers d-flex '>
          <Card/>
          <Card/>
          <Card/>
          <Card/>

      </div>
      </div>
      </div>
       
  );
}

export default App;

