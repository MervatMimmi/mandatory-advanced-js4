import React  from 'react';

const styles = {
    container:{
        backgroundColor: '#4a92a966',
        margin: '0 auto',
        marginTop: '70px',
        display: 'flex',
        maxWidth: '434px',
        padding: '10px 30px 10px 30px',
        borderRradius: '4px',
        boxShadow:'1px 1px 60px 0px #00000021',
    },
    row: {
        flexGrow: '1',
    },
    cell: {
        width: '50px',
        height: '50px',
        display: 'flex',
        boarder: '1px solid transparent',
        borderRadius: '30px',
        margin: '5px',
        cursor: 'pointer',
    }
};



export default function Grid({grid, onClickCell}) {

    return(
        <tbody 
        style = {styles.container}>
            {grid.map((row, rowId) => (
            <tr key = {rowId} 
                style = {{ ...styles.row, backgroundColor: row}}> 
                    {row.map((cell, cellId) => (
                        <td key = {cellId} 
                            style = {{...styles.cell, backgroundColor: cell}}
                            onClick = {() => onClickCell(rowId, cellId)}
                            >
                        </td>))}
            </tr>
            ))}
        </tbody>
    );
}

