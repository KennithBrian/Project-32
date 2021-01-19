class Polygon{
    constructor(x,y,sides,r) {
        var options = {
            'restitution':0.3,
            'friction':1.0,
            'density':1.2
        }
        this.body = Bodies.polygon(x,y,sides,r,options);
        this.image = loadImage('polygon.png');
        World.add(world,this.body);
    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image,0,0,40,40);
        pop();
    }
}