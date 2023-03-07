import React from 'react'; //import React library



export function TableHeader(props) {
        const columnNames = props.columnNames;
        const headnames = columnNames.map((elements) => <th key={elements}>{elements}</th>);
        return (
        <thead>
            <tr>
                {headnames}
            </tr>
        </thead>
    )
}


