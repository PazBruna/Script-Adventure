function Sprite(img) {
  //Setting character movements
  this.mvRight = mvUp = mvDown = mvLeft = false;
  this.srcX = this.srcY = 0;

  //Setting character
  this.width = 40;
  this.height = 45;
  this.speed = 1;
  this.posX = this.posY = 0;
  this.countAnim = 0;

  this.img = img;

  //Function draw canvas
  this.draw = function (ctx) {
    ctx.drawImage(
      this.img,
      this.srcX,
      this.srcY,
      this.width,
      this.height,
      this.posX,
      this.posY,
      this.width,
      this.height
    );
    this.animation();
  };

  //function moviments
  this.move = function () {
    if (this.mvRight) {
      this.posX += this.speed;
      this.srcY = this.height * 3;
    } else if (this.mvLeft) {
      this.posX -= this.speed;
      this.srcY = this.height * 2;
    } else if (this.mvUp) {
      this.posY -= this.speed;
      this.srcY = this.height * 1;
    } else if (this.mvDown) {
      this.posY += this.speed;
      this.srcY = this.height * 0;
    }
  };

  function distance(x1, y1, x2, y2) {
    let xDistance = x2 - x1;
    let yDistance = y2 - y1;

    return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
  }

  this.checkCollision = function (obj2) {
    if (
      this.posX < obj2.posX - obj2.width &&
      this.posX + this.width > obj2.posX &&
      this.posY < obj2.posY + this.height &&
      this.posY + this.height > obj2.posY
    ) {
      console.log("COLIDIU");
    }
    //console.log(distance(this.posX, this.posY, obj2.posX, obj2.posY));
  };

  //Adding animation to the character's movements
  this.animation = function () {
    if (this.mvRight || this.mvLeft || this.mvDown || this.mvUp) {
      this.countAnim++;
      if (this.countAnim >= 10) {
        this.countAnim = 0;
      }
      this.srcX = Math.floor(this.countAnim / 5) * this.width;
    }
  };
}
