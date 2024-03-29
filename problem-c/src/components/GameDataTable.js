import React, { useState } from 'react'; //import React Component

import _ from 'lodash'; //import external library!

export default function GameDataTable(props) {

  //Your work goes here
  const [sortByCriteria, sortFunc] = useState(null);
  const [isAscending, setOrder] = useState(null);

  const handleClick = (event) => {
    const columnName = event.currentTarget.name;
  if (columnName !== sortByCriteria) {
    // If the clicked button's name is not the current sortByCriteria, set the state to sort by that button's name in ascending order.
      sortFunc(columnName);
      setOrder(true);
    } else {
      // If the order is currently ascending, change it to not ascending (to reverse the order). But if the order is not currently ascending, then stop sorting all together.
      if (isAscending) {
        setOrder(false);
      } else {
        sortFunc(null);
        setOrder(null);
      }
    }
  };
  

  let sortedArray = props.data;
  if (sortByCriteria !== null) {
    sortedArray = _.sortBy(sortedArray, sortByCriteria);
    if (!isAscending) {
      sortedArray.reverse();
    }
  }

  //convert data into rows
  const rows = sortedArray.map((match) => {
    return <GameDataRow key={match.year} game={match} />
  });

  const sortingFeatures = (name) => {
    let active = (sortByCriteria === name);
    let ascending = (active && isAscending);
    return { name, active, ascending };
  };

  return (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th>
              Year
              <SortButton {...sortingFeatures("year")} onClick={handleClick}/>
            </th>
            <th className="text-end">
              Winner
              <SortButton {...sortingFeatures("winner")} onClick={handleClick}/>
            </th>
            <th className="text-center">
              Score
              <SortButton {...sortingFeatures("score")} onClick={handleClick}/>
            </th>
            <th>
              Runner-Up
              <SortButton {...sortingFeatures("runner_up")} onClick={handleClick}/>
            </th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    </div>
  );
}

//Component for managing display logic of sort button
//Props: 
//  `active` [boolean] if icon should be highlighted,
//  `ascending` [boolean] if icon should be in ascending order (flipped)
//  `onClick` [function] click handler (passthrough)
function SortButton(props) {
  let iconClasses = ""
  if (props.active) { iconClasses += ` active` }
  if (props.ascending) { iconClasses += ` flip` };

  return (
    <button className="btn btn-sm btn-sort" name={props.name} onClick={props.onClick}>
      <span className={"material-icons" + iconClasses} aria-label={`sort by ${props.name}`}>sort</span>
    </button>
  );
}

function GameDataRow({ game }) { //game = props.game
  return (
    <tr>
      <td>{game.year}</td>
      <td className="text-end">{game.winner} {game.winner_flag}</td>
      <td className="text-center">{game.score}</td>
      <td>{game.runner_up_flag}&nbsp;&nbsp;{game.runner_up}</td>
    </tr>
  );
}
