import React, { useState } from 'react';
import data from './data';
import List from './List';

function App() {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id)
    setPeople(newPeople)
  };
  return (
    <main>
      <section className='container'>
        <h3>{people.length} birthdays today</h3>
        <List people={people} handleRemove={removeItem}/>
        <button className='clear-btn' onClick={() => setPeople([])}>
          clear all
        </button>
      </section>
    </main>
  );
}

export default App;
