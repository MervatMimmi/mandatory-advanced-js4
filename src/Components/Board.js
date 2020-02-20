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
        backgroundColor: 'rgba(66, 130, 151, 0.4)',
        margin: '0 auto',
        marginTop: '70px',
        display: 'flex',
        maxWidth: '434px',
        padding: '10px 30px 10px 30px',
        borderRadius: '10px',
        boxShadow:'1px 1px 60px 0px #00000021',
        cursor: 'pointer',
    }
}

export default function Board() {

    const [state, dispatch] = useReducer( reducer, null, initState);
    //console.log(state);

    const {grid, infoMsg} = state;
    
    return(
        <div style = {styles.window} >
            <h1>Connect Four</h1>
            <h3>{infoMsg}</h3>
            <table>
                <Grid 
                    grid = {grid}
                    onClickCell = {(columnId, cellId)=> dispatch(actions.fillCell(columnId,cellId))}
                />
            </table>
            <button style = {styles.button}
                    onClick = {() => dispatch(actions.reset())}>
                New Game
            </button>
        </div>
    );
}
