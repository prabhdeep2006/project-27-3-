class Mango {
    constructor(x,y,radius){
        var options = {
            isStatic:true,
            restitution:0,
            friction:1
        }
        this.body=Bodies.circle(x,y,radius,options);
        this.radius=radius;
        this.img=loadImage("Plucking Mangoes/mango.png");
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        push();
        imageMode(CENTER);
        image(this.img,pos.x,pos.y,this.radius*2,this.radius*2);
        pop();
    }
}