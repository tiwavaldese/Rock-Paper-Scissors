alert


const player = ['rock', 'paper', 'scissors'];
const computer = '';
function playRound(player, computer){
if(player == 'rock'){
    if(computer == 'paper')
     
console.log('tie')
}
 if(player == 'rock'){
    if(computer == 'paper')
        console.log('Computer Won');

     else
       console.log('Player Won');


}
else if (player == 'scissors'){
    if(computer == 'rock'){
console.log('Computer Won');
       
    }
    else {
        console.log('Player Won');
       
}
}
else if (player== 'paper'){
    if(computer== ' scissors'){
        console.log('Computer Won');
 
    }
    else {
       console.log('Player Won');
       

}
}
}
playRound()