import React from 'react';
import { AboutNav } from './Navigation';
import { BreedNav } from './Navigation';
import PetList from './PetList'
import { useState } from 'react';



function App(props) {
  const [pets, setAdopt] = useState(props.pets);

  let breeds = [];
  pets.forEach((pet) => {
    if(!breeds.includes(pet.breed)) {
      breeds.push(pet.breed);
    }
  });

  const adopted = function(name) {
    setAdopt(pets.map((pet) => {
    if(pet.name === name) {
      pet.adopted = true;
    }
    return pet;
  }));
  }


  return(
    <div>
      <header className="jumbotron jumbotron-fluid py-4">
        <div className="container">
          <h1>Adopt a Pet</h1>
        </div>
      </header>

      <main className="container">
        <div className="row">
          <div id="navs" className="col-3">
        </div>
        <AboutNav/>
        <BreedNav breeds={breeds}/>
        <div id="petList" className="col-9">
         <PetList pets={pets} adoptCallback={adopted}/>
        </div>
        </div>
        </main>

        <footer className="container">
        <small>Images from <a href="http://www.seattlehumane.org/adoption/dogs">Seattle Humane Society</a></small>
      </footer>
    </div>
  );
}
export default App;

