const keyDown = [];
document.addEventListener('keydown', event => {
    if(!keyDown.includes(event.key)){
        keyDown.push(event.key);
    }
});
document.addEventListener('keyup', event => {
    if(keyDown.includes(event.key)){
        keyDown.splice(keyDown.indexOf(event.key), 1);
    }
});
function handleInput(keyDown){
    if(keyDown.includes('LeftArrow')){

    }
    if(keyDown.includes('RightArrow')){
        
    }
    if(keyDown.includes('UpArrow')){
        
    }
    if(keyDown.includes('DownArrow')){
        
    }
}