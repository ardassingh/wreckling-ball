class Box{
    constructor(x,y,w,h){
        var options = {
            isStatic:false,
            restitution:1,
            friction:1,
            density:0.04
        }
        this.body=Bodies.rectangle(x,y,w,h,options);
        this.width=w;
        this.height=h;
        World.add(world,this.body);

    }
    display(){
        push()

        rectMode(CENTER);
        fill("red");
        strokeWeight(4);
        stroke("green");
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        rect(0,0,this.width,this.height);
        pop();

    }
}