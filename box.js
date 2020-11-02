class Box{
    constructor(x,y,width,height);{
        var options={
isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world, this.add);

    }
    display(){
        var pos=this.body.position;
        rectMODE(CENTRE);
        fill(255);
        rect(pos.x,pos.y,this.width,this.height);
    }
};
