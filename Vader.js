class Vader{

    constructor(x,y){
        var options = {
            isStatic:true,
        }

        this.image=loadImage("VAder.png")
        this.x=x
        this.y=y
        this.body=Bodies.rectangle(x, y, 100, 100, options)
        World.add(world, this.body);
    }
    display()
    {
        push()
        imageMode(CENTER)
        image(this.image, this.x, this.y, 100, 100);
        pop();

    }


}