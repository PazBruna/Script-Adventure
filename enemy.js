function Enemy(img) {
  //Setting character movements
  this.srcX = this.srcY = 0;

  //Setting character
  this.width = 64;
  this.height = 68;
  this.speed = 1;
  this.posX = this.posY = 0;
  //this.countAnim = 0;

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
    //this.animation();
  };

  /*
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
  */
}
