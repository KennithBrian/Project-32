class Box{
    constructor(x,y,width,height,r,g,b){
        var options = {
            'restitution':0.3,
            'friction':1.0,
            'density':1.0
        }
        this.Visiblity = 255;
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.r = r;
        this.g = g;
        this.b = b;
        World.add(world, this.body);
    }
    display(){
        if(this.body.speed < 3){
            var pos = this.body.position;
            var angle = this.body.angle;
            push();
            translate(pos.x,pos.y);
            rotate(angle);
            rectMode(CENTER);
            rect(pos.x,pos.y,this.width,this.height);
            strokeWeight(2);
            stroke(0);
            fill(this.r,this.b,this.g);
            pop();
        }
        else{
            World.remove(world,this.body);
            push();
            this.Visiblity = this.Visiblity-5;
            tint(255,this.Visiblity);
            rect(0,0,this.width,this.height);
            //image(this.image,this.body.position.x,this.body.position.y,50,50);
            pop();
        }
    }
    score(){
        if(this.Visiblity < 0 && this.Visiblity > -100){
            score++;
        }
    }
}