function play(){
    // const homeSection = document.getElementById('home-screen');
    // homeSection.classList.add('hidden');
    // // show the playground
    // const playgroundSection = document.getElementById('play-ground');
    // playgroundSection.classList.remove('hidden');
    //hide everything show only the playground
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');
    //reset score and life
    setTextElementById('current-life',5)
    setTextElementById('current-score',0)
    continueGame();
}
function handleKeyboardKeyUpEvent(event){
    const playerPressed = event.key;
    console.log('player pressed', playerPressed);

    //stop the game if pressed 'Esc'
    if(playerPressed === 'Escape'){
        gameOver();
    }
    //get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed, expectedAlphabet)

    // checked matched or not
    if(playerPressed === expectedAlphabet){
        // console.log('you get a point');
        // console.log('')
        //update Scoreboard
        // 1. get the current score
        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);
        // 2. increase the score by 1
        const newScore = currentScore+1;

        // 3. show the update score
        currentScoreElement.innerText = newScore;
        //start a new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        console.log('you missed. you lost a life');
        const currentLifeElement = document.getElementById('current-life');
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText);
        // 2. increase the score by 1
        const Life = currentLife-1;

        // 3. show the update score
        currentLifeElement.innerText = Life;
        if(Life==0){
            gameOver();
        }
        
    }

}
document.addEventListener('keyup',handleKeyboardKeyUpEvent)
function continueGame(){
    const alphabet = getARandomAlphabet();
    // console.log(alphabet);

    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;
    
    // set background color
    setBackgroundColorById(alphabet);
}
function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');
    const lastScore = getTextElementValueById('current-score');
    setTextElementById('last-score',lastScore);
    //clear the last selected alphabet highlight
    const alphabet = getElementTextById('current-alphabet');
    removeBackgroundColorById(alphabet);

}