const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
var rosa;

let engine;
let world;

var rope, rope2, fruit, ground, bunny;
var fruit_con, fruit_con_2, fruit_con_3;
var bgImg, fruitImg, bunnyImg;
var blinkImg, eatImg, sadImg;
var cutB1, cutB2, balaoB, balaoB2, muteB, unmuteB, pushB;
var bk_song, cut_sound, sad_sound, eating_sound, air_sound;
var star1, star2, starImg;
var Edisplay;
var displayV, display1, display2, display3;
var wall1, wall2, wall3;
var bubble, bubbleImg;

function preload(){

  bgImg = loadImage('./img/background.jpg');
  fruitImg = loadImage('./img/candy.png');
  bunnyImg = loadImage('./img/Rabbit-01.png');
  bubbleImg = loadImage('./img/bubbleImg.png')

  bk_song = loadSound('./sounds/sound2.mp3');
  sad_sound = loadSound('./sounds/sad.wav')
  cut_sound = loadSound('./sounds/rope_cut.mp3');
  eating_sound = loadSound('./sounds/eating_sound.mp3');
  air_sound = loadSound('./sounds/air.wav');

  blinkImg = loadAnimation('./img/blink_1.png', './img/blink_2.png', './img/blink_3.png');
  eatImg = loadAnimation('./img/eat_0.png', './img/eat_1.png', './img/eat_2.png', './img/eat_3.png', './img/eat_4.png');
  sadImg = loadAnimation('./img/sad_1.png', './img/sad_2.png', './img/sad_3.png');

  displayV = loadAnimation('./img/empty.png');
  display1 = loadAnimation('./img/one_star.png');
  display2 = loadAnimation('./img/stars.png');
  display3 = loadAnimation('./img/3stars.png');
  starImg = loadImage('./img/star.png');

  blinkImg.playing = true;
  eatImg.playing = true;
  sadImg.playing = true;
  sadImg.looping = false;
  eatImg.looping = false;
}

