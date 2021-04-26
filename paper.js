class paper {
    constructor(x, y,height,angle) {
      var options = {
          isStatic:false,
         restitution:0.3,
          friction:0.5,
          density:1.2
      }
      this.body = Bodies.circle(x, y, this.radius, options);
      this.radius = this.radius;
      
      
      World.add(world, this.body);
    }
    display(){
      ellipesMode(RADIUS)

      fill("yellow")

      circle(this.body.position.x,this.body.position.y,this.radius)
    }
  };