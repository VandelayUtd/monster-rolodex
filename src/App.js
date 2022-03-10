import React, { useState, useEffect } from 'react';
import { CardList } from './components/card-list/card-list';
import { SearchBox } from './components/search-box/search-box';

import './App.css';

function App() {

  const [monsters, setMonsters] = useState([])
  const [searchField, setSearchField] = useState("")

  const fetchMonsters = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(monsterArray => setMonsters(monsterArray))
  }

  useEffect(()=> {
    fetchMonsters()
  })

  const handleChange = e => {
    setSearchField({ searchField: e.target.value })
  }

 
  const filteredMonsters = monsters.filter(monster => 
    monster.name.toLowerCase()
    .includes(searchField.toLowerCase())
  )

  return (
    <div className="App">
    <h1>Monsters Rolodex</h1>
      <SearchBox 
        placeholder="Search Monsters"
        handleChange={ handleChange() }
      />
      <CardList monsters={ filteredMonsters } />
    </div>
  );
}

export default App;
