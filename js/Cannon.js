class Cannon{
    constructor(x,y,w,h,angle){
        this.w=w;
        this.h=h;
        this.angle=angle;
        var options={isStatic:true};
        this.cannon=loadImage("assets/canon.png");
        this.cannonBase=loadImage("assets/cannonBase.png")
    }
    display(){
        
    }
}