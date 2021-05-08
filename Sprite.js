function Sprite(img) {
  //Setting character movements
  this.mvRight = mvUp = mvDown = mvLeft = false;
  this.srcX = this.srcY = 0;

  //Setting character size
  this.width = 64;
  this.height = 67;
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
      console.log("OBJETO ROBO DIREITA");
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

  //Adding animation to the character's movements
  this.animation = function () {
    if (this.mvRight || this.mvLeft || this.mvDown || this.mvUp) {
      this.countAnim++;
      console.log(this.countAnim);
      if (this.countAnim >= 10) {
        this.countAnim = 0;
      }
      this.srcX = Math.floor(this.countAnim / 5) * this.width;
    }
  };
}
