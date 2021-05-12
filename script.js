window.onload = function () {
  const canvas = document.querySelector("canvas");
  const ctx = canvas.getContext("2d");

  //Generates robot character
  let spriteSheet = new Image();
  spriteSheet.src = "img/playerSprite.png";

  let enemySprite = new Image();
  enemySprite.src = "img/inimigoSprite.png";

  let boxSprite = new Image();
  boxSprite.src = "img/boxJogo.png";

  let speedItem = new Image();
  speedItem.src = "img/speedItem.png";

  let rangeItem = new Image();
  rangeItem.src = "img/rangeItem.png";

  let medalha1Item = new Image();
  medalha1Item.src = "img/medalha1.png";

  let medalha2Item = new Image();
  medalha2Item.src = "img/medalha2.png";

  let medalha3Item = new Image();
  medalha3Item.src = "img/medalha3.png";

  let medalha4Item = new Image();
  medalha4Item.src = "img/medalha4.png";

  let scene = new Image();
  scene.src = "img/mapaJogo.png";

  let speed = new Item(speedItem);
  let range = new Item(rangeItem);
  let medalha1 = new Item(medalha1Item);
  let medalha2 = new Item(medalha2Item);
  let medalha3 = new Item(medalha3Item);
  let medalha4 = new Item(medalha4Item);
  let robot = new Sprite(spriteSheet);
  let enemy = new Enemy(enemySprite);
  let box = new Box(boxSprite);

  //setting keyCode character
  let LEFT = 37,
    UP = 38,
    RIGHT = 39,
    DOWN = 40;

  window.addEventListener("keydown", keydownHandler, false);
  window.addEventListener("keyup", keyupHandler, false);

  //Controls character movements
  function keydownHandler(e) {
    switch (e.keyCode) {
      case RIGHT:
        robot.mvRight = true;
        robot.mvUp = false;
        robot.mvDown = false;
        robot.mvLeft = false;
        break;
      case LEFT:
        robot.mvLeft = true;
        robot.mvRight = false;
        robot.mvUp = false;
        robot.mvDown = false;
        break;
      case UP:
        robot.mvUp = true;
        robot.mvRight = false;
        robot.mvLeft = false;
        robot.mvDown = false;
        break;
      case DOWN:
        robot.mvDown = true;
        robot.mvRight = false;
        robot.mvLeft = false;
        robot.mvUp = false;
        break;
    }
  }

  function keyupHandler(e) {
    switch (e.keyCode) {
      case RIGHT:
        robot.mvRight = false;
        break;
      case LEFT:
        robot.mvLeft = false;
        break;
      case UP:
        robot.mvUp = false;
        break;
      case DOWN:
        robot.mvDown = false;
        break;
    }
  }

  spriteSheet.onload = function () {
    init();
  };

  //loop start function
  function init() {
    robot.posX = robot.posY = 100;
    enemy.posX = enemy.posY = 470;
    box.posX = box.posY = 340;
    speed.posX = speed.posY = 196;
    range.posX = range.posY = 415;
    medalha1.posX = medalha1.posY = 270;
    medalha2.posX = medalha2.posY = 240;
    medalha3.posX = medalha3.posY = 370;
    medalha4.posX = medalha4.posY = 440;

    loop();
  }

  function update() {
    robot.move();
    robot.checkCollision(enemy);
  }

  //initial draw
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      scene,
      0,
      0,
      scene.width,
      scene.height,
      0,
      0,
      canvas.width,
      canvas.height
    );
    robot.draw(ctx);
    enemy.draw(ctx);
    box.draw(ctx);
    speed.draw(ctx);
    range.draw(ctx);
    medalha1.draw(ctx);
    medalha2.draw(ctx);
    medalha3.draw(ctx);
    medalha4.draw(ctx);
  }

  function loop() {
    window.requestAnimationFrame(loop, canvas);
    update();
    draw();
  }
};
