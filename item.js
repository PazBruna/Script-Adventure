function Item(img) {
  //Setting character movements
  this.srcX = this.srcY = 0;

  //Setting character
  this.width = 48;
  this.height = 48;
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
}
