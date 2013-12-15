// utilities 
var throttle = function(func, throttle){
   var lastTime = Date.now();
   var throttle = throttle;
   return function(){
      var currentTime = Date.now();
      if(currentTime - lastTime > throttle){
         var val = func.apply(this, Array.prototype.slice.call(arguments,0));
         lastTime = currentTime;
         return val;
      }
   }
}

var fireBullet = function(x, y, velx, vely, color){
   var b = new Bullet(x, y, 5, 5, color || Color.Red);
   b.dx = velx;
   b.dy = vely;
   game.addChild(b);
   return b;
};

var flipBarrel = false;
var flipFire = throttle(function(){
   var b = fireBullet.apply(this, Array.prototype.slice.call(arguments,0));
   flipBarrel = !flipBarrel;
   laserSound.play();
   return b;
}, Config.playerFireThrottle);