import './App.css';
import { useState } from "react";
import Header from './components/Header/header';
import Dweets from './components/Dweets/dweets';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
export default function App() {
  const [data, setData] = useState([]);
  const baseLink = "https://dweets-api.herokuapp.com";

  fetch(`${baseLink}/dweet`)
    .then(res => res.json())
    .then(result => setData(result))

  function deleteFromId(id) {
    const deletedID = { id };
    fetch(`${baseLink}/dweet/${id}`, {
      method: 'DELETE',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(deletedID)
    }).then(() => console.log(`deleted dweet`))
  }
  return (
    <Router>
      <div className="App">
        <Header/>
        <div className='bottom-section'>
          <Switch>
            <Route exact patch="/">
              <Dweets dweets={data} handleDelete={i => deleteFromId(i)}/>
            </Route>
            <Route path="/update/:id">
              
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}