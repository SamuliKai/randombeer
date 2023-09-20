import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

const URL = "https://random-data-api.com/api/v2/beers"

function App() {
  const [brand,setBrand] = useState ('')
  const [name,setName] = useState ('')
  const [style,setStyle] = useState ('')
  const [alcohol, setAlcohol] = useState('')

  useEffect(() => {
    axios.get(URL)
    .then((response)=> {
      //console.log(response.data)
      setBrand(response.data.brand)
      setName(response.data.name)
      setStyle(response.data.style)
      setAlcohol(response.data.alcohol)
    }).catch((error) => {
      alert(error)
    })
  }, [])
  

  return (
    <div>
      <h3>Randomly selected beer</h3>
      <p>Brand: {brand}</p>
      <p>Name: {name}</p>
      <p>Style: {style}</p>
      <p>Alcohol: {alcohol}</p>
    </div>
  );
}

export default App;
