window.onload = function () {
  const canvas = document.querySelector("canvas");
  const ctx = canvas.getContext("2d");

  //Generates robot character
  let spriteSheet = new Image();
  spriteSheet.src = "img/playerUmSprite.png";

  let enemySprite = new Image();
  enemySprite.src = "img/inimigoUmSprite.png";

  let boxSprite = new Image();
  boxSprite.src = "img/boxItem.png";

  let scene = new Image();
  scene.src = "img/mapaUm.png";

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
    box.posX = box.posY = 370;
    loop();
  }

  function update() {
    robot.move();
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
  }

  function loop() {
    window.requestAnimationFrame(loop, canvas);
    update();
    draw();
  }
};
