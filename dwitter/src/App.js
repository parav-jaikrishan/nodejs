import './App.css';
import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Header from './components/Header/header';
import Dweets from './components/Dweets/dweets';
import CreateButton from './components/CreateButton/createbtn';
import Create from './components/Create/create';
import Update from './components/Update/update';

export default function App() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const baseLink = "https://dweets-api.herokuapp.com";

  fetch(`${baseLink}/dweet`)
    .then(res => res.json())
    .then(result => setData(result))

  const deleteFromId = id => {
    const deletedID = { id };
    fetch(`${baseLink}/dweet/${id}`, {
      method: 'DELETE',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(deletedID)
    })
  }

  const updateFromId = (e, id) => {
    e.preventDefault();
    const author = e.target[0].value;
    const dweet = e.target[1].value;
    const reqBody = { author, dweet };
    fetch(`${baseLink}/dweet/${id}/update`, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reqBody)
    }).then(() => navigate("/", {replace: true}));
  }

  const createDweet = e => {
    e.preventDefault();
    const username = e.target[0].value;
    const dweet = e.target[1].value;
    const reqBody = { username, dweet };
    fetch(`${baseLink}/dweet/create`, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reqBody)
    }).then(() => navigate("/", {replace: true}));
  }

  return (
      <div className="App">
        <Header/>
        <div className='bottom-section'>
          <Routes>
            <Route path="/update/:id" element={<Update dweets={data} handleUpdate={(e, i) => updateFromId(e, i)}/>}/>              
            <Route path="/create" element={<Create handleCreate={e => createDweet(e)}/>}/>
            <Route exact path="/" element={<><Dweets dweets={data} handleDelete={i => deleteFromId(i)}/><CreateButton/></>}/>
          </Routes>
        </div>
      </div>
  );
}