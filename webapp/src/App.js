import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  const [foodItem, setFoodItem] = useState("Nothing")

  var getFoodItem = () => {
    axios.get("http://localhost/menu/")
      .then((result) => {
        setFoodItem(result.data)
        console.log(result);
      })
  }

  const buttonStyle = {
    backgroundColor: 'orange',
    padding: '10px',
    borderRadius: '10px',
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={getFoodItem}
          style={buttonStyle}
        >
          <h2>What should I eat? Press here!</h2>
        </button>
        <p>
          {foodItem}
        </p>
      </header>
    </div>
  );
}

export default App;
