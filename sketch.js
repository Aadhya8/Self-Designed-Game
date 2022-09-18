var gameState = "start";
var player, playButton;
var obstacles;
var obstacle1, obstacle2, obstacle3;

function preload() {

  bgImg = loadImage("Images/bgImg2.jpg");
  playerImg = loadImage("Images/pink_shirt_backpack.png");
  playButtonImg = loadImage("Images/Start.png");
  obstacle1 = loadImage("Images/cactus_02.png");
  obstacle2 = loadImage("Images/log.png");
  obstacle3 = loadImage("Images/plants_24.png");

}

function setup() {

  createCanvas(windowWidth, windowHeight);

  playButton = createSprite(400, 400);
  playButton.addImage(playButtonImg);
  playButton.scale = 0.5;

  player = createSprite(400, 450);
  player.addImage(playerImg);
  player.scale = 0.5;
  player.velocityX = 2;

  ground = createSprite(500, 600, 2000, 100);
  ground.visible = false;

}

function draw() {

  background(bgImg);

  if (gameState === "start") {

    player.visible = false;

    if (mousePressedOver(playButton)) {

      gameState = "play";

    }

  } else {

    playButton.visible = false;
    player.visible = true;
    spawnObstacles();

  }




  drawSprites();

}

function spawnObstacles() {

  if (frameCount % 100 === 0) {

    obstacles = createSprite(windowWidth + 10, player.y + 50);
    var num = Math.round(random(1, 3));
    obstacles.scale = 0.4;
    obstacles.velocityX = -4;

    switch (num) {

      case 1: obstacles.addImage(obstacle1);
        break;
      case 2: obstacles.addImage(obstacle2);
        break;
      case 3: obstacles.addImage(obstacle3);
        break;
      default: break;

    }

  }

}