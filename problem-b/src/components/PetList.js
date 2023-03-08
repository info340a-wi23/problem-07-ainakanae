import React from 'react';

export function PetCard(props) {
    const pets = props.pets;
    const names = pets.names;
    if(pets.adopted) {
        names = names + ' (Adopted)';
    }
    return(
        <div className="card" onClick={() => {props.adoptCallback(pets.names)}}>
            <img className="card-img-top" src={pets.img} alt={pets.names} />
            <div className="card-body">
              <h3 clasName="card-title">{pets.name}</h3>
              <p className="card-text">{pets.sex + ' ' + pets.breed}</p>
            </div>
          </div>

    )
}

export default function PetList(props){
    return(
        <div className="card-deck">
        <div id="petList" className="col-9">
            <h2>Dogs for Adoption</h2>
            {props.pets.map((pets) => {
                let petDisp = <PetCard pets={pets} adoptCallback={props.adoptCallback}/>
                return petDisp;
            })}
        </div>
        </div>
    )
}