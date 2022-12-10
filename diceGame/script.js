let count=0;
function fetchImage(){
    //This will generate a random number from 1 to 6:
    var firstRandomNum = Math.floor(Math.random() * 6)+1;
    var secondRandomNum = Math.floor(Math.random()* 6)+1

    //Choosing image
    var firstDiceImage =firstRandomNum+'.PNG'; 
    var secondDiceImage =secondRandomNum+'.PNG';

    document.querySelectorAll('img')[0].setAttribute('src',firstDiceImage);
    document.querySelectorAll('img')[1].setAttribute('src',secondDiceImage);

    if(count==10){
        clearInterval(id);
        if(firstRandomNum>secondRandomNum){
            document.querySelector('h1').innerHTML="The Winner is User 1";
        }
        
        else if(firstRandomNum<secondRandomNum){
            document.querySelector('h1').innerHTML="The Winner is User 2";
        }
        
        else{
            document.querySelector('h1').innerHTML="It's a draw";
        }  
        return;
    }
    count++;
}

let id = setInterval(fetchImage,100)