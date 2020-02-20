export function fillCell(columnId, cellId) {
    return{
        type: 'fill_cell',
        cellId,
        columnId,
    };
}

export function reset() {
    return {
        type: 'reset'
    };
}