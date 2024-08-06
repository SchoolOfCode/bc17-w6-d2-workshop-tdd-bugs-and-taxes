const letterValue = [
    {letter: 'a',score: 1},
    {letter: 'b',score: 3},
    {letter: 'c',score: 3}, 
    {letter: 'd',score: 2}, 
    {letter: 'e',score: 1}, 
    {letter: 'f',score: 4}, 
    {letter: 'g',score: 2}, 
    {letter: 'h',score: 4}, 
    {letter: 'i',score: 1}, 
    {letter: 'j',score: 8}, 
    {letter: 'k',score: 5}, 
    {letter: 'l',score: 1}, 
    {letter: 'm',score: 3},
    {letter: 'n',score: 1}, 
    {letter: 'o',score: 1},
    {letter: 'p',score: 3}, 
    {letter: 'q',score: 10}, 
    {letter: 'r',score: 1},  
    {letter: 's',score: 1}, 
    {letter: 't',score: 1}, 
    {letter: 'u',score: 1},  
    {letter: 'v',score: 4}, 
    {letter: 'w',score: 4}, 
    {letter: 'x',score: 8}, 
    {letter: 'y',score: 4}, 
    {letter: 'z',score: 10}
   ]
let wordArray = [];

export function calculateScrabbleScore(word) {
    const lowerCaseWord = word.toLowerCase(); //take the word and turn it into lowercase
    wordArray = [...lowerCaseWord]; // spread the lowercase word into an array
    let score = 0; //start score as 0
    
    wordArray.forEach((c) => { //for each letter (c) do the following fucntion
    let index = letterValue.findIndex(({letter}) => letter === c) // we compare every letter in the answer array to every (c)
    if (index === -1) { //if letter does not match return null
        return null
    }
    let playerScore = letterValue[index].score
    score += playerScore
    });
    return score
}