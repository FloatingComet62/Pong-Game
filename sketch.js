//--------------------------------------------------------------------------------//
// Variables
var Paddle1, Paddle2;
var topedge, bottomedge, leftedge, rightedge;
var ball;
var Score1, Score2, gameState , gameMode;
//--------------------------------------------------------------------------------//
//setup
function setup() {
  createCanvas( 1000, 500 );
  //paddles
    Paddle1 = createSprite( 100 , 250 , 20 , 100 );
    Paddle2 = createSprite( 900 , 250 , 20 , 100 );    
  //edges
  topedge = createSprite( 500 , -10 , 1000 , 20 );
  bottomedge = createSprite( 500 , 510 , 1000 , 20 );  
  leftedge = createSprite( -10 , 250 , 20 , 500 );
  rightedge = createSprite( 1100 , 250 , 20 ,500 ); 
  //ball
  ball = createSprite( 500 , 250 , 10 , 10 );
  //variables
  gameState = "HOME";
  Score1 = 0;
  Score2 = 0;
  gameMode = "SinglePlayer";
}
//--------------------------------------------------------------------------------//
//loooping
function draw() {
  needs();


  if( gameState === "HOME" ){
    Paddle1.visible = false; 
    Paddle2.visible = false; 
    ball.visible = false;
    textSize(20);
    text( "PONG GAME" , 440 , 200 );    
    textSize(20);
    text( "Press S for Single Player" , 400 , 230 );
    textSize(20);
    text( "Press M for Multi Player" , 400 , 250 );    
    if( keyDown( "S" ) ){
      gameMode = "SinglePlayer";
      gameState = "PLAY";
      ball.velocityY = 9;
      ball.velocityX = 8;
    }
    if( keyDown( "M" ) ){
      gameMode = "MultiPlayer";
      gameState = "PLAY";
      ball.velocityY = 9;
      ball.velocityX = 8;  
    }   
  }


  if( gameState === "PLAY" ){
    Paddle1.visible = true; 
    Paddle2.visible = true; 
    ball.visible = true;
    if( gameMode==="SinglePlayer" ){
      textSize( 20 );
      text ( "Use w & d to move" , 500 , 50 ); 
    }
    if( gameMode==="MultiPlayer" ){
      textSize( 20 );
      text ( "Use w & d to move" , 200 , 50 ); 
      textSize( 20 );
      text ( "Use o & k to move" , 700 , 50 ); 
    }
    movement();
    Bounce();
    scoring();
    roundEnd();
    gameEnd( 11 );
  }


  if( gameState === "END" ){
    ball.velocityX = 0;
    ball.velocityY = 0;
    textSize( 20 );
    text( "Press H to go back to change gamemode" , 400 , 220 );
    textSize( 20 );
    text( "Press R to go back to change gamemode" , 400 , 200 );
    restart();
    goHome();
    scoring();
  }
} 
//--------------------------------------------------------------------------------//