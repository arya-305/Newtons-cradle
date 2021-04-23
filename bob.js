class Bob {
  constructor(x, y, width, height) {
    var options = { 
      'restitution': 0.8,
      'isStatic': false
    };

    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }

  display() {
    push();
    translate(this.body.position.x, this.body.position.y);
    
    ellipseMode(CENTER);
    ellipse(0, 0, this.width, this.height);
    pop();
  }
}
