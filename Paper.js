class Paper {
    constructor(x,y,radius) {
      var options = {  
        restitution:0.3,
          friction:1.5,
          density:0.8
      }
      this.body = Bodies.circle( x, y, radius, options)
      World.add(world,this.body);
    }
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
      
       push();
       translate(pos.x,pos.y);
       rotate(angle);
      fill("purple");
      ellipseMode(CENTER);
      //circle( 0, 0, this.radius*2);
      ellipse(0,0,20,20);
      pop();
    }
}
  