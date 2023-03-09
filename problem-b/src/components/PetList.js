import React from 'react';


export function PetCard(props) {
  
 
    return(
        <div className="card" onClick={() => props.adoptCallback(props.pet.name)}>
            <img className="card-img-top" src={props.pet.img} alt={props.pet.name} />
            <div className="card-body">
              <h3 className="card-title">{props.pet.adopted ? props.pet.name + ' (Adopted)' : props.pet.name}</h3>
              <p className="card-text">{props.pet.sex + ' ' + props.pet.breed}</p>
            </div>
          </div>

    )
}

export default function PetList(props){
    let card = props.pets.map((pet) => {
        return <PetCard pet={pet} adoptCallback={props.adoptCallback} key={pet.name}/>
    });

    return(
      <div>
            <h2>Dogs for Adoption</h2>
            <div className="card-deck">
          {card}
             
         
        </div>
        </div>
    );
}