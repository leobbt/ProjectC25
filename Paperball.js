class Paperball {

    constructor(x,y) {

        var options = {
            'density':1,
            'friction': 1.0,
            'restitution':0.1
          }

		this.x=x;
		this.y=y;
        this.image = loadImage("paper.png");
		this.body=Bodies.rectangle(x, y, options);
 		World.add(world, this.body);

    }

    display(){

        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, x, y, this.width, this.height);
        pop();

    }

}