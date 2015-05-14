(function() {
  if (typeof Pinatas === "undefined") {
    window.Pinatas = {};
  }

  var Player = Pinatas.Player = function(options) {

    Pinatas.MovingObject.call(this, options);
    this.image = new Image();
    this.image.src = 'lib/young_warrior.png';
    this.drawWidth = 80;
    this.drawHeight = 140;
    this.center = [54, 67];
    this.width = 52;
    this.height = 134;

    this.isCollidedWith = function(object) {
      var minXDistance = this.width/2 + object.width/2;
      var minYDistance = this.height/2 + object.width/2;
      var xDistance = Math.abs(this.pos[0] - object.pos[0]);
      var yDistance = Math.abs(this.pos[1] - object.pos[1]);
      return xDistance <= minXDistance && yDistance <= minYDistance;
    };

    this.power = function(impulse) {
       switch(impulse) {
        case 'up':
          if (this.vel[1] > -8 && this.vel[1] <= 0) {
            this.vel[1] += -2
          } else if (this.vel[1] > 0) {
            this.vel[1] += -4
          }
          break;
        case 'down':
          if (this.vel[1] < 8 && this.vel[1] >= 0) {
            this.vel[1] += 2
          } else if (this.vel[1] < 0) {
            this.vel[1] += 4
          }
          break;
        case 'left':
          if (this.vel[0] > -8 && this.vel[0] <= 0) {
            this.vel[0] += -2
          } else if (this.vel[0] > 0) {
            this.vel[0] += -4
          }
          break;
        case 'right':
          if (this.vel[0] < 8 && this.vel[0] >= 0) {
            this.vel[0] += 2
          } else if (this.vel[0] < 0) {
            this.vel[0] += 4
          }
          break;
      }
    };

    this.swing = function() {

    };

  };

  Pinatas.Util.inherits(Player, Pinatas.MovingObject);

})();