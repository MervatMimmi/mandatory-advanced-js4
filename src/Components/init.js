
export function createEmtyBoard(){
    return Array(7).fill(null).map(
        () => Array(6).fill('white')
    );
}

export function initState() {
    return {
        grid: createEmtyBoard(),
        selectedPlayer: 'red',
        isWinner: false,
        cellColor: 'white',
    }
}

export function winCondition(grid, cellColor) {
    //Now search vertical
    for(let row of grid) {
        let selectedColor = 0;
        for(let cell of row) {
            if(cell === cellColor) {
                selectedColor++;
                //console.log("red in row: "+selectedColor);  
                }else{
                    selectedColor = 0;
            }
            if(selectedColor === 4) {
                //console.log('selectedColor: '+selectedColor);
                return true;
            }
        }
    }
    //Now search horizontal
    for(let rowCell = 0; rowCell < 6; rowCell++){
        let selectedColor = 0;
            for(let row of grid) {
                if(row[rowCell] === cellColor) {
                    selectedColor++;
                    //console.log("red in row: "+selectedColor);  
                    }else{
                        selectedColor = 0;
                }
                if(selectedColor === 4) {
                    //console.log('selectedColor: '+selectedColor);
                    
                    return true;
                }
            }
        }
    // now right 
    for(let row = 3; row < 6; row ++) {
        for(let cell = 0; cell < 4; cell ++) {
            if(grid[row][cell]) {    
                let selectedColor = 0;
                if(grid[row][cell] === grid[row -1][cell + 1] &&
                    grid[row][cell] === grid[row -2][cell + 2] &&
                    grid[row][cell] === grid [row -3][cell + 3]) {
                        selectedColor++;
                        console.log("red in rowV: "+selectedColor);  
                    }else{
                        selectedColor = 0;
                }
                if(selectedColor === 4) {
                    console.log('selectedColor: '+selectedColor);
                    
                    return true;
                }
            }
        }
    }
}