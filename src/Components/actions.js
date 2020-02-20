export function fillCell(rowId, cellId) {
    return{
        type: 'fill_cell',
        cellId,
        rowId,
    };
}

export function clearGame() {
    return {
        type: 'clear_game'
    };
}