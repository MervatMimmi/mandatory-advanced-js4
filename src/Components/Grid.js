import React  from 'react';

const styles = {
    container:{
        backgroundColor: 'rgba(66, 130, 151, 0.4)',
        margin: '0 auto',
        marginTop: '30px',
        boarderTop: '40px',
        display: 'flex',
        maxWidth: '434px',
        padding: '10px 30px 10px 30px',
        borderRadius: '10px',
        boxShadow:'1px 1px 60px 0px #00000021',
    },
    column: {
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
            {grid.map((column, columnId) => (
            <tr key = {columnId} 
                style = {{ ...styles.column, backgroundColor: column}}> 
                    {column.map((cell, cellId) => (
                        <td key = {cellId} 
                            style = {{...styles.cell, backgroundColor: cell}}
                            onClick = {() => onClickCell(columnId, cellId)}>
                        </td>))}
            </tr>
            ))}
        </tbody>
    );
}

