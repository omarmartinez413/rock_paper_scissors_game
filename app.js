

var player0, player1,decision0,decision1,p0,p1;
player0 = p0;
player1 =p1;
//set decision funtions for player 0
function setRock0(){
    document.getElementById('decision0').style.display = 'block';
    document.getElementById('options0').style.display = 'none';
    player0 = 'rock';
    revealButton();
 };
function setPaper0(){
    document.getElementById('decision0').style.display = 'block';
    document.getElementById('options0').style.display = 'none';
    player0 = 'paper'
    revealButton();
  };
function setScissor0(){
    document.getElementById('decision0').style.display = 'block';
    document.getElementById('options0').style.display = 'none';
    player0 = 'scissor';
    revealButton();
  };

//set decision 
function setRock1(){
    document.getElementById('decision1').style.display = 'block';
    document.getElementById('options1').style.display = 'none';
    player1 = 'rock';
    revealButton();
    
  };
function setPaper1(){
    document.getElementById('decision1').style.display = 'block';
    document.getElementById('options1').style.display = 'none';
    player1 = 'paper';
    revealButton();
  
};
function setScissor1(){
    document.getElementById('decision1').style.display = 'block';
    document.getElementById('options1').style.display = 'none';
    player1 = 'scissor';
    revealButton();
};



//player 0 button selector


  p0 = document.getElementById('btn-rock0').addEventListener('click', setRock0);
p0 = document.getElementById('btn-paper0').addEventListener('click', setPaper0);
p0 = document.getElementById('btn-scissor0').addEventListener('click', setScissor0);

//player 1 button selector
p1 = document.getElementById('btn-rock1').addEventListener('click', setRock1);
p1 = document.getElementById('btn-paper1').addEventListener('click', setPaper1);
p1 = document.getElementById('btn-scissor1').addEventListener('click', setScissor1);



//reveal button
function revealButton(){
  if(player0 && player1){
  document.getElementById('reveal').style.display = 'block';
  console.log(player0);
  console.log(player1);
  }
};

//reveal button for results
document.getElementById("reveal").addEventListener("click", showWinner);

//decide winner
function showWinner(){
  //player 0 choses rock
  if(player0.includes('rock'))
    {
      if(player1.includes('rock')){
        alert("IT'S A TIE!!");
        document.getElementById('reveal').style.display = 'none';
      }else if(player1.includes('paper')){
        player1Wins();
      }else{
        player0Wins();
    }
  //player 0 choses paper
  }else if(player0.includes('paper')){
    if(player1.includes('rock')){
        player0Wins();
      }else if(player1.includes('paper')){
        alert("IT'S A TIE!!");
        document.getElementById('reveal').style.display = 'none';
      }else{
        player1Wins();
    }
  }else if(player0.includes('scissor')){
    if(player1.includes('rock')){
        player1Wins();
      }else if(player1.includes('paper')){
        player0Wins();
      }else{
        alert("IT'S A TIE!!");
        document.getElementById('reveal').style.display = 'none';
    }
  }
}

  
//player 0 wins
function player0Wins(){
  document.getElementById('name-0').innerHTML = 'Winner';
  document.getElementById('name-0').style.color ='red';
  document.getElementById('name-0').style.fontWeight = '700';
}

//player 1 wins
function player1Wins(){
  document.getElementById('name-1').innerHTML = 'Winner';
  document.getElementById('name-1').style.color ='red';
  document.getElementById('name-1').style.fontWeight = '700';
  
}

document.getElementById('new-game').addEventListener('click',init);

function init(){
  document.getElementById('options0').style.display = 'block';
  document.getElementById('options1').style.display = 'block';
  document.getElementById('decision0').style.display = 'none';
  document.getElementById('decision1').style.display = 'none';
  document.getElementById('name-0').innerHTML = 'Player 1';
  document.getElementById('name-1').innerHTML = 'Player 2';
  document.getElementById('name-0').style.color ='black';
  document.getElementById('name-0').style.fontWeight = '';
  document.getElementById('name-1').style.color ='black';
  document.getElementById('name-1').style.fontWeight = '';
  player0 = '';
  player1 = '';
  document.getElementById('reveal').style.display = 'none';
}
