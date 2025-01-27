const wordSearch = (letters, word) => { 
    // empty arr or empty word
    if (!letters.length || !word.length) {
        return false;
    }
    // empty word

    //horizontal
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (let l of horizontalJoin) {
        if (l.includes(word)) return true
    }
    
    // vertical
    const verticalJoin = [];
    for (c = 0; c < letters[0].length; c++) {
        let vertWord = '';
        for (r = 0; r < letters.length; r++) {
            vertWord += letters[r][c];
        }
        verticalJoin.push(vertWord);
    }
    for (let l of verticalJoin) {
        if (l.includes(word)) return true
    }

    return false;
}

module.exports = wordSearch