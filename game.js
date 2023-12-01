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
function Circle(x, y, dx, dy, radius, color) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = color;

    this.update = function() {
        this.x += this.dx;
        this.y += this.dy;
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }

        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;
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
let circle
function init(){
    player1 = new Square(undefined, undefined, 50, "black");
    var x = Math.random() * innerWidth;
    var y = Math.random() * innerHeight;
    var dx = (Math.random() - 0.5) * 8;
    var dy = (Math.random() - 0.5) * 8;
    circle = new Circle(x, y, dx, dy, 30, "red");
}

function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    
    player1.x = mouse.x;
    player1.y = mouse.y;
    player1.update();
   
    circle.update();


}


document.getElementById("playGame").addEventListener("click", function() {
    init();
    animate();
});