function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}
function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}
function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}
function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}
function getElementTextById(elementId){
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
}     
function getTextElementValueById(elementId){
    const element = document.getElementById(elementId);
    const value = element.innerText;
    return value;

}
function setTextElementById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}
function getARandomAlphabet(){
    // get or create an alphabet array
    const alphabetString ='abcdefghijklmnopqrstuvwxyz'
    const alphabets = alphabetString.split('');

    // get a random index between 0 - 25
    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];
    return alphabet;
} 
                    