
var start = 1;
var timer2 = 0;
var time = 0;
var gamestate = 2;
var timer = 0;
var car;
function preload() {
  roadImage = loadImage("images/road.png");
  carImage = loadImage("images/car.png");
  car2Image = loadImage("images/car2.png");
  car3Image = loadImage("images/car3.png");
  car4Image = loadImage("images/car4.png");
  car5Image = loadImage("images/car5.png");
  car6Image = loadImage("images/car6.png");
  tryAgain = loadImage("images/try.png");
  gameWin = loadImage("images/win.png");
  gameStart = loadImage("images/start.png");
  coinImage = loadImage("images/coin.png");
}

function setup() {
  createCanvas(600, 600);
  road = createSprite(205, 200);
  road.addImage("road", roadImage)
  road.scale = 4.5;
  road.width = 600;
  road.height = 600;


  car = createSprite(205, 200);
  car.addImage("car", carImage);
  car.scale = 0.3;

  car2 = createSprite(250, 320);
  car2.addImage("car2", car2Image);
  car2.scale = 0.3;

  car3 = createSprite(180, 60);
  car3.addImage("car3", car3Image);
  car3.scale = 0.3;

  car4 = createSprite(20, 140);
  car4.addImage("car4", car4Image);
  car4.scale = 0.3;

  car5 = createSprite(140, 25);
  car5.addImage("car5", car5Image);
  car5.scale = 0.3;

  car6 = createSprite(310, 230);
  car6.addImage("car6", car6Image);
  car6.scale = 0.3;

  coin = createSprite(40, 300);
  coin.addImage("coin", coinImage);
  coin.scale = 0.08;
}

function draw() {

  if (gamestate === 2) {
    timer = World.seconds - timer2;
    car2.velocityY = 3;
    car3.velocityY = 3;
    car4.velocityY = 3;
    car5.velocityY = 3;
    car6.velocityY = 3;
    coin.velocityY = 3;
  }

  if (keyDown(RIGHT_ARROW)) {
    car.x = car.x + 10;
  }

  if (keyDown(LEFT_ARROW)) {
    car.x = car.x - 10;
  }

  if(car.isTouching(coin)){
    timer= 10 + timer;
    coin.visible = false;
  }

  if (car.isTouching(car2) || car.isTouching(car3) || car.isTouching(car4) || car.isTouching(car5) || car.isTouching(car6)) {
    var screen = createSprite(200, 200);
    screen.addImage("screen", tryAgain);
  }

  if (car2.isTouching(car3) || car2.isTouching(car4) || car2.isTouching(car5) || car2.isTouching(car6)) {
    car2.y = Math.round(random(0, 0));
    car2.x = Math.round(random(400, 0));
  }

  if (car3.isTouching(car6) || car2.isTouching(car4) || car2.isTouching(car5)) {
    car3.y = Math.round(random(0, 0));
    car3.x = Math.round(random(400, 0));
  }

  if (car4.isTouching(car6) || car3.isTouching(car5)) {
    car4.y = Math.round(random(0, 0));
    car4.x = Math.round(random(400, 0));
  }

  if (car5.isTouching(car6)) {
    car5.y = Math.round(random(0, 0));
    car5.x = Math.round(random(400, 0));
  }

  if(coin.y > 405){
    coin.y = Math.round(random(0, 0));
    coin.x = Math.round(random(400, 0));
  }
  if (car6.y > 405) {
    car6.y = Math.round(random(0, 0));
    car6.x = Math.round(random(400, 0));
  }


  if (car2.y > 405) {
    car2.y = Math.round(random(0, 0));
    car2.x = Math.round(random(400, 0));
  }


  if (car3.y > 405) {
    car3.y = Math.round(random(0, 0));
    car3.x = Math.round(random(400, 0));
  }


  if (car4.y > 405) {
    car4.y = Math.round(random(0, 0));
    car4.x = Math.round(random(400, 0));
  }


  if (car5.y > 405) {
    car5.y = Math.round(random(0, 0));
    car5.x = Math.round(random(400, 0));
  }

  if (car.x > 400) {
    car.x = 0;
  }
  if (car.x < -5) {
    car.x = 400;
  }

  drawSprites();
  if (keyDown("space")) {
    timer2 = World.seconds;
    console.log('>>>>>>>>', World.seconds);
    gamestate = 2;
  }
  fill("white");
  textSize(20);
  text("score:" + timer, 10, 10, 80, 20);
  textFont("coutier New");
}