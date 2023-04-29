import { useState } from 'react';
import './App.scss';
import { Header } from './Components/Header/Header';
import { Intro } from './Components/Intro/Intro';
import { Footer } from './Components/Footer/Footer';

function teste(value: any) {
  console.log(value);
}


function App() {
  const [formData, setFormData] = useState({q1: false, });

  function handleChange(event: any) {
    const { name, checked } = event.target;
    setFormData({
      ...formData,
      [name]: checked
    });
  };

  console.log(formData.q1)

  return (
    <div>
      <form action="">
        <div>
          <label htmlFor="q1">1. Você está satisfeito com a sua vida?</label>
          <input type="checkbox"  onClick={handleChange} name="q1" checked={formData.q1} />
        </div>
      </form>
    </div>
  );
}

export default App;
