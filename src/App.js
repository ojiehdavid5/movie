import './App.css';
import  useState from 'react';
import Movie from "./Movie"

function App() {
  const[change, setChange]=useState();

  return (
    <div className="App">
      <Movie
      change={change}
      setChange={setChange}
      
      />
      


    </div>
  );
}

export default App;
