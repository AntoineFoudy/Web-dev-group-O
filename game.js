var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// c = context, saves time 
var c = canvas.getContext("2d");

var mouse = {
    x: 0,
    y: 0
};

// Checks if mouse is being moved
window.addEventListener("mousemove", function(event) {
    mouse.x = event.x;
    mouse.y = event.y;
});


// Objects
function Circle(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;

    this.update = function() {
        this.draw();
    };

    this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        c.fillStyle = this.color;
        c.fill();
        c.closePath();
    };
}

function Square(x, y, sideLength, color) {
    this.x = x;
    this.y = y;
    this.sideLength = sideLength;
    this.color = color;

    this.update = function() {
        this.draw();
    };

    this.draw = function() {
        c.beginPath();
        c.rect(this.x, this.y, this.sideLength, this.sideLength);
        c.fillStyle = this.color;
        c.fill();
        c.closePath();
    };
}

// Implementation
let player1;
function init(){
    player1 = new Square(undefined, undefined, 50, "black");
}

function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    
    player1.x = mouse.x;
    player1.y = mouse.y;
    player1.update();

    


}


init();
animate();