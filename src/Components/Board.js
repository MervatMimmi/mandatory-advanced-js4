import React, { useReducer } from 'react';
import Grid from './Grid';
import reducer from './reducer';
import * as actions from './actions';
import {initState} from './init';

const styles = {
    window: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center'
    },
    button: {
        backgroundColor: '#4a92a966',
        margin: '0 auto',
        marginTop: '70px',
        display: 'flex',
        maxWidth: '434px',
        padding: '10px 30px 10px 30px',
        borderRradius: '4px',
        boxShadow:'1px 1px 60px 0px #00000021',
        cursor: 'pointer',
    }
}

export default function Board() {

    const [state, dispatch] = useReducer( reducer, null, initState);

    console.log(state);

    const {grid} = state;
    
    return(
        <div style = {styles.window} >
            <h1>Connect Four</h1>
            <table>
                <Grid 
                    grid = {grid}
                    onClickCell = {(rowId, cellId)=> dispatch(actions.fillCell(rowId,cellId))}
                />
            </table>
            <button style = {styles.button}
                    onClick = {() => dispatch(actions.clearGame())}>
                New Game
            </button>
        </div>
    );
}
