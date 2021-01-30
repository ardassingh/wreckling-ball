class Ball{
    constructor(x,y,w,h,angle){
        var options = {
            frictionAir:0.005,
            density:1
        }
        this.body=Bodies.rectangle(x,y,w,h,options);
        this.width=w;
        this.height=h;
        World.add(world,this.body);

    }
    display(){
        push()
        ellipseMode(CENTER);
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        ellipse(0,0,this.width,this.height);
        pop();

    }
}