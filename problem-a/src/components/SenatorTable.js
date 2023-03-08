import React from 'react'; //import React library
import { SenatorRow } from './SenatorRow';
import { TableHeader } from './TableHeader';


/*
const EXAMPLE_SENATORS = [
  { id: 'C000127', name: 'Maria Cantwell', state: 'WA', party: 'Democrat', phone: '202-224-3441', twitter: 'SenatorCantwell' },
  { id: 'M001111', name: 'Patty Murray', state: 'WA', party: 'Democrat', phone: '202-224-2621', twitter: 'PattyMurray' }
];
*/
const columnNames = ['Name', 'State', 'Phone', 'Twitter'];


/* Your code goes here */
export function SenatorTable(senatorsList) {
  const rows = senatorsList.senatorsList.map((senatorsArray) => {
    return <SenatorRow key={senatorsArray.id} senatorData={senatorsArray} />
});
  return(
    <table className="table table-bordered">
      <TableHeader columnNames={columnNames}/>
      <tbody>
        {rows}
      </tbody>
    </table>
  )
}