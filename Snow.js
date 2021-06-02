class snow{
    constructor(x,y,width,height){
        var option={
            restitution: 1,
            friction: 0,
            isStatic:false
        }
        this.body = Bodies.rectangle(x,y,width,height,option);
        this.x=x;
        this.y=y;
        this.width = width;
        this.height = height;
       // this.body.lifeTime=100
        this.image=loadImage("snow4.webp");
        this.image.scale=20;
       // this.image=loadImage("snow1.jpg");
       
    }
    display(){
        push();
        translate(this.x, this.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}