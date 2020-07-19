//--------------------------------------------------------------------------------//
//Costume function zone
//--------------------------------//
function needs(){
    background( 255 , 255 , 255);
    drawSprites(); 
  }
  //--------------------------------//
  function Bounce(){
    ball.bounceOff( Paddle1 );
    ball.bounceOff( Paddle2 );
    ball.bounceOff( topedge );
    ball.bounceOff( bottomedge );  
    Paddle1.bounceOff( topedge );
    Paddle1.bounceOff( bottomedge );
    Paddle2.bounceOff( topedge );
    Paddle2.bounceOff( bottomedge );
  }
  //--------------------------------//
  function movement(){
    if( keyDown ( "w" ) ){
      Paddle1.velocityY =  -6;
    }
    if( keyDown ( "d" ) ){
      Paddle1.velocityY =  6;
    }  
    if(( keyWentUp ( "w" ) ) || ( keyWentUp ( "d" ) )){
      Paddle1.velocityY =  0;
    }  
  
    if( gameMode === "MultiPlayer" ){
      if( keyDown ( "o" ) ){
        Paddle2.velocityY =  -5;
      }
      if( keyDown ( "k" ) ){
        Paddle2.velocityY =  5;
      }  
      if(( keyWentUp ( "o" ) ) || ( keyWentUp ( "k" ) )){
        Paddle2.velocityY =  0;
      }
    } 
    if( gameMode === "SinglePlayer" ){
      Paddle2.y = ball.y
    }
  }
  
  //--------------------------------//
  function roundEnd(){
    if( ball.isTouching( rightedge ) ){
      Score1++;
  
      ball.x = 500;
      ball.y = 250;
      
      ball.velocityX =8;
      ball.velocityY =9;
      ball.velocityX = -ball.velocityX;
      ball.velocityY = -ball.velocityY;
    }
    else if ( ball.isTouching( leftedge ) )
    {
      Score2++;
  
      ball.x = 500;
      ball.y = 250;
  
      ball.velocityX = -ball.velocityX;
      ball.velocityY = -ball.velocityY;
    }
  }
  //--------------------------------//
  function gameEnd(totalPoints){
    if( Score1===totalPoints ){
      if( gameMode === "SinglePlayer" ){
        textSize( 20 );
        text(  "PLAYER WINS" , 250 , 200 );
      } 
      if( gameMode === "MultiPlayer" ){
        textSize( 20 );
        text(  "PLAYER1 WINS" , 250 , 200 );
      }
      gameState = "END";      
    }
    if( Score2===totalPoints ){
     if( gameMode === "SinglePlayer" ){
        textSize( 20 );
        text(  "COMPUTER WINS" , 250 , 200 );
      } 
      if( gameMode === "MultiPlayer" ){
        textSize( 20 );
        text(  "PLAYER2 WINS" , 250 , 200 );
      }
      gameState = "END";           
    }  
    textSize( 20 );
    text ( "Total Points " + totalPoints , 500 , 100 );
  }
  //--------------------------------//
  function restart(){
    if( keyDown( "R" ) ){
      Score1 = 0;
      Score2 = 0;
      ball.velocityY = 9;
      ball.velocityX = 8;  
      Paddle1.y = 250;
      gameState = "PLAY";
    }
  }
  //--------------------------------//
  function goHome(){
    if( keyDown ( "H" ) ){
      Paddle1.y = 250;
      Paddle2.y = 250;
      Score1 = 0;
      Score2 = 0;
      gameState = "HOME";
    }
  }
  //--------------------------------//
  function scoring(){
    textSize( 20 );
    text ( Score1 , 200 , 100 );
    textSize( 20 );
    text ( Score2 , 800 , 100 );  
  }
  //--------------------------------//
  //--------------------------------------------------------------------------------//