function setup() {
  createCanvas(600, 700);

  frameRate(80);

  bk_song.play();
  bk_song.setVolume(0.5);

  engine = Engine.create();
  world = engine.world;

//COM BASE EM SEUS CONHECIMENTOS DESCOMENTE O CÓDIGO CORRETO PARA CRIAR O BOTÃO DE CORTAR 1
/*cutB1 = createImg('./img/cut_btn.png');
  cutB1.postion(100, 90);
  cutB1.size(50, 50);
  cutB1.mouseClicked(drop);*/


  /*cutB1 = creatImg('./img/cut_btn.png');
  cutB1.position(100, 90);
  cutB1.size(50, 50);
  cutB1.mouseClicked(drop);*/


  /*cutB1 = createImg('./img/cut_btn.png');
  cutB1.position(100, 90);
  cutB1.size(50, 50);
  cutB1.mouseClicked(drop);*/





  cutB2 = createImg('./img/cut_btn.png');
  cutB2.position(450, 90);
  cutB2.size(50, 50);
  cutB2.mouseClicked(drop2);

  muteB = createImg('./img/mute.png');
  muteB.position(width - 73, 10);
  muteB.size(70, 70);
  muteB.mouseClicked(mute);

  //COM BASE EM SEUS CONHECIMENTOS DESCOMENTE O CÓDIGO CORRETO PARA CRIAR AS CORDAS ROPE E ROPE2
  //rope = new Rope(7, { x: 120, y: 90 });
  //rope2 = new Rope(7, { x: 490, y: 90 });

  //rope = new Rop(7, { x: 120, y: 90 });
  //rope2 = new Rop(7, { x: 490, y: 90 });

  //rope = new Rope(7,  x: 120, y: 90 );
  //rope2 = new Rope(7, x: 490, y: 90 );

  //rope = new Rope(7, { x: 120 y: 90 });
  //rope2 = new Rope( { x: 490, y: 90 });

  ground = new Ground(400, 800, 800, 20);

  wall1 = new Wall(325, 545, 150, 10);
  wall2 = new Wall(250, 620, 10, 150);
  wall3 = new Wall(400, 620, 10, 150);

  blinkImg.frameDelay = 20;
  eatImg.frameDelay = 20;

  bunny = createSprite(320, 620, 20, 20);
  bunny.scale = 0.2;
  bunny.addAnimation('blinking', blinkImg);
  bunny.addAnimation('eating', eatImg);
  bunny.addAnimation('crying', sadImg);
  bunny.changeAnimation('blinking');
  
  Edisplay = createSprite(70, 40, 30, 30); 
  Edisplay.scale = 0.1;
  Edisplay.addAnimation('empty', displayV);
  Edisplay.addAnimation('oneStar', display1);
  Edisplay.addAnimation('stars', display2);
  Edisplay.addAnimation('3stars', display3);
  Edisplay.changeAnimation('empty');

  star1 = createSprite(520, 300, 100, 100);
  star1.scale = 0.025;
  star1.addAnimation('star', starImg);

  star2 = createSprite(100, 200, 20, 20);
  star2.scale = 0.025;
  star2.addAnimation('star2', starImg);

  bubble = createSprite(520, 300, 100, 100);
  bubble.scale = 0.15;
  bubble.addAnimation('bubble', bubbleImg);

  pushB = createImg('./img/push.png');
  pushB.position(500, 350);
  pushB.size(80, 80);
  pushB.mouseClicked(pushButton);

  fruit = Bodies.circle(300, 300, 20);
  Matter.Composite.add(rope.body, fruit);

  fruit_con = new Link(rope, fruit);
  fruit_con_2 = new Link(rope2, fruit);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() {
  background(51);
  //EXIBA A IMAGEM DE FUNDO CORRETAMENTE 
  //imagem(bgImg, 0, 0, width, height);
  //image(bgImg, 0, 0, width, height);
  //image(bgImage, 0, 0, width, height);

  push();
  imageMode(CENTER);
  if (fruit != null) {
    image(fruitImg, fruit.position.x, fruit.position.y, 520, 300);
  }
  pop();

  rope.show();
  rope2.show();
  ground.show();
  wall1.show();
  wall2.show();
  wall3.show();

  Engine.update(engine);

  drawSprites();

  if(collide(fruit, bunny, 80) == true){
    World.remove(engine.world, fruit);
    World.remove(engine.world, bubble);
    fruit = null;
    bubble = null;
    bunny.changeAnimation('eating');
    eating_sound.play();
    star2.visible = false;
    Edisplay.changeAnimation('3stars');
    win();
  }

  if (fruit != null && fruit.position.y >= 650) {
    bunny.changeAnimation('crying');
    bk_song.stop();
    sad_sound.play();
    fruit = null;
    bubble = null;
    gameOver();
  }

  if(collide(fruit, star2, 40) == true) {
    Edisplay.changeAnimation('stars');
    star2.visible = false;
  }

  if(collide(fruit, star1, 40) == true) {
    star1.visible = false;
    Edisplay.changeAnimation('oneStar');
  }

  if(collide(bubble, fruit, 40) == true){
    if(keyDown("left_arrow")){
      engine.world.gravity.x = -0.1;
      engine.world.gravity.y = 0;
    }
    if(keyDown("right_arrow")){
      engine.world.gravity.x = 0.1;
      engine.world.gravity.y = 0;
    }
    if(keyDown("up_arrow")){
      engine.world.gravity.y = -0.1;
      engine.world.gravity.x = 0;
    }
    if(keyDown("down_arrow")){
      engine.world.gravity.y = 0.1;
      engine.world.gravity.x = 0;
    }

    bubble.position.x = fruit.position.x;
    bubble.position.y = fruit.position.y;
  }
}

//descomente para funcionar:
/*function drop() {
  cut_sound.play();
  rope.break();
  fruit_con.dettach();
  fruit_con = null;
  cutB1.remove();
}

function drop2() {
  cut_sound.play();
  rope2.break();
  fruit_con_2.dettach();
  fruit_con_2 = null;
  cutB2.remove();
}*/

function collide(body, sprite, x) {
  if (body != null) {
    var d = dist(body.position.x, body.position.y, sprite.position.x, sprite.position.y);
    if (d <= x) {
      return true;
    } else {
      return false;
    }
  }
}

function mute() {
  if (bk_song.isPlaying()) {
    bk_song.stop();
    unmuteB = createImg('./img/unmute.png');
    unmuteB.position(width - 130, 0);
    unmuteB.size(180, 100);
    unmuteB.mouseClicked(mute);
    muteB.remove();
  } else {
    bk_song.play();
    muteB = createImg('./img/mute.png');
    muteB.position(width - 73, 10);
    muteB.size(70, 70);
    muteB.mouseClicked(mute);
    unmuteB.remove();
  }
}


function gameOver(){
  swal({
    title: `Fim de Jogo!!!`,
    text: "Obrigado por jogar!!",
    imageUrl:"./img/sad_3.png",
    imageSize: "250x250",
    confirmButtonText: "Jogar Novamente"
    },
    function(isConfirm) {
      if(isConfirm){
        location.reload();
      }
    }
  );
}

function win(){
  swal({
    title: `Você Ganhou, parabens!!!`,
    text: "Obrigado por jogar!!",
    imageUrl:"./img/sad_1.png",
    imageSize: "250x250",
    confirmButtonText: "Jogar Novamente"
  },
    function(isConfirm){
      if(isConfirm){
        location.reload();
      }
    }
  );
}

function pushButton(){
  wall1.break();
  wall2.break();
  wall3.break();
}