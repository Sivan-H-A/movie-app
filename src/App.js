import axios from 'axios';
import { useEffect, useState } from 'react';
import ActorPage from "./pages/ActorPage/ActorPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import ActorModel from './model/ActorModel';
import './App.css';

function App() {
  const [actors, setActors] = useState(null);

  useEffect(()=>{
    axios.get("actors.json").then(res=>{
        const newActors = res.data.map(plainActor => new ActorModel(plainActor));
        setActors(newActors);
    });
  }, []);

  return (
    <div className="App">
      <ActorPage actors={actors}/>
    </div>
  );
}

export default App;
