class Dustbin {
    constructor() {
      var options = {
        isStatic:false,  
        restitution:0.3,
          friction:0.5,
          density:1.2
      }
      this.body1 = Bodies.rectangle(640,640,200,20, options);
      this.body2 = Bodies.rectangle(540,600,25,100, options);
      this.body3 = Bodies.rectangle(740,600,25,100, options);
      
      World.add(world, this.body1);
      World.add(world, this.body2);
      World.add(world, this.body3);
    }
    display(){
      fill("white");
      rect(650,630,200,20);
      rect(550,590,25,100);
      rect(750,590,25,100);
    }
  };
  