import {winCondition, initState, draw} from './init';

export default function reducer(state, action) {
    switch(action.type) {
        case 'fill_cell':
            const newGrid = [...state.grid];
            newGrid[action.columnId] = newGrid[action.columnId].slice(0);
            //console.log(newGrid[action.columnId]);
            const emptyCell = newGrid[action.columnId].filter((cell) => {
            return cell === 'white';
            });
            if(state.winCondition || emptyCell.length === 0) {
                return state
            }
            newGrid[action.columnId][emptyCell.length -1] = state.selectedPlayer;

            if(winCondition(newGrid, 'aqua')) {
                return {
                ...state,
                grid: newGrid,
                isWinner: true,
                infoMsg:'Congratulations Aqua, you won!',
                }
            } else if(winCondition(newGrid, 'yellow')) {
                return {
                ...state,
                grid: newGrid,
                isWinner: true,
                infoMsg: 'Congratulations Yellow, you won!'
                }
            }
            if(draw(newGrid)) {
                return {
                    ...state,
                    grid: newGrid,
                    isWinner: true,
                    isDrawn: true,
                    infoMsg: 'The game is a draw, there is no winner!',
                }
            }
            return {
                ...state,
                grid: newGrid,
                selectedPlayer: state.selectedPlayer === 'aqua' ? 'yellow' : 'aqua',
            };

        case 'reset':
            return initState();
        default:
            return state;
    }
};
