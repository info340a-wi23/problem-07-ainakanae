import React, { useState } from 'react'; //import React Component
import GameDataTable from './GameDataTable';
import TeamSelectForm from './TeamSelectForm';


function App(props) {

  //Your work goes here
  const [input, useInput] = useState({team: '', runnerTeams: false });

  //get sorted list of unique teamNames. reduce array of objects into array of strings, 
  //convert to Set to get uniques, spread back into array, and sort 
  const uniqueTeamNames = [...new Set(props.gameData.reduce((all, current) => {
    return all.concat([current.winner, current.runner_up]);
  }, []))].sort();

  const filteredForTableProp = props.gameData.filter((game) => {
    const {team, runnerTeams} = input;
    if (team === '') {
      return true;
    }
    if (game.winner === team) {
      return true; 
    }
    if (runnerTeams && game.runner_up === team) {
      return true; 
    }
    return false;
  });

  const useFilter = (team, runnerTeams) => {
    useInput({team, runnerTeams});
  };

  return (
    <div className="container">
      <header className="mb-3">
        <h1>FIFA World Cup Finals</h1>
      </header>
    
      <main>
        <TeamSelectForm teamOptions={uniqueTeamNames} applyFilterCallback={useFilter}/>
        <GameDataTable data={filteredForTableProp} />
      </main>

      <footer>
        <small>Data from <a href="https://en.wikipedia.org/wiki/List_of_FIFA_World_Cup_finals">Wikipedia</a>.</small>
      </footer>
    </div>
  );
}

export default App;
