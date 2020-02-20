import {createEmtyBoard, winCondition} from './init';

export default function reducer(state, action) {
    switch(action.type) {
        case 'fill_cell':
            const newGrid = [...state.grid];
            newGrid[action.rowId] = newGrid[action.rowId].slice(0);
            //console.log(newGrid[action.rowId]);
            const emptyCell = newGrid[action.rowId].filter((cell) => {
            //console.log(cell);
            return cell === 'white';
            });
            
            newGrid[action.rowId][emptyCell.length -1] = state.selectedPlayer;

            if(winCondition(newGrid, 'red')) {
                console.log("Red is the Winner");
                return {
                ...state,
                grid: newGrid,
                isWinner: true,
                }
            } else if(winCondition(newGrid, 'yellow')) {
                console.log("Yellow is the winner");
                return {
                ...state,
                grid: newGrid,
                isWinner: true,
                }
            }
            return {
                ...state,
                grid: newGrid,
                selectedPlayer: state.selectedPlayer === 'red' ? 'yellow' : 'red',
            };

        case 'clear_game':
            return{
                ...state,
                grid: createEmtyBoard()
            };
        default:
            return state;
    };
}
