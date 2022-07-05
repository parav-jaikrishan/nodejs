import './App.css';
import { useState } from "react";
import Header from './components/Header/header';
import Menu from './components/Menu/menu';

export default function App() {
  const [data, setData] = useState([]);
  const baseLink = "https://dweets-api.herokuapp.com";

  fetch(`${baseLink}/dweet`)
    .then(res => res.json())
    .then(result => setData(result))

  return (
    <div className="App">
      <Header/>
      <div class="bottom-section">
        <Menu/>
      </div>
    </div>
  );
}