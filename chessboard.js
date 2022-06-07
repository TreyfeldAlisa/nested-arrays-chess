function generateChessboard() {
    const figures = ['Ладья', 'Конь', 'Слон', 'Ферзь', 'Король', 'Слон', 'Конь', 'Ладья'];
    const pawns = new Array(8).fill('Пешка');
    
    let chess = []
    
    chess.push(figures.map((el) => 'Ч ' + el))
    chess.push(pawns.map((el) => 'Ч ' + el))
    for (let i = 1; i <= 4; i += 1){
        chess.push(new Array(8).fill(null))
    }
    chess.push(pawns.map((el) => 'Б ' + el))
    chess.push(figures.map((el) => 'Б ' + el))
    
    return chess  
}

function renderChessboard() {
    const emojis = {
        'Б Ферзь': '♕',
        'Б Король': '♔',
        'Б Слон': '♗',
        'Б Конь': '♘',
        'Б Ладья': '♖',
        'Б Пешка': '♙',
        'Ч Ферзь': '♛',
        'Ч Король': '♚',
        'Ч Слон': '♝',
        'Ч Конь': '♞',
        'Ч Ладья': '♜',
        'Ч Пешка': '♟'
    }
    let boards = generateChessboard();
    // return boards = boards.map((el) => {
    //     for (let i = 0; i < el.length; i += 1){
    //         if (emojis[el[i]]) {
    //             el[i] = emojis[el[i]]
    //         } 
    //         else {
    //             el[i] = null
    //         }
    //     } return el.join('')
    // }). join('\n')
    return boards.map((el) => el.map((chess) => {
            if (emojis[chess]) {chess = emojis[chess]}
            else {chess = null}
            return chess
        }).join('')).join('\n')
}
console.log(renderChessboard())
module.exports = {generateChessboard, renderChessboard};
